const enableButton = () => {
    let textarea = document.querySelector('#postTextarea')
    let submitButton = document.querySelector('#submitPostButton')
    submitButton.disabled = textarea.value.trim() === "";
}