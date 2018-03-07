/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Game = function (fps) {
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

  window.fps = 30

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
  //timer
  setTimeout(function () {
    runloop()
  }, 1000 / fps)

  return g
}