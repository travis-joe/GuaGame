/**
 * Created by qzy on 2018/3/9.
 * File description:
 */
var blocks = [];
var score = 0;
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

  var game = Game(images, function(game){
    var paddle = Paddle(game);
    var ball = Ball(game);

    blocks = loadLevel(game, 1)
    game.registerAction('a', function () {
      paddle.moveLeft()
    })
    game.registerAction('d', function () {
      paddle.moveRight()
    })
    game.registerAction('f', function () {
      ball.fire()
    })

    game.update = function () {
      if (window.paused) {
        return
      }
      ball.move()
      //判断paddle相撞
      if (paddle.collide(ball)) {
        ball.revert()
      }

      //判断blocks相撞
      blocks.forEach(block => {
        if (block.collide(ball)) {
          log('collided')
          block.kill()
          ball.revert()
          score += 100
        }
      })

    }

    game.draw = function () {
      // draw
      game.drawImage(paddle)
      game.drawImage(ball)
      // draw blocks
      blocks.forEach(block => {
        if (block.alive) {
          game.drawImage(block)
        }
      });
      // draw labels
      game.context.fillText(`分数:${score}`, 10, 290);
    }
  })
  enableDebugMode(game, true)

}

__main()