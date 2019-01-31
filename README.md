# SCOTUSLink - Supreme Court Opinion URL Shortener

Envisioned by [Orin Kerr](https://twitter.com/OrinKerr) to make it easier for lawyers, journalists and citizens to access Supreme Court opinion PDFs.

# The Problem

PDFs are made available online of Supreme Court opinions, but quickly finding the PDF for a given Volume and Page can be challenging.

PDFs of opinions are available through 2004 (Vol. 542) at the Library of Congress site, indexed by page.
Newer opinions are available at the SCOTUS site, but only in PDFs spanning the whole volume, so we prefer LOC.

Both sites use consistent URL formats for their PDFs, so this site provides a simple interface for templating in Volume and Page.

# Design

SCOTUSLink was designed as a lightweight, serverless URL redirector.

The site is an AWS API Gateway defined in a single AWS Cloudformation file, with the following resources:

* A Lambda function that templates volume and page into a URL
* An endpoint to return these URLs in 302 redirects
* An endpoint serving a standalone HTML page with inline CSS, Javascript and SVG logo
* An IAM execution role to enable Cloudwatch logging
* A Route53 hosted zone

In this way, we avoid any persisted resources, even images, so hosting costs are very, very low.

Thanks to [Juan Moncada](https://github.com/juanmoncada) for the visual design, and his clever use of SVG in the logo.

Thanks also to [Ryan Green](https://github.com/rpgreen) for his [article on implementing 302 redirects in API Gateway](http://blog.ryangreen.ca/2016/01/04/how-to-http-redirects-with-api-gateway-and-lambda/), which formed the basis for this approach.

# Contributing

Suggestions, contributions, and expertise are welcome!  Please email any suggestions to (scotuslink@gmail.com)[mailto:scotuslink@gmail.com] or contact [me on Twitter](https://twitter.com/birds_____).

SCOTUSLink is released under the [GNU Affero General Public License v3.0](LICENSE.txt), which means you are free to use, copy, modify, share, and distribute this code, as long as any derivate works are also released under this license.

