const menuOpenElement = document.querySelector('.header__burger');
const sidebarElement = document.querySelector('.sidebar');
const navigationElements = document.querySelectorAll('.navigation__item');

const onBurgerClick = (e) => {
	e.preventDefault();

	if (menuOpenElement.getAttribute('aria-expanded') === 'false') {
		menuOpenElement.setAttribute('aria-expanded', 'true');
		sidebarElement.classList.add('sidebar--opened');
	} else {
		menuOpenElement.setAttribute('aria-expanded', 'false');
		sidebarElement.classList.remove('sidebar--opened');
	}
};

const onPageClick = () => {
	navigationElements.forEach((element) => {
		element.addEventListener('click', () => {
			navigationElements.forEach((item) => {
				item.classList.remove('navigation__item--current');
			});

			element.classList.add('navigation__item--current');
		});
	});
};

export const initMenu = () => {
	menuOpenElement.addEventListener('click', onBurgerClick);
	onPageClick();
};
