/**
 * Created by qzy on 2018/3/9.
 * File description:
 */
var blocks = [];

var loadLevel = function (game, n) {
  n = n - 1
  var level = levels[n];
  var blocks = []
  for (var i = 0; i < level.length; i++) {
    var p = level[i]
    var b = Block(game, p)
    blocks.push(b)
  }
  return blocks
}

var enableDebugMode = function (game, enable) {
  if (!enable) {
    return
  }
  window.paused = false
  window.addEventListener('keydown', function (event) {
    var k = event.key
    if (k == 'p') {
      // 暂停功能
      window.paused = !window.paused
    } else if ('1234567'.includes(k)) {
      // 为了 debug 临时加的载入关卡功能
      blocks = loadLevel(game, Number(k))
    }
  })

  document.querySelector('#id-input-speed').addEventListener('input', (e) => {
    var input = e.target
    // log(input.value)
    window.fps = Number(input.value/100 * 60) || 1
  });
}

var __main = function () {
  var images = {
    ball: 'ball.png',
    block:'block.png',
    paddle:'paddle.png',
  };
  var game = Game(images, function (g) {
    var s = Scene(g)
    g.runWithScene(s)
  })


  enableDebugMode(game, true)


}

__main()