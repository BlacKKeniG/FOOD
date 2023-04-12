export default function slider() {
    //slider
    //carusel slider
    
    function navCaruselSlider(){
        const slider = document.querySelector('.offer__slider');
        const sliderWrapper = document.querySelector('.offer__slider-wrapper');
        const inerFild = document.querySelector('.offer__slider-iner');
        const navElementPreventSlide = document.querySelector('.offer__slider-prev');
        const navElementNexSlide = document.querySelector('.offer__slider-next');
        const slidesList = document.querySelectorAll('.offer__slide');
        const currentCount = document.querySelector('#current');
        const totalCount = document.querySelector('#total');
        

        const numberOfSlides = slidesList.length;
        const slideWidth = Number(window.getComputedStyle(sliderWrapper).width.replace(/[^0-9]/g, ''));
        const sliderFildWidth = slideWidth * numberOfSlides;
        let offset = 0;
        let currentSlide = 1;
        
        alignWidthSlides(slidesList, slideWidth);
        inerFild.style.width = sliderFildWidth + 'px';
        totalCount.textContent = getZero(numberOfSlides);
        currentCount.textContent = getZero(currentSlide);

        //indecatars
        const indicators = document.createElement('ol');
        indicators.classList.add('carousel-indicators');
        slider.append(indicators);
        const arrDots = [];

        for(let i = 0; i < numberOfSlides; ++i) {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            if(i == 0) {
                dot.style.opacity = '1';
            }
            indicators.append(dot);
            arrDots.push(dot);
        }
        
        //nav
        navElementNexSlide.addEventListener('click', () => {
                
            if(++currentSlide > numberOfSlides){
                currentSlide = 1;
                offset = 0;
            } else {
                offset -= slideWidth;
            }

            console.log(offset);
            inerFild.style.transform = `translateX(${offset}px)`;
            currentCount.textContent = getZero(currentSlide);
            arrDots.forEach(dot => dot.style.opacity = '.5');
            arrDots[currentSlide - 1].style.opacity = '1';
        });
        
        navElementPreventSlide.addEventListener('click', () => {
            if(--currentSlide < 1){
                currentSlide = numberOfSlides;
                offset = -(sliderFildWidth - slideWidth);
            } else {
                offset += slideWidth;
            }
            
            console.log(offset);
            inerFild.style.transform = `translateX(${offset}px)`;
            currentCount.textContent = getZero(currentSlide);
            arrDots.forEach(dot => dot.style.opacity = '.5');
            arrDots[currentSlide - 1].style.opacity = '1';
        });
       
        function alignWidthSlides(slides, width) {
            slides.forEach(
                slide => slide.style.width = width 
            );
        }

        function getZero(num) {
            return  (num < 10) ? `0${num}` : `${num}`;           
        }

        arrDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                offset = -(i * slideWidth);
                inerFild.style.transform = `translateX(${offset}px)`;
                arrDots.forEach(dot => dot.style.opacity = '.5');
                dot.style.opacity = '1';
                currentSlide = i + 1;
                currentCount.textContent = getZero(currentSlide);
            });
        });
    } navCaruselSlider();
}

//change class
   /*  navSlader();
    
    function navSlader(){
        const navElementPreventSlide = document.querySelector('.offer__slider-prev');
        const navElementNexSlide = document.querySelector('.offer__slider-next');
        const slidesList = document.querySelectorAll('.offer__slide');
        const currentCount = document.querySelector();
        let currentSlide = 1;

         document.querySelector('#total').textContent =
            (slidesList.length < 10) ? `0${slidesList.length}` : slidesList.length;
        showSlide(currentSlide);

        navElementPreventSlide.addEventListener('click', () => {
            removeSlide(currentSlide);
            showSlide(--currentSlide);
        });
        
        navElementNexSlide.addEventListener('click', () => {
            removeSlide(currentSlide);
            showSlide(++currentSlide);
        });


        function showSlide(numSlide) {
            if(numSlide > slidesList.length){
                currentSlide = 1;
            }
            if(numSlide < 1){
                currentSlide = slidesList.length;
            }
            slidesList[currentSlide - 1].classList.add('offer__slide_current');
            
            document.querySelector('#current').textContent =
            (currentSlide < 10) ? `0${currentSlide}` : currentSlide;
        
           
        }
        function removeSlide(numSlide) {
            slidesList[currentSlide - 1].classList.remove('offer__slide_current');
        }
    } */