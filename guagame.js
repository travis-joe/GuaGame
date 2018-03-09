/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Game = function (images) {
  //loads is a dict width pics names
  var g = {
    actions: {},
    keydowns: {},
  }
  var canvas = document.querySelector('#id-canvas')
  var context = canvas.getContext('2d')
  g.canvas = canvas
  g.context = context
  g.drawImage = function (gameImage) {
    g.context.drawImage(gameImage.image, gameImage.x, gameImage.y)
  }
  //events
  window.addEventListener('keydown', function (event) {
    g.keydowns[event.key] = true
  })

  window.addEventListener('keyup', function (event) {
    g.keydowns[event.key] = false
  })
  //register
  g.registerAction = function (key, callback) {
    g.actions[key] = callback
  }
  var loads = []
  var names = Object.keys(images);
  //预先载入所有图片
  for (var i = 0; i < names.length, i++) {
    var name = names[i]
    var path = images[name]
    var img = new Image();
    img.src = path
    img.onload = () => {
      //all pics is ready, run
      loads.push(1)
      if (loads.length === names.length) {
        g.run()
      }
    }
  }

}

var runloop = function () {

  //events
  for (let key in g.actions) {
    if (g.keydowns[key]) {
      g.actions[key]()
    }
  }

  //update
  g.update()

  //clear
  g.context.clearRect(0, 0, canvas.width, canvas.height)

  //draw
  g.draw()

  setTimeout(function () {
    runloop()
  }, 1000 / window.fps)
}

g.run() = () => {
  //timer
  setTimeout(function () {
    runloop()
  }, 1000 / window.fps)
}

return g
}