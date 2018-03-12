/**
 * Created by qzy on 2018/3/11.
 * File description:
 */

class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('k', function () {
      var s = Scene(game)
      game.replaceScene(s)
    })
  }

  draw(){
    this.game.context.fillText("开始游戏 press k", 100 ,100)
  }

}