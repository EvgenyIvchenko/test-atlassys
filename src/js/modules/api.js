export const sendData = (path, body, onSuccess, onFail) => {
	fetch(path, {
		method: 'POST',
		body: body,
	})
		.then((response) => {
			if (response.ok) {
				onSuccess();
			}
		})
		.catch((err) => {
			onFail(err);
		});
};
