/**
 * Created by qzy on 2018/3/5.
 * File description:
 */


class Game {
  constructor(fps, images, runCallBack){
    window.fps = fps;
    this.images = images;
    this.runCallBack = runCallBack;

    this.scene= null;
    this.actions= {};
    this.keydowns= {};
    this.canvas = document.querySelector('#id-canvas');
    this.context = this.canvas.getContext('2d');

    //events
    window.addEventListener('keydown',  event => {
      this.keydowns[event.key] = true
    })

    window.addEventListener('keyup',  event => {
      this.keydowns[event.key] = false
    })

    this.init()
  }
  static instance(...args) {
    this.i = this.i || new this(...args)
    return this.i
  }
  drawImage(gameImage) {
    this.context.drawImage(gameImage.image, gameImage.x, gameImage.y)
  }

  update() {
    this.scene.update && this.scene.update()
  }

  draw() {
    this.scene.draw()
  }
  //register
  registerAction(key, callback) {
    this.actions[key] = callback
  }

  runloop() {
    //events
    for (let key in this.actions) {
      if (this.keydowns[key]) {
        this.actions[key]()
      }
    }

    //update
    this.update && this.update()

    //clear
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    //draw
    this.draw()

    setTimeout( () => {
      this.runloop()
    }, 1000 / window.fps)
  }

  init() {
    var loads = []
    var names = Object.keys(this.images);
    //预先载入所有图片
    names.forEach(name => {
      // var name = names[i]
      var path = this.images[name]
      var img = new Image();
      img.src = path
      img.onload = () => {
        //存入g.images
        this.images[name] = img;
        //all pics is ready, run
        loads.push(1)
        if (loads.length === names.length) {
          console.log(this.images)
          this.__start()
        }
      }
    })
  }

  imageByName(name) {
    var img = this.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img,
    };
    return image
  }
  runWithScene(scene) {
    this.scene = scene
    // 开始运行程序
    setTimeout( () => {
      this.runloop()
    }, 1000 / fps)
  }
  replaceScene(scene) {
    this.scene = scene;
  }
  __start() {
    this.runCallBack(this)
  }
}