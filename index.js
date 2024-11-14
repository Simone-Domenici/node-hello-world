const parameter = process.argv[2]

if (parameter === undefined) {
    console.log('Hello Boolean')   
} else {
    console.log(`Hello ${parameter}`)
}
