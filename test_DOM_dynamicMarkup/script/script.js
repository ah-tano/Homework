import users from './users.js';

const profileContainer = document.querySelector('.profile-container');

const profiles = createUserProfile(users);

profileContainer.append(profiles);

function createUserProfile(users) {

    const allUsersContainer = document.querySelector('.container-for-all-profiles');
    
    users.forEach(user => { 
    const {name, age, gender, email, skills, avatar} = user;

    const container = document.createElement('div');
    container.classList.add('user-profile');
   
    const image = document.createElement('img');
    image.classList.add('avatar'); 
    image.src = avatar;
    image.alt = 'user avatar';

    const profileInfo = document.createElement('ul');
    profileInfo.classList.add('profile-info');

    const nameField = createProfileFieldText('Name', name);
    const ageField = createProfileFieldText('Age', age);
    const genderField = createProfileFieldText('Gender', gender);
    const emailField = createProfileFieldText('Email', email);
    const skillsField = createProfileFieldText('Skills', skills);

    profileInfo.append(nameField, ageField, genderField, emailField, skillsField)

    function createProfileFieldText(label, text) {
        const field = document.createElement('li');
        const fieldLabel = document.createElement('b');
        fieldLabel.textContent = `${label}: `;
        const fieldText = document.createTextNode(text);

        field.append(fieldLabel, fieldText);

        return field;
    }
    
    container.append(image, profileInfo);

    allUsersContainer.appendChild(container);
    });

    return allUsersContainer;
}

