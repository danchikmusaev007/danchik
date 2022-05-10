const Result = document.querySelector(".result");
const Input = document.querySelector(".input");
const Button = document.querySelector(".cry");
const Reg = /^1\d{13}|2\d{13}$/;
Button.addEventListener("click", () => {
	if(Reg.test(Input.value)){
		console.log("hello")
		alert("Hello")
	}else{
		console.log("you_know")
		alert("you_know")
	}
});
const form = document.querySelector(".circle")
let num = 0;
const move = function() {
    num += 20
    form.style.left = `${num}px`;
    if (num < 160) {
        move();
    } else {
        num = 0
    }
}
form.addEventListener("mousedown", move)
