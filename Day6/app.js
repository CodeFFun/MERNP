
// const showBox = () => {
//     document.querySelector('.notification').style.display = 'block'
// }



// setTimeout(() => {
//     showBox()
// }, 3000)

// const close = () => {
//     document.querySelector('.close').addEventListener('click', () => {
//         document.querySelector('.notification').style.display = 'none'
//     })
// }

// close()

const myCK = () => {
    let dt = new Date()
    let tm = dt.toLocaleTimeString()
    document.querySelector('.result').innerHTML = tm
}

setInterval(myCK, 1000)