
// let roadLight = function() {
//     Promise.resolve().then(() => {
//         return new Promise((resolve, reject) => {
//             console.log('red 5S')
//             setTimeout(() => {
//                 resolve()
//             }, 5000)
//         })
//     }).then(() => {
//         return new Promise((resolve, reject) => {
//             console.log('yellow 2S')
//             setTimeout(() => {
//                 resolve()
//             }, 2000)
//         })
//     })
//         .then(() => {
//             return new Promise((resolve, reject) => {
//                 console.log('green 5S')
//                 setTimeout(() => {
//                     roadLight()
//                 }, 5000)
//             })
//         })
// }

// roadLight()

let timer = function(fn, time) {
    return new Promise((resolve, reject) => {
        fn()
        setTimeout(() => {
            resolve()
        }, time)
    })
}
let roadLight = async function() {
    await timer(() => {
        console.log('red 5S')
    }, 5000)
    await timer(() => {
        console.log('yellow 2S')
    }, 2000)
    await timer(() => {
        console.log('green 5S')
    }, 5000)
    await roadLight()
}
roadLight()