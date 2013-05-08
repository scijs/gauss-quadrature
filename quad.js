"use strict"

var legendreP = require("legendre-poly")
  , deriv     = require("poly-derivative")
  , roots     = require("durand-kerner")
  , horner    = require("horner")

function gaussQuadrature(n, a, b) {
  var p = legendreP(n)
    , x = roots(p)[0]
    , d = deriv(p)
    , w = new Array(n)
    , s, t, i
  for(i=0; i<n; ++i) {
    s = x[i]
    t = horner(d, s)
    w[i] = 2.0 / ((1.0 - s*s) * t * t)
  }
  if(!(a === undefined || b === undefined)) {
    s = 0.5 * (b - a)
    t = 0.5 * (b + a)
    for(i=0; i<n; ++i) {
      x[i] = x[i] * s + t
      w[i] *= s
    }
  }
  return [x, w]
}

module.exports = gaussQuadrature
