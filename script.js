
window.addEventListener('scroll',()=>{
document.querySelector('nav').style.background=
window.scrollY>50?'rgba(5,5,8,.75)':'rgba(0,0,0,.2)';
});
