const info = fetch('https://randomuser.me/api/?results=147');

const dataUsers = info
.then((val) => {
    return val.json();
})
.catch(err => {
    console.log('Error', err);
})

dataUsers.then(data => {
    const users = data.results;
    const usersContainer = document.getElementById('usersContainer');
    const profileContainer = document.getElementById('userProfile');
    
    users.forEach((user) => {
        const name = `${user.name.first}`;
        const lastName = `${user.name.last}`;
        const image = user.picture.large;
        const email = user.email;
        const nationality = `${user.location.city}, ${user.location.state}`;
        const userData = { name, lastName, image, email, nationality };

        const linkUsuarios = create(userData);
        usersContainer.append(linkUsuarios);
        
        linkUsuarios.addEventListener('click', () => {
            const profile = createProfile(userData);
            profileContainer.append(profile);
        });
    });
});

function create(user) {
    const { name, lastName, image, email, nationality} = user;
    const img = document.createElement('img');
    const nameSpan = document.createElement('span');
    const link = document.createElement('a');
    const contLink = document.createElement('article');
     
    nameSpan.innerHTML = name;
    img.src = image;

    link.setAttribute('id',user.email);
    
    contLink.append(link);
    link.append(img);
    link.append(nameSpan);
    
    contLink.classList.add('linkContainer');
    link.classList.add('usersFirst', 'col-xs-2');
    img.classList.add( 'images','img-responsive');
    nameSpan.classList.add( 'nameUsers');

    return contLink;
}

function createProfile(user) {
    const { name, lastName, image, email, nationality } = user;
    const imgProfile = document.createElement('img');
    const titleProfile = document.createElement('h3');
    const descriptionProfile = document.createElement('p');
    const article = document.createElement('article');
    const contTextProfile = document.createElement('div');
    const newLine = document.createElement('br');

    usersContainer.remove();

    imgProfile.src = image;
    titleProfile.innerHTML = `Nombre: ${name} ${lastName} - Ciudad, estado: ${nationality} - Correo: ${email} `;
    descriptionProfile.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    
    contTextProfile.append(titleProfile);
    article.append(imgProfile);
    contTextProfile.append(descriptionProfile);
    article.append(contTextProfile);

    article.classList.add('profile', 'row');
    contTextProfile.classList.add('contText', 'col-12', 'col-sm-7');
    imgProfile.classList.add('imgProfile', 'img-responsive', 'images', 'col-12', 'col-sm-4');
    titleProfile.classList.add('titleProfile');
    descriptionProfile.classList.add('descrProfile');

    return article;

}

