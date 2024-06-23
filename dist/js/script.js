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