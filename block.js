/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Block = function (position) {
  var image = imageFromPath('block.png')

  var o = {
    image: image,
    w:image.width,
    h:image.height,
    x: position[0],
    y: position[1],
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