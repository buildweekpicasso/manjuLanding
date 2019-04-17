window.onload = function() {
    myTeam();
};

function myTeam() {
    var ourTeam = document.querySelector('.aboutheader2');

    ourTeam.addEventListener('click', () => {
        var article = document.querySelector('.articals');
        if (article.style.display === 'none') {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    })
}


