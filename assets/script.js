const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.getElementById('arrow_left')
const arrowRight = document.getElementById('arrow_right')
const dots = document.querySelector('.dots')

arrowLeft.addEventListener('click', () => {
console.log("click sur fleche gauche")
})

arrowRight.addEventListener('click', () => {
console.log("click sur fleche droite")
})

slides.forEach(item => {
	const dot = document.createElement('span')

if (index ---0) {
	dot.setAttribute('class','dot dot_selected')
} else {
dot.setAttribute('class','dot')
}
	dots.appendChild(dot)
})