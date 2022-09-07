

const about = function showAbout(){
    const mainspace = document.querySelector('.mainCard');

    const aboutcard = document.createElement('div');

    aboutcard.classList.add('about');
    aboutcard.innerText = 'About Us';

    mainspace.appendChild(aboutcard);
}

export { about };