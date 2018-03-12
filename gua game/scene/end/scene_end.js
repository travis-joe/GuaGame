/**
 * Created by qzy on 2018/3/11.
 * File description:
 */


class SceneEnd extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('r', function () {
      var s = SceneTitle.new(game)
      game.replaceScene(s)
    })
  }

  draw(){
    this.game.context.fillText("游戏结束, Press R Replay", 100 ,290)
  }


}