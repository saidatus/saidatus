const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yesbtn");
const Nobtn = document.querySelector(".Nobtn");

yesbtn.addEventListener("click", () =>{
	question.innerHTML = "Aaaaaaaaa, I like you too";
	gif.src="https://raw.t=githubusercontent.com/Dzareldeveloper/img/main/gifyou.webp";
});
 Nobtn.addEventListener("mouseover", () => {
 	const NobtnRect = Nobtn.getBoundingClientRect();
 	const maxX = window.innerWidth - NobtnRect.Width;
 	const maxY = window.innerHeight - NobtnRect.height;

 	const randomX = Math.floor(Math.random() * maxX);
 	const randomY = Math.floor(Math.random ()* maxY);

 	 Nobtn.style.lef = randomX + "px";
 	 Nobtn.style.top = randomY + "px"

 });