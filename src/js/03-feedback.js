import throttle from 'lodash.throttle';

const FORMINPUT_KEY = "feedback-form-state";
const parseJson = JSON.parse(localStorage.getItem(FORMINPUT_KEY));

let formData = {...parseJson};
const form = document.querySelector(".feedback-form");
populateTexttareaInput();

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onForm, 500));

function onFormSubmit(e) {
    e.preventDefault();
const formDataForBackend = new FormData(e.currentTarget)
formDataForBackend.forEach((name, value) => {
    console.log(value, name);
})
    localStorage.removeItem(FORMINPUT_KEY);
    e.currentTarget.reset();
}

function onForm(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FORMINPUT_KEY, JSON.stringify(formData));
    }

function populateTexttareaInput() {
    const savedForm = parseJson;
    if (savedForm) {
    Object.entries(savedForm).forEach(([name, value]) => {
    form.elements[name].value = value
    })
    }
}