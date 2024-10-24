const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarFieldElement = document.querySelector('#avatar');
const avatarPreviewElement = document.querySelector('.edit-profile__avatar-preview');
const userAvatarElement = document.querySelector('.header__user-avatar');

export const avatarChoser = () => {
	avatarFieldElement.addEventListener('change', () => {
		const avatarFile = avatarFieldElement.files[0];
		const avatarFileName = avatarFile.name.toLowerCase();

		const avatarMatches = FILE_TYPES.some((it) => avatarFileName.endsWith(it));

		if (avatarMatches) {
			const photoUrl = URL.createObjectURL(avatarFile);
			avatarPreviewElement.style.backgroundImage = `url('${photoUrl}')`;
			userAvatarElement.style.backgroundImage = `url('${photoUrl}')`;
		}
	});

};
