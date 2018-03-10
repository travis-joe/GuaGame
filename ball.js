/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Ball = function (game) {
  var image = game.imageByName('ball')
  var o = {
    width: image.w,
    height: image.h,
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
        if (this.x < 0 || this.x + this.width > 400) {
          this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y + this.height > 300) {
          this.speedY = -this.speedY
        }

        this.x += this.speedX
        this.y += this.speedY
      }
    },
    revert: function () {
      this.speedY *= -1
    },
  }
  return o
}