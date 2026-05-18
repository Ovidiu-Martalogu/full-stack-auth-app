console.log(`loading Contact Form..`);

import { insertFormContact } from "./partials.js";

insertFormContact()

const baseUrl = `http://localhost:3000`;
const registerApiUrl = `${baseUrl}/register`;
const postsApiUrl = `${baseUrl}/posts`;
const usersApiUrl = `${baseUrl}/users`;

document.querySelector('#formAction').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData);

    console.log(dataObj);

    const response = await fetch(usersApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObj)
    });

    const data = await response.json();
    console.log(data.accessToken);
  
});


