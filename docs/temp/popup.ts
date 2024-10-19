// const target = document.getElementById('title-display')
// const title = document.title

// const getTitleBtn = document.getElementById('get-title-btn')

function displayTitle() {
  console.log('displayTitle')
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //     chrome.tabs.sendMessage(
  //       tabs[0].id,
  //       { action: 'getTitle' },
  //       ({ title, url }) => {
  //         console.log({ title })
  //         let link = document.createElement('a', {
  //           href: url,
  //           textContent: title,
  //         })
  //         target.innerText = `[${title}](${url})`
  //       }
  //     )
  //   })
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  displayTitle()
})

// getTitleBtn?.addEventListener('click', (e) => {
//   e.preventDefault()
//   console.log('clicked')
//   displayTitle()
// })

// target?.addEventListener('click', (e) => {
//   navigator.clipboard.writeText(target.innerText)
// })

// console.log({ title })
