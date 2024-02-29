const nav = document.querySelector('.navbar');
const header = document.querySelector('header');

const navObserver = new IntersectionObserver((e)=>{
    e.forEach(en=>{
        if (en.isIntersecting) {
            nav.classList.remove('bg-light');
        }else{
            nav.classList.add('bg-light');
        }
    })
},{root:null,threshold:0.75})
navObserver.observe(header)