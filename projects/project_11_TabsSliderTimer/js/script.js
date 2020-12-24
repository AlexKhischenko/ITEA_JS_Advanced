/* ********** Tabs ********** */

var tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabHeaderItem = document.querySelectorAll('.tabheader__item');

function hideTabContent() {
  tabsContent.forEach(function(item) {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });
  tabHeaderItem.forEach(function(item) {
    item.classList.remove('tabheader__item_active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.remove('hide');
  tabsContent[i].classList.add('show', 'fade');
  tabHeaderItem[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function(event) {
  const target = event.target;
  if (target && target.classList.contains('tabheader__item')) {
    tabHeaderItem.forEach(function(item, i) {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});



/* ********** Timer ********** */

/* Timer navigation */
var deadLine = '2020-12-31';

/* Count remaining time and return an object with this data */
function getRemainingTime(finalTime) {
  var t = Date.parse(finalTime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor(t / (1000 * 60 * 60) % 24),
      minutes = Math.floor(t / (1000 * 60) % 60),
      seconds = Math.floor(t / 1000 % 60);

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

/* Add zero */
function getZero(num) {
  if (num >=0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

/* Set clock */
function setClock(selector, finalTime) {
  var timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    /* Update clock */
    function updateClock() {
      var dataTime = getRemainingTime(deadLine);

      days.innerHTML = getZero(dataTime.days);
      hours.innerHTML = getZero(dataTime.hours);
      minutes.innerHTML = getZero(dataTime.minutes);
      seconds.innerHTML = getZero(dataTime.seconds);

      if (dataTime.total <= 0) {
        clearInterval(timeInterval);
      }
    }
}

setClock('.timer', deadLine);



/* ********** Modal ********** */

var modalOpenBtn = document.querySelectorAll('[data-modal]'),
    modalCloseBtn = document.querySelector('[data-close]'),
    modal = document.querySelector('.modal');

/* Function - Open modal */
function openModal() {
  modal.classList.remove('hide');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimerId);
}

/* Function - Close modal */
function closeModal() {
  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
}

/* Open modal */
modalOpenBtn.forEach(function(btn) {
  btn.addEventListener('click', openModal);
});

/* Close modal by "Escape" key */
document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

/* Close modal by click outside */
document.addEventListener('click', function(event) {
  if(event.target === modal) {
    closeModal();
  }
});

/* Close modal */
modalCloseBtn.addEventListener('click', closeModal);

/* Set interval to open modal in 5 seconds */
var modalTimerId = setInterval(openModal, 5000);

/* Show modal by scroll till the end */
function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    document.removeEventListener('scroll', showModalByScroll);
  }
}

document.addEventListener('scroll', showModalByScroll);


/* ********** Constructor ********** */

class MenuCard {
  constructor(src, alt, title, descr, price, parentElement) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.transfer = 28;
    this.parent = document.querySelector(parentElement);
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = this.price * this.transfer;
  };

  render() {
    var element = document.createElement('div');

    element.innerHTML = 
    `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      </div>
    `;
    this.parent.append(element);
  };
}

new MenuCard(
  "img/tabs/vegy.jpg",
  "vegy",
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  9,
  '.menu .container'
).render();

new MenuCard(
  "img/tabs/elite.jpg",
  "elite",
  'Меню “Премиум”',
  'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  14,
  '.menu .container'
).render();

new MenuCard(
  "img/tabs/post.jpg",
  "post",
  'Меню "Постное"',
  'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
  21,
  '.menu .container'
).render();