import {default as users} from './users.js';

const table = document.querySelector('.users-info-table');
const markup = createTableRows(users);

table.insertAdjacentHTML('beforeend', markup);

const userStatus = document.querySelectorAll('.status');

showUserStatus(userStatus);

function showUserStatus(users) {
    userStatus.forEach(element => {
        if (element.innerText === 'Online') {
            element.classList.add('on');
        }
    });
}

function createTableRows(users) {
    return users
    .map(user => createTableRowMakrup(user))
    .join('');
}

function createTableRowMakrup({name, email, balance, isActive}) {

    if (isActive) {
        isActive = 'Online';

    } else {
        isActive = 'Offline';
    }

    const row = `
    <tr>
    <td>${name}</td>
    <td>${balance}</td>
    <td>${email}</td>
    <td class="status">${isActive}</td>
    </tr>`;

    return row;        
}



