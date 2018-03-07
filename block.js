/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Block = function (position) {
  var image = imageFromPath('block.png')
  var p = position
  var o = {
    image: image,
    w:image.width,
    h:image.height,
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