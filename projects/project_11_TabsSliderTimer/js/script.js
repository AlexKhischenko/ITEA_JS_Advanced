window.addEventListener('DOMContentLoaded', function() {
	
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
	var deadLine = '2021-02-28';

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

	/* Close modal by click outside or close button */
	modal.addEventListener('click', function(event) {
		if(event.target === modal || event.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	/* Set interval to open modal in 5 seconds */
	var modalTimerId = setInterval(openModal, 50000);

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
		}

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
		}
	}

	const getResourse = async (url) => {
		const result = await fetch(url);
		if (!result.ok) {
			throw new Error(`Could not fetch ${url}, status: ${result.status}`);
		}
		return await result.json();
	};

	getResourse('http://localhost:3000/menu')
	.then(data => {
		data.forEach(({img, altimg, title, descr, price}) => {
			new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
		});
	});

	// getResource('http://localhost:3000/menu')
	//     .then(data => createCard(data));

	// function createCard(data) {
	//     data.forEach(({img, altimg, title, descr, price}) => {
	//         const element = document.createElement('div');

	//         element.classList.add("menu__item");

	//         element.innerHTML = `
	//             <img src=${img} alt=${altimg}>
	//             <h3 class="menu__item-subtitle">${title}</h3>
	//             <div class="menu__item-descr">${descr}</div>
	//             <div class="menu__item-divider"></div>
	//             <div class="menu__item-price">
	//                 <div class="menu__item-cost">Цена:</div>
	//                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
	//             </div>
	//         `;
	//         document.querySelector(".menu .container").append(element);
	//     });
	// }


	/* ********** Forms ********** */

	const forms = document.querySelectorAll('form'); /* Получаем все формы со страницы */
	const message = { /* Объект, содержащий варианты ответов в зависимости от ответа сервера */
		loading: './img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	const postData = async (url, data) => {
		const result = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: data
		});

		return await result.json();
	};

	function bindPostData(form) { /* Функция будет отвечать за отправку данных. Передаем в нее все формы со страницы */
    	form.addEventListener('submit', (e) => {
      		e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
      		// form.appendChild(statusMessage);
      		form.insertAdjacentElement('afterend', statusMessage); /* Размещаем спиннер после текста модалки */

			/* Блок кода на основе fetch с отправкой JSON */
			const formData = new FormData(form); /* Собирает все данные формы и формирует FormData (Особенный формат) */
			const json = JSON.stringify(Object.fromEntries(formData.entries())); /* Трансформация formData в объект */
			
			// const object = {}; /* Создаем объект, чтобы заполнить его данными FormData для дальнейшей конфертации в JSON формат */
			// formData.forEach(function(value, key){
			//   object[key] = value;
			// });
  
			postData('http://localhost:3000/requests', json)
			.then(function(data) {
				console.log(data);
				showThanksModal(message.success); /* Вызываем функцию для показа сообщения благодарности */
				statusMessage.remove();
			})
			.catch(function() {
				showThanksModal(message.failure); /* Вызываем функцию для показа сообщения провала */
			})
			.finally(function() {
				form.reset(); /* Сброс данных формы */
			});


			/* Блок кода на основе fetch с отправкой formData */
			// const formData = new FormData(form); /* Собирает все данные формы и формирует FormData (Особенный формат) */
			// fetch('server.php', {
			//   method: "POST",
			//   body: formData
			// }).then(data => data.text())
			// .then(function(data) {
			//   console.log(data);
			//   showThanksModal(message.success); /* Вызываем функцию для показа сообщения благодарности */
			//   statusMessage.remove();
			// }).catch(function() {
			//   showThanksModal(message.failure); /* Вызываем функцию для показа сообщения провала */
			// }).finally(function() {
			//   form.reset(); /* Сброс данных формы */
			// });


			/* Блок кода на основе XMLHttpRequest */
			// const request = new XMLHttpRequest(); /* Создание нового XMLHttpRequest запроса */
			// request.open('POST', 'server.php'); /* Настройка запроса */
			// // request.setRequestHeader('Content-type', 'multypart/form-data'); /* Заголовок для FormData формата */
			// request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); /* Заголовок для JSON формата */

			// request.send(json); /* Отправка запроса в JSON формате */

			// request.addEventListener('load', () => { /* Обрабочки события ответа сервера */
			//   if (request.status === 200) {
			//     showThanksModal(message.success); /* Вызываем функцию для показа сообщения благодарности */
			//     form.reset(); /* Сброс данных формы */
			//     statusMessage.remove();
			//   } else {
			//     showThanksModal(message.failure); /* Вызываем функцию для показа сообщения провала */
			//   }
			// });
		});
  	}

	/* Запуск функции обработки всех форм */
	forms.forEach(item => {
		bindPostData(item);
	});

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog'); /* Получаем контент текущего модального окна */

		prevModalDialog.classList.add('hide'); /* Скрываем контент текущего модального окна */
		openModal();

		const thanksModal = document.createElement('div'); /* Создаем div, в который будем помещать новый контент модального окна */
		thanksModal.classList.add('modal__dialog'); /* Присваиваем тот же класс, чтобы не писать новый код в стилях и формируем верстку ниже */
		thanksModal.innerHTML = `
			<div class="modal__content">
			<div class="modal__close" data-close>×</div>
			<div class="modal__title">${message}</div>
			</div>
		`;
		document.querySelector('.modal').append(thanksModal); /* Получаем модальное окно и помещаем в него динамически сформированную верстку ниже */
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}

	/* ********** Simple slider ********** */

    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });
});