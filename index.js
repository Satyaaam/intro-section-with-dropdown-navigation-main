const menu_image = document.querySelector('.menu_image');
const slider = document.querySelector('.slide');
const cross = document.querySelector('.cross');
const c = document.querySelector('.c');
const company_li = document.querySelector('.company_li');
const f = document.querySelector('.f');
const features_li = document.querySelector('.features_li');
const features_image = document.querySelector('.features_image');
const company_image = document.querySelector('.company_image');


const feature_span = document.querySelector('.feature_span');
const feature_tooltip = documentquerySelector('.feature_tooltip');


const company_span = document.querySelector('.company_span');
const tooltip = document.querySelector('.tooltip2');

// menu_image.addEventListener('click',()=>{
//     slider.style.display = 'block';
// })

menu_image.addEventListener('click',()=>{
    slider.style.display = 'block';
})
cross.addEventListener('click',()=>{
    slider.style.display = 'none';
})
c.addEventListener('click',()=>{
    company_li.classList.toggle('active');
    company_image.classList.toggle('active');
})
f.addEventListener('click',()=>{
    features_li.classList.toggle('active');
    features_image.classList.toggle('active');
})

feature_span.addEventListener('click',()=>{
    feature_tooltip.classList.toggle('active');
})

company_span.addEventListener('click',()=>{
    tooltip.classList.toggle('active');
})