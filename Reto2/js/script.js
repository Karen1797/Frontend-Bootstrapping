
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
    const containerProfile = document.getElementById('userProfile');
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
            containerProfile.append(profile);
                
        });
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
    img.classList.add( 'imgUsers');
    nameSpan.classList.add( 'nameUsers');

    return link;
}

function createProfile(user) {
    const { name, lastName, image, email, nationality } = user;
    let imgProfile = document.createElement('img');
    let descriptionProfile = document.createElement('p');
    let article = document.createElement('article');
    //console.log(event);
    //event.target.style.visibility = 'hidden';
    //let link = document.getElementById(email)
    console.log(email);
    usersContainer.remove();

    imgProfile.src = image;
    descriptionProfile.innerHTML = name;
    article.append(imgProfile);
    article.append(descriptionProfile);

    article.classList.add('userProfile');
    
    return article;

}



  
  // Incluir el 'listener' a la lista
  // Se ejecutará cuando se haga click en cada <li>
  
 


/*
linkBlog.addEventListener('click', function() {
    eliminar();
    blog.classList.add('mostrarCaja')
})
    
    
    //console.log(JSON.stringify(val));

    function crearUsuarios(value) {
       // let valUser = value.event.taget
        console.log(value)
    }
    for(i=0;i<22;i++){
    let value = document.getElementById('user'+i);
    crearUsuarios(value);
    }
*/


   
