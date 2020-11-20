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

const start = async () => {
  for (let i = 1; i <= 30; i++) {
    createComponent(i)
    await sleep(200)
  }
}

start()
