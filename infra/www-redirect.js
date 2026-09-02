// CloudFront Function (viewer-request, cloudfront-js-2.0): 301 the www host to
// the apex so search engines see one canonical origin instead of two
// byte-identical hosts. The path and query string ride along; every other
// request passes through. Rendered by templatefile() in cdn.tf, which fills in
// ${domain}, so no JS template literals in here.
function handler(event) {
  const request = event.request;
  const host = request.headers.host ? request.headers.host.value : "";
  if (host !== "www.${domain}") {
    return request;
  }

  let query = "";
  for (const key of Object.keys(request.querystring)) {
    const entry = request.querystring[key];
    const values = entry.multiValue
      ? entry.multiValue.map((item) => item.value)
      : [entry.value];
    for (const value of values) {
      query += (query ? "&" : "?") + key;
      if (value !== "") {
        query += "=" + value;
      }
    }
  }

  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: {
      location: { value: "https://${domain}" + request.uri + query },
      "cache-control": { value: "max-age=3600" },
    },
  };
}
