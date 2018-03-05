/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var log = console.log.bind(this)
var fps = 60;
var imageFromPath = function (path) {
  var img = new Image()
  img.src = path
  return img
}

var rectIntersects = function (a, b) {
  var o = a
  if (b.y > o.y && b.y < o.y + o.image.height) {
    if (b.x > o.x && b.x < o.x + o.image.width) {
      return true
    }
  }
  return false
}