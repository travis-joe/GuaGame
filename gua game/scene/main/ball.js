/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Ball = function (game) {
  var image = game.imageByName('ball')
  var o = {
    w: image.w,
    h: image.h,
    image: image.image,
    x: 100,
    y: 200,
    speedX: 5,
    speedY: 5,
    fired: false,
    fire: function () {
      this.fired = true
    },
    move: function () {
      if (this.fired) {
        if (this.x < 0 || this.x + this.w > 400) {
          this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y + this.h > 300) {
          this.speedY = -this.speedY
        }

        this.x += this.speedX
        this.y += this.speedY
      }
    },
    revert: function () {
      this.speedY *= -1
    },
    hasPoint: function (x, y) {
      var xIn = x >= o.x && x < o.x + o.w;
      var yIn = y >= o.y && y < o.x + o.h;
      return xIn && yIn
    },
  }
  return o
}