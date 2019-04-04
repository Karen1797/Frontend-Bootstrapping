
let info = fetch('https://randomuser.me/api/?results=100')

let dataUsers = info
.then((val) => {
    return val.json();
})
.catch(err => {
    console.log('Error', err)
})

dataUsers.then(data => {
    console.log(data);
    let users = data.results;
    let usersContainer = document.getElementById('usersContainer');
    let profileContainer = document.getElementById('userProfile');
    console.log('holi' + users.length)
    
    
    users.forEach((user) => {
        const name = `${user.name.first}`
        const lastName = `${user.name.last}`
        const image = user.picture.large
        const email = user.email
        const nationality = `${user.location.city}, ${user.location.state}`
        const userData = { name, lastName, image, email, nationality }

        const linkUsuarios = create(userData);
        usersContainer.append(linkUsuarios);
        
        console.log(linkUsuarios)

        linkUsuarios.addEventListener('click', () => {
            
            const profile = createProfile(userData);
            profileContainer.append(profile);
                
        })
    })
})

function create(user) {
    const { name, lastName, image, email, nationality } = user;
    let img = document.createElement('img');
    let nameSpan = document.createElement('span');
    let link = document.createElement('a');
    let contLink = document.createElement('div');
     
    nameSpan.innerHTML = name;
    img.src = image

    //link.setAttribute('href','./usuarios.html');
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
    let imgProfile = document.createElement('img');
    let titleProfile = document.createElement('h3');
    let descriptionProfile = document.createElement('p');
    let article = document.createElement('article');
    let contTextProfile = document .createElement('div');
    console.log(name);
    //event.target.style.visibility = 'hidden';
    //let link = document.getElementById(email)
    console.log(email);
    usersContainer.remove();

    imgProfile.src = image;
    titleProfile.innerHTML = `Nombre: ${name} ${lastName} \r\nCiudad, estado: ${nationality}`+'\r'+`
     Correo: ${email} `
    descriptionProfile.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    
    contTextProfile.append(titleProfile);
    article.append(imgProfile);
    contTextProfile.append(descriptionProfile);
    article.append(contTextProfile);

    article.classList.add('profile', 'row');
    contTextProfile.classList.add('contText', 'col-12', 'col-sm-7')
    imgProfile.classList.add('imgProfile', 'img-responsive', 'images', 'col-12', 'col-sm-4');
    titleProfile.classList.add('titleProfile')

    return article;

}

