/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Block = function (game, position) {
  var image = game.imageByName('block')
  var p = position
  var o = {
    image: image.image,
    width:image.w,
    height:image.h,
    x: p[0],
    y: p[1],
    alive: true,
    lifes: p[2] || 1,
    kill: function () {
      o.lifes--
      if(o.lifes < 1) {
        o.alive = false
      }
    },
    collide: function (b) {
      return this.alive && (rectIntersects(o, b) || rectIntersects(b, o));
    },
  }
  return o
}