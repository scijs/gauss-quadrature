"use strict"

var legendreP = require("legendre-poly")
  , deriv     = require("poly-derivative")
  , roots     = require("companion-roots")
  , horner    = require("horner")

function gaussQuadrature(n) {
  var p = legendreP(n)
    , x = roots(p)[0]
    , d = deriv(p)
    , w = new Array(n)
    , s, t
  for(var i=0; i<n; ++i) {
    s = x[i]
    t = horner(d, s)
    w[i] = 2.0 / ((1.0 - s*s) * t * t)
  }
  return [x, w]
}

module.exports = gaussQuadrature
