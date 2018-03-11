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

  s.draw = function () {
    //draw background
    game.context.fillText("游戏结束", 100 ,290)
  }

  return s;
}