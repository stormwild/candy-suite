// src/content.ts
console.log('Content script loaded')

const title = document.title
const url = location.href

console.log('Title:', title)
console.log('URL:', url)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log({ request, sender, sendResponse })
  sendResponse({ title, url })
})
