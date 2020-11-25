const fs = require("fs")

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function createComponent(i, timestamp) {
  console.log("creating component…")
  fs.writeFileSync(
    `./fakelib/Component${i}.js`,
    `function Component${i}() {
  return "${i} ${timestamp}"
}
    
export { Component${i} }
  `,
    "utf8"
  )
}

const start = async () => {
  const timestamp = Date.now()
  for (let i = 1; i <= 10; i++) {
    createComponent(i, timestamp)
    await sleep(200)
  }
}

start()
