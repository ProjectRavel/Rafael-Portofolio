// Hamburger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#navmenu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navmenu.classList.toggle('hidden')
})

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

document.getElementById('see-more').addEventListener('click', function() {
    var moreProjects = document.getElementById('more-projects');
    if (moreProjects.classList.contains('hidden')) {
        moreProjects.classList.remove('hidden');
        moreProjects.classList.add('flex');
        moreProjects.classList.add('flex-wrap')
        this.innerText = 'See Less';
    } else {
        moreProjects.classList.add('hidden');
        moreProjects.classList.remove('flex');
        moreProjects.classList.remove('flex-wrap')
        this.innerText = 'See More';
    }
});


        document.getElementById('see-more').addEventListener('click', function() {
            var moreProjects = document.getElementById('more-projects');
            if (moreProjects.classList.contains('max-h-full')) {
                moreProjects.classList.remove('max-h-full');
                moreProjects.classList.add('max-h-0');
                this.textContent = 'See More';
            } else {
                moreProjects.classList.remove('max-h-0');
                moreProjects.classList.add('max-h-full');
                this.textContent = 'See Less';
            }
        });