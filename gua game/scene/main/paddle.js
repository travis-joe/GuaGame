/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Paddle = function (game) {
  var image = game.imageByName('paddle');
  var o = {
    image: image.image,
    w: image.w,
    h: image.h,
    x: 100,
    y: 250,
    speed: 15,
    move: function (x) {
      if(x <0) {
        x = 0
      }
      if(x > 400 - this.image.w) {
        x = 400 - this.image.w
      }
      this.x = x
    },
    moveLeft: function () {
      this.move(this.x - this.speed)
    },
    moveRight: function () {
      this.move(this.x + this.speed)
    },
    collide: function (ball) {
      var a = o
      var b = ball
      if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
          return true
        }
      }
      return false
    },
  }

  var aInb = function (x, x1, x2) {
    return x > x1 && x<=x2
  }
  return o
}