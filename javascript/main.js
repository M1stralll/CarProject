let offset = 0;
const sliderLine = document.querySelector('.PopularBrandCar__Container');

document.querySelector('.Left').addEventListener('click' , () => {
    if( offset == 0 ){
        return 0;
    }else{
    offset += 151.5;
    sliderLine.style.left = offset + 'px';
}
}) ;
document.querySelector('.Right').addEventListener('click' , () => {
    if( offset == -303 ){
        return 0;
    }else{
    offset -= 151.5;
    sliderLine.style.left = offset + 'px';
}
}) ;

function scrollToSection(className) {
    let element = document.querySelector(className);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function copyPhoneNumber() {
    let textarea = document.createElement('textarea');
    textarea.value = "+375 29 547-78-18";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Номер телефона скопирован в буфер обмена: +375 29 547-78-18");
}