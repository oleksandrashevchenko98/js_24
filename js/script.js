let userName = prompt('What is your name?').trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

let lastName = prompt('What is your last name?').trim();
lastName - lastName[0].toUpperCase() + lastName.slice(1).toLowerCase;

`<b> ${userName} ${lastName} </b>`;

let userEmail = prompt('Enter your e-mail').replaceAll().toLowerCase();
userEmail = (!userEmail.includes('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ does not exist)` :
    (userEmail.startsWith('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ found in the first place)` :
        (userEmail.endsWith('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ found in the last place)` :
            `<b> ${userEmail} </b>`;

dateofBirth = +prompt('Enter your year of birth:').replaceAll();
today = new Date();
thisYear = today.getFullYear();
userAge = thisYear - dateofBirth;

document.write(`<ul><li>Full name: ${userName} ${lastName} </li>
    <li>Email: ${userEmail} </li>
    <li>Age:  ${userAge}</li ></ul >`);