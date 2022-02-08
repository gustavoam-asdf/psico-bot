const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const dfMessenger = $('df-messenger')

console.log(dfMessenger)
console.log({ dfMessenger })

// dfMessenger.addEventListener('df-messenger-loaded', evt => {
//   console.log('Hola')
//   let div
//   const bot = $('df-messenger')
//   div = bot.shadowRoot.querySelector('div')
//   const chat = div.querySelector('df-messenger-chat')
//   div = chat.shadowRoot.querySelector('div')
//   const userInput = div.querySelector('df-messenger-user-input')
//   div = userInput.shadowRoot.querySelector('div')
//   userInput.shadowRoot.querySelector('div').classList.add('valid')
//   const input = div.querySelector('input')
//   console.log(input)
//   input.value = '¡Hola!'
// })
dfMessenger.addEventListener('loaded', evt => {
  dfMessenger.renderCustomText('Custom text')
})
