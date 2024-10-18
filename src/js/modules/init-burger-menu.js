const menuOpenElement = document.querySelector('.header__burger');
const navigation = document.querySelector('.sidebar');

const onMenuOpenClick = (e) => {
	e.preventDefault();

	if (menuOpenElement.getAttribute('aria-expanded') === 'false') {
		menuOpenElement.setAttribute('aria-expanded', 'true');
		navigation.classList.add('sidebar--opened');
	} else {
		menuOpenElement.setAttribute('aria-expanded', 'false');
		navigation.classList.remove('sidebar--opened');
	}
};

export const initMenu = () => {
	menuOpenElement.addEventListener('click', onMenuOpenClick);
};
