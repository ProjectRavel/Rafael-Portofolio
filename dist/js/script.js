// Hamburger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#navmenu')


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navmenu.classList.toggle('hidden')
})

// Hamburger Click
window.addEventListener('click', function(i){
    if(i.target != navmenu && i.target != hamburger){
        hamburger.classList.remove('hamburger-active')
        navmenu.classList.add('hidden')
    }
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


    function darkfunction(){
        const darktoggle = document.querySelector('#dark-toggle')
        const toggledark = document.querySelector('#togglebutton')
        const html = document.querySelector('html')

        

        if(darktoggle.checked == true){
            toggledark.classList.add('toggle-circle')
            html.classList.add('dark')
            localStorage.theme = 'dark'
        }else{
            toggledark.classList.remove('toggle-circle')
            html.classList.remove('dark')
            localStorage.theme = 'light '
        }

        
    }

    const darktoggle = document.querySelector('#dark-toggle')
    const toggledark = document.querySelector('#togglebutton')

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darktoggle.checked = true
        toggledark.classList.add('toggle-circle')
    } else {
        toggledark.classList.remove('toggle-circle')
        darktoggle.checked = false
    }