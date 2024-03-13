class Swiper {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.slides = this.container.querySelectorAll('.swiper-slide');
    this.currentIndex = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.touchDistance = 0;
    this.options = {
      loop: options.loop || false,
      autoplay: options.autoplay || false,
      autoplayInterval: options.autoplayInterval || 3000,
      // Altre opzioni possono essere aggiunte qui
    };

    this.init();
  }

  init() {
    this.changeCurrentSlide(this.currentIndex);

    if (this.options.autoplay) {
      this.autoplay();
    }

    // Aggiungi gli event listeners per il tocco
    this.container.addEventListener('touchstart', (event) => this.handleTouchStart(event));
    this.container.addEventListener('touchmove', (event) => this.handleTouchMove(event));
    this.container.addEventListener('touchend', () => this.handleTouchEnd());

    // Aggiungi altri event listeners necessari
  }

  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
    this.touchDistance = 0;
  }

  handleTouchMove(event) {
    this.touchEndX = event.touches[0].clientX;
    this.touchDistance = this.touchEndX - this.touchStartX;
    this.translateSlides(this.touchDistance);
  }

  handleTouchEnd() {
    if (Math.abs(this.touchDistance) > 50) { // Consideriamo un movimento significativo
      if (this.touchDistance > 0) {
        this.changeCurrentSlide(this.currentIndex-1);
      } else {
        this.changeCurrentSlide(this.currentIndex+1);
      }
    } else { // Ripristina la posizione se il movimento non è abbastanza lungo
      this.translateSlides(0);
    }
  }
  
  changeCurrentSlide(newIndex) {
	  if(newIndex < 0)
		  newIndex = this.slides.length-1;
	  else if(newIndex >= this.slides.length)
		  newIndex = 0;
	  this.slides[this.currentIndex].style.display = 'none';
	  this.slides[newIndex].style.display = 'block';
	  this.currentIndex = newIndex;
  }

  translateSlides(distance) {
    this.slides.forEach(slide => {
      slide.style.transform = `translateX(${distance}px)`;
    });
  }
}