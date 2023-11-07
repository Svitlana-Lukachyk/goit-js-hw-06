const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    };

    let usersData = {};

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        usersData[name] = value;
    });

    console.log(usersData);

    form.reset();
};
