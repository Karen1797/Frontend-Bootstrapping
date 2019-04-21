const info = fetch('https://randomuser.me/api/?results=10');
const todo = fetch('https://jsonplaceholder.typicode.com/todos');

const dataUsers = info
.then((val) => {
    return val.json();
})
.catch(err => {
    console.log('Error', err);
})

const tasks = todo
.then((val) => {
    return val.json();
})
.catch((err) => {
    console.log('Error', err);
})

dataUsers.then(data => {
    const users = data.results;
    const usersContainer = document.getElementById('usersContainer');
    const profileContainer = document.getElementById('userProfile');
    var num = 1;

    users.forEach((user) => {
        const name = `${user.name.first}`;
        const lastName = `${user.name.last}`;
        const image = user.picture.large;
        const email = user.email;
        const nationality = `${user.location.city}, ${user.location.state}`;
        const userData = { name, lastName, image };
        
        const linkUsuarios = create(userData, num);
        usersContainer.append(linkUsuarios);
      
        var taskContainer = todoList(num);
        
        num =+ 1;
        linkUsuarios.addEventListener('click', () => {
            const profile = createProfile(userData, taskContainer);
            profileContainer.append(profile);
        });
        
    });
});

function todoList(num) {
    taskCont = [];
    taskContainer = tasks.then(task => {
        for(let i = 0; i < task.length; i++){
            if(num === task[i].userId) {
                taskCont[i] = task[i].title;
            }
        }
        return taskCont;
    });
    return taskContainer;
}

function create(user, num) {
    const { name, lastName, image} = user;
    const img = document.createElement('img');
    const nameSpan = document.createElement('span');
    const link = document.createElement('a');
    const contLink = document.createElement('article');
     
    nameSpan.innerHTML = name;
    img.src = image;

    link.setAttribute('id', num);
    
    contLink.append(link);
    link.append(img);
    link.append(nameSpan);
    
    contLink.classList.add('linkContainer');
    link.classList.add('usersFirst', 'col-xs-2');
    img.classList.add( 'images','img-responsive');
    nameSpan.classList.add( 'nameUsers');
    
    return contLink;
}

function createProfile(user, taskContainer) {
    const { name, lastName, image} = user;
    const imgProfile = document.createElement('img');
    const titleProfile = document.createElement('h3');
    const descriptionProfile = [];
    const article = document.createElement('article');
    const contTextProfile = document.createElement('ul');

    usersContainer.classList.add('hideUsersContainer');

    imgProfile.src = image;
    titleProfile.innerHTML = `Nombre: ${name} ${lastName}`;

    taskContainer.then(task => {
        for(let i = 0; i < task.length; i++){
            descriptionProfile[i] = document.createElement('li');
            descriptionProfile[i].innerHTML = task[i];
            contTextProfile.append(descriptionProfile[i]);
            descriptionProfile[i].classList.add('descrProfile');
        }
    })
    
    contTextProfile.append(titleProfile);
    article.append(imgProfile);
    
    article.append(contTextProfile);

    article.classList.add('profile', 'row');
    contTextProfile.classList.add('contText', 'col-12', 'col-sm-7');
    imgProfile.classList.add('imgProfile', 'img-responsive', 'images', 'col-12', 'col-sm-4');
    titleProfile.classList.add('titleProfile');
    
    return article;
}

