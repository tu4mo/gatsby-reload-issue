const fs = require("fs")

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function createComponent(i) {
  console.log("creating component…")
  fs.writeFileSync(
    "./fakelib/Component.js",
    `function Component() {
      return "${i} ${Date.now()}"
    }
    
    export { Component }
  `,
    "utf8"
  )
}

let i = 1

const start = async () => {
  for (i = 1; i <= 10; i++) {
    createComponent(i)
    await sleep(500)
  }
}

start()
