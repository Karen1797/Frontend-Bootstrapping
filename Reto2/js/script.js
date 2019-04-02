
let info = fetch('https://randomuser.me/api/')

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

    users.forEach((user) => {
        const img = document.createElement('img');
        const link = document.createElement('a');
        const image = img.src = user.picture.large;

        link.append(img);
        containerImages.append(link);

        
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


   
