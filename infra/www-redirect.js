// CloudFront Function (viewer-request, cloudfront-js-2.0): 301 the www host to
// the apex so search engines see one canonical origin instead of two
// byte-identical hosts. The path and query string ride along; every other
// request passes through. Rendered by templatefile() in cdn.tf, which fills in
// ${domain}, so no JS template literals in here.
//
// Runtime rails: the 2.0 runtime rejects `for...of` AT EXECUTION TIME (publish
// does not catch it; the whole distribution 503s), so this stays on indexed
// loops and `var`. Validate any change with `aws cloudfront test-function`
// before it goes live.
function handler(event) {
  var request = event.request;
  var host = request.headers.host ? request.headers.host.value : "";
  if (host !== "www.${domain}") {
    return request;
  }

  var query = "";
  var keys = Object.keys(request.querystring);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = request.querystring[key];
    var values = entry.multiValue
      ? entry.multiValue.map(function (item) {
          return item.value;
        })
      : [entry.value];
    for (var j = 0; j < values.length; j++) {
      query += (query ? "&" : "?") + key;
      if (values[j] !== "") {
        query += "=" + values[j];
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
