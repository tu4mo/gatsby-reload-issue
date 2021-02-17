const fs = require("fs")

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function createComponent(i, timestamp) {
  console.log(`Creating Component${i}…`)
  fs.writeFileSync(
    `./fakelib/Component${i}.js`,
    `export function Component${i}() { return "<Component${i}> - Updated: ${timestamp}" }`,
    "utf8"
  )
}

async function start() {
  const today = new Date()

  for (let i = 1; i <= 10; i++) {
    createComponent(i, today.toLocaleTimeString("en-US"))
    await sleep(10)
  }
}

start()
