/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Block = function () {
  var image = imageFromPath('block.png')
  image.onload = function () {
    o.w = this.width
    o.h = this.height
  }
  var o = {
    image: image,
    x: 100,
    y: 100,
    alive: true,
    kill: function () {
      o.alive = false
    },
    collide: function (b) {
      return this.alive && (rectIntersects(o, b) || rectIntersects(b, o));
    },
  }
  return o
}