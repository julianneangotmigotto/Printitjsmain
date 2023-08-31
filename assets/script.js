const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let indexSlide = 0

const arrowLeft = document.getElementById('arrow_left')
const arrowRight = document.getElementById('arrow_right')
const dots = document.querySelector('.dots')
const imgBanner = document.querySelector('.banner-img')
const tagLine = document.getElementById('tag-line')

arrowLeft.addEventListener('click', () => {
	if (indexSlide === 0) {
		indexSlide = slides.length - 1
	} else {
		indexSlide = indexSlide - 1
	}

	console.log("click sur fleche gauche - indexSlide:", indexSlide)
	updateDots()
})

arrowRight.addEventListener('click', () => {
	if (indexSlide === slides.length - 1) {
		indexSlide = 0
	} else {
		indexSlide = indexSlide + 1
	}

	console.log("click sur fleche droite - indexSlide:", indexSlide)
	updateDots()
})

const updateImageAndTagLine = () => {
	imgBanner.src = `./assets/images/slideshow/${slides[indexSlide].image}`
	tagLine.innerHTML = slides[indexSlide].tagLine
}

const updateDots = () => {
	// Clean dots container (ça supprimme tous les éléments enfants du container dots)
	while (dots.firstChild) {
		dots.removeChild(dots.firstChild)
	}

	slides.forEach((item, index) => {
		const dot = document.createElement('span')

		if (index === indexSlide) {
			dot.setAttribute('class', 'dot dot_selected')
		} else {
			dot.setAttribute('class', 'dot')
		}
		dots.appendChild(dot)
	})

	updateImageAndTagLine()
}

updateDots()