import './ts/importImages.ts'

const popUpTemplateEl = document.getElementById('modal')! as HTMLTemplateElement
const popupImgs = document.querySelectorAll('.popup-img')!

popupImgs.forEach(img => {
  img.addEventListener('click', e => {
    e.preventDefault
    popupImage()
  })
})

function popupImage(): void {}

// class PopupImg {
//   templateElement: HTMLTemplateElement
//   hostElement: HTMLTemplateElement
//   imageElements: HTMLDivElement

//   constructor(templateId: string, hostElementId: string) {
//     this.templateElement = document.getElementById('modal')! as HTMLTemplateElement
//     this.hostElement = document.querySelector('main')! as HTMLTemplateElement
//     this.imageElements = document.querySelectorAll('.popup-img')!

//     this.imageElements.addEventListener('click', () => {
//       console.log('hi')
//     })

//     const importNode = document.importNode(this.templateElement.content, true)
//     this.attachListener()
//   }

//   attachListener() {
//     this.imageElements.addEventListener('click', e => {
//       e.preventDefault
//     })
//   }
// }
