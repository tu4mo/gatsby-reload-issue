const fs = require("fs")

const file = fs.readFileSync("./index.js", "utf-8")

const today = new Date()

fs.writeFileSync(
  "./src/pages/index.js",
  file.replace("#", today.toLocaleTimeString("en-US")),
  "utf-8"
)

console.log(`Updating index.js with ${today.toLocaleTimeString("en-US")}`)
