let currentNum = ['1/4','2/4','3/4','4/4'];
let windowInn = 428;
let currentWidth = windowInn*(85/100);
currentNum.map((elem, index) => {
  index === 0 ? currentWidth = currentWidth*Number(currentNum[index].slice(0, 1)/4) : console.log(elem);
  console.log(currentWidth);
})
// console.log()

// *프로그레스바의 전체 넓이
console.log(428*0.85);  
// *