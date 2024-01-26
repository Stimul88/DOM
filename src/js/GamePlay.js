export default class GamePlay {
  constructor() {
  }

  init() {
    this.bindToDOM()
    this.randomExit()

  }

  bindToDOM() {
    const container = document.querySelector('#game-container')
    let newTag = document.createElement('div');

    newTag.className = 'all-cells';

    newTag.innerHTML = `
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
        <br/>
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
        <br/>
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
        <br/>
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
        <div class="cells"></div>
    `;

    container.appendChild(newTag);
  }

  randomExit() {
    const cells = Array.from(document.querySelectorAll('.cells'))
    let newTag = document.createElement('img');
    newTag.className = 'active';
    document.addEventListener('DOMContentLoaded', () => {
        setInterval(() => {
          const randomCells = []
          cells.forEach(item => {
            if(!item.hasChildNodes()) {
              randomCells.push(item)
            }
          })
          const random = randomCells[Math.floor(Math.random() * randomCells.length)]
          random.appendChild(newTag)
        },1000)
      })
  }

}
