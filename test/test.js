var gaussQuad = require("../quad.js")
  , almostEqual = require("almost-equal")

require("tap").test("gauss quadrature", function(t) {

  function check(n, points, weights) {
    console.log("gauss =", gaussQuad(n))
    console.log("exact = ", [points, weights])
  }
  
  check(1, [0], [2.0])
  check(2, [-Math.sqrt(3.0)/3.0, Math.sqrt(3.0)/3.0], [1, 1])
  check(3, [-Math.sqrt(3/5), 0, Math.sqrt(3/5)], [5/9, 8/9, 5/9])

  t.end()
})