const titleElements = document.querySelectorAll('.tabs__title-item');
const contentElements = document.querySelectorAll('.tabs__content-item');

export const initSettingTabs = () => {
	titleElements.forEach((titleElement) => {
		titleElement.addEventListener('click', () => {
			titleElements.forEach((titleItem) => {
				titleItem.classList.remove('tabs__title-item--current');
			});

			titleElement.classList.add('tabs__title-item--current');

			contentElements.forEach((contentElement) => {
				contentElement.classList.remove('tabs__content-item--visible');
			});

			const elementId = titleElement.getAttribute('data-tab');

			const selectedContent = document.getElementById(elementId);

			selectedContent.classList.add('tabs__content-item--visible');
		});
	});
};
