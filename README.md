gauss-quadrature
================
This library computes [Gauss-Legendre quadrature](http://en.wikipedia.org/wiki/Gaussian_quadrature#Gauss.E2.80.93Legendre_quadrature) points and weights for numerical integration.  For more information, see:

* http://pomax.github.io/bezierinfo/legendre-gauss.html

Example
=======

```javascript
var gaussQ = require("gauss-quadrature")

console.log(gaussQ(2))

//Prints:
//
//  [ [ -0.5773502691896257, 0.5773502691896257 ], [ 1, 1 ] ]
//
```

Install
=======

    npm install gauss-quadrature


`require("gauss-quadrature")(n[, a, b])`
----------------------------------------
Computes the Gaussian quadrature points and weights for the interval [a, b].

* `n` is the number of quartature points
* `a` is the start of the interval (default -1)
* `b` is the end of the interval (default +1)

If either `a` or `b` is unspecified, the interval defaults to `[-1, 1]`

**Returns** An array with two elements, `[x, w]` where:

* `x` is the list of quadrature points
* `w` is the list of quadrature weights

## Note
Quadrature points are only accurate to 1e-6

# Credits
(c) 2013 Mikola Lysenko. MIT License