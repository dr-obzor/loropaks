window.addEventListener('DOMContentLoaded', function () {
	var countryCodes = {
		RU: {
			userImg: ['img/reviews1.png', 'img/reviews2.png', 'img/reviews3.png'],
			userNames: ['Алла', 'Виктория', 'Нина'],
			cities: ['Калининград', 'Москва', 'Тверь'],
		},
		KZ: {
			userImg: ['img/reviews1.png', 'img/reviews2.png', 'img/reviews3.png'],
			userNames: ['Алла', 'Виктория', 'Нина'],
			cities: ['Калининград', 'Москва', 'Тверь'],
		},
		BY: {
			userImg: ['img/reviews1.png', 'img/reviews2.png', 'img/reviews3.png'],
			userNames: ['Алла', 'Виктория', 'Нина'],
			cities: ['Калининград', 'Москва', 'Тверь'],
		},
		UZ: {
			userImg: ['img/uz/reviews1.jpg', 'img/uz/reviews2.jpg', 'img/uz/reviews3.jpg'],
			userNames: ['Лора', 'Нафиса', 'Гульчехра'],
			cities: ['Самарканд', 'Ташкент', 'Наманган'],
		},
	};


	var change = function change(e) {
		var userImg = document.querySelectorAll('.user-img'),
				userNames = document.querySelectorAll('.user-name');

		// img
		function changeImgCollection(collection, prop) {
			collection.forEach((img, i) => {
				if (img) {
					img.src = prop[i];
				}
			});
		}

		changeImgCollection(userImg, countryCodes[e].userImg);

		// текст
		function changeTextCollection(collection, prop) {
			collection.forEach((text, i) => {
				if (text) {
					text.innerHTML = prop[i];
				}
			});
		}

		changeTextCollection(userNames, countryCodes[e].userNames);
	}

	selectors.forEach(function (elem) {
		elem.addEventListener('change', function (e) {
			if(Object.keys(countryCodes).includes(e.target.value)) {
				change(e.target.value);
			}
		});
	});

	if(Object.keys(countryCodes).includes(selectors[0].value)) {
			change(selectors[0].value);
	}
})
