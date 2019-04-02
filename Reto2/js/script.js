
fetch('https://randomuser.me/api/').then((val) => {
    return val.json();
}).then((val) => {
    const users = val.results;
    const containerImages = document.getElementById('containerUsers');

    users.forEach((user) => {
        const img = document.createElement('img');
        const link = document.createElement('a')
        const image = img.src = user.picture.large;

        img.append(link);
        link.append(containerImages);
    })
    
    console.log(val)
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
}).catch(err => {
    console.log('ups', err)
  })

   
createUser = (user) =>{
  
    let userImage = document.createElement('img')
}


