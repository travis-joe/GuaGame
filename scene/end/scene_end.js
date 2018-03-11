/**
 * Created by qzy on 2018/3/11.
 * File description:
 */
/**
 * Created by qzy on 2018/3/11.
 * File description:
 */
const SceneEnd = function (game) {
  const s = {
    game: game,
  }
  game.registerAction('r', function () {
    var s = SceneTitle.new(game)
    game.replaceScene(s)
  })
  s.draw = function () {
    //draw background
    game.context.fillText("游戏结束, Press R Replay", 100 ,290)
  }

  return s;
}