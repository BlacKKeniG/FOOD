export default function cards() {
    //use class for card

    class MenuCard {
        constructor(imgSrc, alt, titel, descr, prise) {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.titel = titel;
            this.descr = descr;
            this.prise = prise;
        }
        
        create(parent, ...classes) {
            this.parent = document.querySelector(parent);
            this.classes = classes; 

            const element = document.createElement('div');
            element.classList.add('menu__item');
            if(this.classes.length !== 0){
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.imgSrc} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.titel}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.prise}</span> руб./день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const getMenuData = async (url) => {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        return await response.json();
    };

    getMenuData('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price)
                .create('.menu .container');
            });
        });

}


 /* new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        "Меню \"Фитнес\"",
        "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        229,
        '.menu .container',
        "big"
    ).create();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        "Меню \"Премиум\"",
        "В меню \"Премиум\" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
        550,
        '.menu .container',
    ).create();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        "Меню \"Постное\"",
        "Меню \"Постное\" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
        430,
        '.menu .container',
    ).create(); */

