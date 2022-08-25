import './ts/importImages.ts'

type SlideLoc = {
  btnEl: HTMLElement
  sectionEl: HTMLElement | 0
}

class SetSectionPos {
  constructor(readonly btnEl: HTMLElement, readonly sectionEl: HTMLDivElement | 0) {}
}

function moveToLinkPosition(btnEl: HTMLElement, sectionEl: HTMLDivElement | 0) {
  btnEl.addEventListener('click', () => {
    console.log(btnEl)
    console.log(sectionEl)
    if (sectionEl === 0) {
      const position = 0
      window.scrollTo(0, 0)
    } else {
      const position = sectionEl.getBoundingClientRect()
      console.log(position)
      window.scrollTo({ top: position.top, left: 0, behavior: 'smooth' })
    }
  })
}

const home = new SetSectionPos(document.getElementById('homeBtn')! as HTMLElement, 0)
const skill = new SetSectionPos(
  document.getElementById('skillBtn')! as HTMLElement,
  document.getElementById('skillEl')! as HTMLDivElement
)
const portfolio = new SetSectionPos(
  document.getElementById('portfolioBtn')! as HTMLElement,
  document.getElementById('portfolioEl')! as HTMLDivElement
)

window.addEventListener('load', e => {
  moveToLinkPosition(home.btnEl, home.sectionEl)
  moveToLinkPosition(skill.btnEl, skill.sectionEl)
  moveToLinkPosition(portfolio.btnEl, portfolio.sectionEl)
})

window.addEventListener('scroll', () => {
  // console.log(document.documentElement.scrollTop)
})
