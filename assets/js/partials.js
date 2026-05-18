console.log(`loading partial js ....`);
const formContact = document.querySelector('#formAction');

export function insertFormContact() {

    const fields = [
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text'
        },
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'text'
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email'
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password'
        }
    ];

    fields.forEach(field => {

        const createDiv = document.createElement('div');
        createDiv.classList.add("mb-3")

        const labelElem = document.createElement('label');
        labelElem.classList.add("form-label");
        labelElem.for = field.name;
        labelElem.textContent = field.label;

        const inputElem = document.createElement('input');

        inputElem.id = field.name
        inputElem.type = field.type;
        inputElem.name = field.name;
        inputElem.placeholder = field.label;
        inputElem.classList.add("form-control")

        createDiv.append(labelElem);
        createDiv.append(inputElem);

        formContact.append(createDiv);
    });

    const btn = document.createElement('button');
    btn.textContent = 'Submit';
    btn.type = 'submit';

    formContact.append(btn);
}