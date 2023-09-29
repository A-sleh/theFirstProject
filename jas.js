
let btn = document.getElementById('btn') ,
    img = document.querySelector('.services .services-content .imge img') ,
    imgContainer = document.querySelector('.services ') ,
    portfolioContent = document.querySelector('.portfolio') ,
    allCard= document.querySelectorAll('.portfolio-content .card') ,
    titleText = document.querySelector('.landing .intro-text p span') ,
    aboutSection = document.querySelector('.about') ,
    imgesActive = document.querySelector('.about .imges') ,
    imgContentAbout = document.querySelector('.about-content .imges img'),
    allLinks = document.querySelectorAll('#nav li a') ;
    
window.onscroll = () => {
    if ( window.scrollY >= btn.offsetTop ) {
        btn.style.opacity = '1' ;
    } else {
        btn.style.opacity = '0' ;
    }
    if ( window.scrollY >= imgContainer.offsetTop - 200) {
        img.style.transform = 'translateX(0)' ;
    }else {
        img.style.transform = 'translateX(120%)' ;
    }
    if( window.scrollY >= portfolioContent.offsetTop - 300 ) {
        allCard[0].style.transform = 'translateX(0)' ;
        allCard[2].style.transform = 'translateX(0)' ;
    } else {
        allCard[0].style.transform = 'translateX(400px)' ;
        allCard[2].style.transform = 'translateX(-385px)' ;
    }
    if( window.scrollY >= aboutSection.offsetTop - 300 ) {
        imgesActive.classList.add('active');
        imgContentAbout.style.opacity = '1';
    }else {
        imgesActive.classList.remove('active');
        imgContentAbout.style.opacity = '0';
    }
}
btn.onclick = () => {
    window.scrollTo({
        top : 0 , 
        behavior : 'smooth' ,
    })
}

let links = document.querySelector('.links') ,
    nav = document.querySelector('#nav') ,
    open = false ;
links.onclick = () => {
    console.log('here in the main')
    if( !open ) {
        console.log('here1')
        nav.style.display = 'block' ;
        open = true ;
    }else {
        nav.style.display = 'none' ;
        open = false ;
    }
}

writerWorld(titleText,200);

// funtion use to rewrite The Words
function writerWorld(srcCode,speed) {

    let innerName = srcCode.textContent ;
    let index = 0 , test = true;
    srcCode.innerHTML = innerName[index++] ;

    let write = setInterval(()=>{
        if( index < innerName.length && test ) {
            srcCode.innerHTML += innerName[index++] ;
        }else {
            let index_2 = 0 ;
            srcCode.innerHTML = innerName[index_2++];
            for( ; index_2 < index ; index_2 ++ ) {
                srcCode.innerHTML += innerName[index_2];
            }
            index--; test = false ;
            if(index == -1 ) {
                test = true ;
                index = 1 ;
            }
        }
    },speed)
}

// Scrolle To Selected Section 
allLinks.forEach((el) => {
    el.onclick  = () => {
        window.scrollTo({
            top : document.querySelector(`.${el.dataset.link}`).offsetTop,
            behavior : 'smooth'
        })
    }
})
