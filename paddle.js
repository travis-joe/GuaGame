/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Paddle = function () {
  var image = imageFromPath('paddle.png')
  var o = {
    image: image,
    x: 100,
    y: 250,
    speed: 15,
    move: function (x) {
      if(x <0) {
        x = 0
      }
      if(x > 400 - this.image.width) {
        x = 400 - this.image.width
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
      if (ball.y + ball.height > o.y) {
        if (ball.x > o.x && ball.x < o.x + o.image.width) {
          // log('true')
          return true
        }
      }
      return false
    },
  }
  return o
}