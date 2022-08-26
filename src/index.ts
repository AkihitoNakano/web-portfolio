import './ts/importImages.ts'

// カテゴリのページへスライドする
// buttonとelementのセットオブジェクトを作り出す
class SetSectionPos {
  constructor(readonly btnEl: HTMLElement, readonly sectionEl: HTMLDivElement | 0) {}
}

// スライドアニメーションを実行する
function moveToLinkPosition(btnEl: HTMLElement, sectionEl: HTMLDivElement | 0) {
  btnEl.addEventListener('click', () => {
    if (sectionEl === 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    } else {
      const position = sectionEl.getBoundingClientRect()
      window.scrollTo({ top: position.top + window.pageYOffset, left: 0, behavior: 'smooth' })
    }
  })
}

const home = new SetSectionPos(document.getElementById('homeBtn')! as HTMLElement, 0)
const skill = new SetSectionPos(
  document.getElementById('skillBtn')! as HTMLElement,
  document.querySelector('.skill')! as HTMLDivElement
)
const portfolio = new SetSectionPos(
  document.getElementById('portfolioBtn')! as HTMLElement,
  document.querySelector('.portfolio')! as HTMLDivElement
)

window.addEventListener('load', e => {
  moveToLinkPosition(home.btnEl, home.sectionEl)
  moveToLinkPosition(skill.btnEl, skill.sectionEl)
  moveToLinkPosition(portfolio.btnEl, portfolio.sectionEl)
})

// ページを開いたときのフェードアニメーション
const homeEl = document.querySelector('.home')! as HTMLDivElement
const skillEl = document.querySelector('.skill')! as HTMLDivElement

setTimeout(() => showBlockElement(homeEl), 1000)
setTimeout(() => showBlockElement(skillEl), 1500)

function showBlockElement(element: HTMLDivElement) {
  element.style.visibility = 'visible'
  element.style.opacity = '1'
}
