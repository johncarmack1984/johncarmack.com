variable "domain_name" {
  description = "Apex domain for the site."
  type        = string
  default     = "johncarmack.com"
}

variable "bucket_name" {
  description = "Private S3 bucket holding the built static site (served only via CloudFront OAC)."
  type        = string
  default     = "johncarmack-com-site"
}
