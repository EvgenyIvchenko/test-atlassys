import { sendData } from './api.js';

const path = '#';
const formElement = document.querySelector('.edit-profile');

const onErrorMessage = (err) => console.log(err);
// todo: уточнить поведение при ошибке/успехе

const onSuccessMessage = () => alert('Form submitted successfully');
// todo: уточнить поведение при ошибке/успехе

export const initSettingForm = () => {
	const onFormSubmit = (e) => {
		e.preventDefault();

		sendData(
			path,
			new FormData(formElement),
			() => {
				formElement.reset();
				onSuccessMessage();
			},
			onErrorMessage
		);
	};

	formElement.addEventListener('submit', onFormSubmit);
};
