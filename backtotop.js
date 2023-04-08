
// button to go to top

let button = document.getElementById('gototop')

window.onscroll = function() {scrollcheck()};

function scrollcheck(){
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 80) {
        button.style.display = "block"
    } else{
        button.style.display = "none"
    }
}

button.addEventListener('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})


//types list display

let type = document.getElementsByClassName('types');
let typelist = document.getElementById('types-list');
let thispage = document.getElementById('this-page');
type[0].addEventListener('mouseenter', function(){
    typelist.style.display = "block";
})
type[0].addEventListener('mouseleave', function(){
    typelist.style.display = "none";
})
typelist.addEventListener('mouseenter', function(){
    typelist.style.display = "block";
    type[0].style.backgroundColor = 'azure';
    type[0].style.color = 'cadetblue';
    tp();
})
typelist.addEventListener('mouseleave', function(){
    typelist.style.display = "none";
    type[0].style.backgroundColor = 'initial';
    type[0].style.color = 'azure';
    tp();
})

type[0].addEventListener('mouseenter', function(){
    type[0].style.backgroundColor = 'azure';
    type[0].style.color = 'cadetblue';
    tp();
})
type[0].addEventListener('mouseleave', function(){
    type[0].style.backgroundColor = 'cadetblue';
    type[0].style.color = 'azure';  
    tp();
})

function tp(){
    thispage.style.backgroundColor = "azure";
    thispage.style.color = "cadetblue";
}