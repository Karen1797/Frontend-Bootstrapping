
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
    const users = data.results;
    const containerImages = document.getElementById('containerUsers');
    console.log('holi' + users.length)

    
    users.forEach((user) => {
        const img = document.createElement('img');
        const nameSpan = document.createElement('span');
        const link = document.createElement('a');
        const image = img.src = user.picture.large;
        const contLink = document.createElement('div');
         
        nameSpan.innerHTML = user.name.first
        link.setAttribute('href','./usuarios.html');

        contLink.append(link);
        link.append(img);
        link.append(nameSpan);
        containerImages.append(contLink);

        contLink.classList.add('linkContainer')
        link.classList.add('usersFirst', 'col-xs-2', );
        img.classList.add( 'imgUsers');
        nameSpan.classList.add( 'nameUsers',);

    })
})

    
    
    
    //console.log(JSON.stringify(val));
/*
    function crearUsuarios(value) {
       // let valUser = value.event.taget
        console.log(value)
    }
    for(i=0;i<22;i++){
    let value = document.getElementById('user'+i);
    crearUsuarios(value);
    }
*/


   
