// // // const init = () => {
// // //     let name = "name";
// // //     const displayName = () =>{
// // //         console.log(name)
// // //     }
// // //     displayName()
// // // }
// // //
// //
// //
// //
// const hi = () => {
//     console.log("hi");
// };
// // setTimeout(hi, 2000)
// //
// // console.log("ok")
//
// // setInterval(() => {
// //     console.log("hi")
// // }, 1000)
//
// const box = document.querySelector(".box")
//
// const block = document.querySelector(".block")
//
// let position = 0;
// let topPosition = 0;
//
// const move = () => {
//     if (position < 300) {
//         position += 16
//         block.style.left = `${position}px`
//         setTimeout(()=>{
//             move()
//         }, 200)
//     }else if (position >= 350) {
//         topPosition += 16;
//       // block.style.top = `${topPosition}px`
//         setTimeout(()=>{
//             move()
//         }, 200)
//     }
// }
//
// move()

// const interval = setInterval(hi, 2000)
//
// setTimeout(()=>{
//     clearInterval(interval)
// }, 6000)