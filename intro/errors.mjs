import { readFile } from "fs/promises";

process.on('uncaughtException', () => {
    console.log("an error occured") // does not let you continue, its already been thrown!
})

const results = await readFile(new URL('appsd.mjs', import.meta.url), 'utf-8')

console.log("then we continued")
