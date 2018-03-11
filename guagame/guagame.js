/**
 * Created by qzy on 2018/3/5.
 * File description:
 */
var Game = function (images, callback) {
  //loads is a dict width pics names
  var g = {
    scene: null,
    actions: {},
    keydowns: {},
    images: {},
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

  g.update = function () {
    g.scene.update && g.scene.update()
  }
  g.draw = function () {
    g.scene.draw()
  }
  //register
  g.registerAction = function (key, callback) {
    g.actions[key] = callback
  }
  var runloop = function () {

    //events
    for (let key in g.actions) {
      if (g.keydowns[key]) {
        g.actions[key]()
      }
    }

    //update
    g.update && g.update()

    //clear
    g.context.clearRect(0, 0, canvas.width, canvas.height)

    //draw
    g.draw()

    setTimeout(function () {
      runloop()
    }, 1000 / window.fps)
  }
  var loads = []
  var names = Object.keys(images);
  //预先载入所有图片
  names.forEach(name => {
    // var name = names[i]
    var path = images[name]
    var img = new Image();
    img.src = path
    img.onload = () => {
      //存入g.images
      g.images[name] = img;
      //all pics is ready, run
      loads.push(1)
      if (loads.length === names.length) {
        console.log(g.images)
        g.__start()
      }
    }
  })

  g.imageByName = function (name) {
    var img = g.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img,
    };
    return image
  }
  g.runWithScene = function (scene) {
    g.scene = scene
    // 开始运行程序
    setTimeout(function () {
      runloop()
    }, 1000 / fps)
  }
  g.replaceScene = function (scene) {
    g.scene = scene;
  }
  g.__start = function () {
    callback(g)
  }

  return g
}