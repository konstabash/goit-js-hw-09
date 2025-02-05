
let formData = {
    email: "",
    message: "",
};
const form = document.querySelector("form.feedback-form");
const emailField = form.elements.email;
const messageField = form.elements.message;

if (localStorage.getItem("feedback-form-state") != null) {
    formData = JSON.parse(localStorage.getItem("feedback-form-state"));
    emailField.value = formData.email;
    messageField.value = formData.message;
};

form.addEventListener('input', e => {
    formData.email = emailField.value;
    formData.message = messageField.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener('submit', e => {
    e.preventDefault();
    if (emailField.value === '' || messageField.value === '') {
        alert("Please fill all fields");
        return;
    }
    console.log(formData);
    form.reset();
    localStorage.removeItem("feedback-form-state");
    formData = { email: "", message: "",};
});