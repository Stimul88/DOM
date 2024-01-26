import GamePlay from '../GamePlay';

const gamePlay = new GamePlay();

test('bindToDOM test', () => {
  expect(gamePlay.bindToDOM).toThrow();
});
