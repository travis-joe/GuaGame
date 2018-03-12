/**
 * Created by qzy on 2018/3/11.
 * File description:
 */
const Scene = function (game) {
  const s = {
    game: game,
  }
  //初始化
  var paddle = Paddle(game);
  var ball = Ball(game);

  var score = 0;

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

  s.draw = function () {
    //draw background
    game.context.fillStyle = "gray"
    game.context.fillRect(0,0, 400, 300)
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
  s.update = function () {
    if (window.paused) {
      return
    }
    ball.move()
    //判断游戏结束
    if (ball.y > paddle.y){
      var end = SceneEnd.new(game)
      game.replaceScene(end)
    }
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
  var enableDrag = false
  game.canvas.addEventListener('mousedown', event => {
    const x = event.offsetX
    const y = event.offsetY

    if(ball.hasPoint(x, y)) {
      enableDrag = true
    }
  })
  game.canvas.addEventListener('mousemove', event => {
    const x = event.offsetX
    const y = event.offsetY
    if(enableDrag) {
      ball.x = x
      ball.y = y
    }
  })
  game.canvas.addEventListener('mouseup', event => {
    const x = event.offsetX
    const y = event.offsetY

    enableDrag = false
  })
  return s;
}