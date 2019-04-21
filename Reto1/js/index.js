const info = fetch("https://rickandmortyapi.com/api/character");

const dataCharacters = info
.then((val) => {
    return val.json();
})
.catch(err => {
    console.log('Error', err);
})

dataCharacters.then(data => {
    const characters = data.results;
    const homeProfile = document.getElementById('homeProfile');

        for( let i = 0; i < 3; i++) {
            let a= Math.random();
            console.log(a);
            const image = characters[parseInt(Math.random()*20)].image;
            const contImages = createHome(image);
            homeProfile.append(contImages);
        }
});

function createHome(image) {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('img-responsive', 'images');

    return img;
}
