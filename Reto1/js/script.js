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
    const charactersContainer = document.getElementById('charactersContainer');
    const profileContainer = document.getElementById('characterProfile');
    
    characters.forEach((character) => {
        const name = `${character.name}`;
        const image = character.image;
        const specie = character.species;
        const nationality = `${character.origin.name}`;
        const characterData = { name, specie, image, nationality };

        const linkUsuarios = create(characterData);
        charactersContainer.append(linkUsuarios);

        linkUsuarios.addEventListener('click', () => {
            const profile = createProfile(characterData);
            profileContainer.append(profile);
        });
    });
});

function create(character) {
    const { name, specie, image, nationality} = character;
    const img = document.createElement('img');
    const nameSpan = document.createElement('span');
    const link = document.createElement('a');
    const contLink = document.createElement('article');
     
    nameSpan.innerHTML = name;
    img.src = image;

    link.setAttribute('id',character.id);
    
    contLink.append(link);
    link.append(img);
    link.append(nameSpan);
    
    contLink.classList.add('linkContainer', 'col-12', 'col-sm-2');
    link.classList.add('charactersFirst');
    img.classList.add( 'images','img-responsive');
    nameSpan.classList.add( 'namecharacters');

    return contLink;
}

function createProfile(character) {
    const { name, specie, image, nationality } = character;
    const imgProfile = document.createElement('img');
    const titleProfile = document.createElement('h3');
    const descriptionProfile = document.createElement('p');
    const article = document.createElement('article');
    const contTextProfile = document.createElement('div');

    const mainTitle = document.getElementById('mainTitle');
    charactersContainer.classList.add('hidecharactersContainer');

    mainTitle.innerHTML = 'DETALLES';
    imgProfile.src = image;
    titleProfile.innerHTML = `Nombre: ${name} - Origen: ${nationality} - Raza: ${specie} `;
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
    imgProfile.classList.add('imgProfile', 'img-responsive', 'col-12', 'col-sm-4');
    titleProfile.classList.add('titleProfile');
    descriptionProfile.classList.add('descrProfile');

    return article;

}