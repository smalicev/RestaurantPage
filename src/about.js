

const about = function showAbout(){
    const mainspace = document.querySelector('.mainCard');

    const aboutcard = document.createElement('div');

    aboutcard.classList.add('mainCard2');
    aboutcard.setAttribute('id','about');
    aboutcard.innerHTML = '<h1>  About Us</h1>';

    mainspace.appendChild(aboutcard);
}

export { about };