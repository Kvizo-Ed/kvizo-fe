import '../scss/ErrorMessage.scss';

function ErrorMessage({ message }) {
	console.log("MESSAGE", message)
	let messageText = message.length ? 
		"Hmm, there doesn't seem to be anything here. Try clicking on one of the links above!" : 
		"Oops! Something went wrong. Please check your internet connection and try again."

	return (
		<div className="error-view">
            <h1>{messageText}</h1>
		</div>
	);
}

export default ErrorMessage;