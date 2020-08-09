console.log(document.querySelectorAll('#design path'));
const paths = document.querySelectorAll('#design path')
console.log(paths)
for (let i = 0; i < paths.length; i++) {
    console.log(`Letter ${i} is ${paths[i].getTotalLength()}`)
}