
// element selector


// let a = document.getElementById("mainImg");
// console.dir(a);
// console.dir(document.getElementById("description"));
// console.log(document.getElementsByClassName("oldImg"));
// for(let i =0;i<smallImages.length;i++){
//     console.dir(smallImages[i].scr);
// }

// query selector
// document.querySelector("h1");
// document.querySelector("#description");
// document.querySelector(".oldImg");
// console.dir(document.querySelector("div a"));


// console.dir(document.querySelectorAll("div a"));

// show content in html

let para = document.querySelector("p");
console.dir(para);
console.log(para.innerText)
console.log(para.textContent)
console.log(para.innerHTML)

// console.log(document.querySelector("h1").innerText = 'i am villian');
document.querySelector('h1').textContent = ' manupulation';


// getter or setter attributes
let img = document.querySelector('img');
img.getAttribute('id');
img.setAttribute('id','newid');
img.setAttribute('src','assets/creation_3.jpeg');