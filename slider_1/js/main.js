let point = document.querySelectorAll('.point'); // Вот здесь я сделал массив из тегов по классу. Это магия!
let images_slider = document.querySelectorAll('.images_slider');
let left_btn = document.getElementById('left_btn');
let right_btn = document.getElementById('right_btn');

// Ниже point[0] мы образемся к самому первому элементу. Делаем это спомощью индекса.
point[0].classList.add('active_image');
images_slider[0].classList.add('active_image');

let counter = 0;

// Логика на точни внизу изображений

for(let i = 0; i < point.length; i++) {
    point[i].addEventListener('click', ()=> {
        for(let j = 0; j < images_slider.length; j++) {
            point[j].classList.remove('active_image');
            images_slider[j].classList.remove('active_image');
        };
        counter = i;
        images_slider[counter].classList.add('active_image');
        point[counter].classList.add('active_image');
    });
};

// Логика на левую кнопку

left_btn.addEventListener('click', ()=> {
    for(let j = 0; j < images_slider.length; j++) {
        point[j].classList.remove('active_image');
        images_slider[j].classList.remove('active_image');
    };
    counter--
    if(counter < 0) {
        counter = images_slider.length -1
    };
    images_slider[counter].classList.add('active_image');
    point[counter].classList.add('active_image');
});


// Логика на правую кнопку

right_btn.addEventListener('click', ()=> {
    for(let j = 0; j < images_slider.length; j++) {
        point[j].classList.remove('active_image');
        images_slider[j].classList.remove('active_image');
    };
    counter++
    if(counter >= images_slider.length) {
        counter = 0
    };
    images_slider[counter].classList.add('active_image');
    point[counter].classList.add('active_image');
});

// Делаем интервал 

function slow_slider () {
    for(let j = 0; j < images_slider.length; j++) {
        point[j].classList.remove('active_image');
        images_slider[j].classList.remove('active_image');
    };
    counter++
    if(counter >= images_slider.length) {
        counter = 0
    };
    images_slider[counter].classList.add('active_image');
    point[counter].classList.add('active_image');
};


let second = 1_000 * 3;
let timer_image = setInterval(() =>slow_slider(), second);

// Дальше идёт код: когда наводишь на слайдер автоматическое переключение картинок прекращается, когда убераешь -- оно снова появляется. 

let block_slider = document.getElementById('block_slider');
block_slider.addEventListener('mouseover', ()=> {
    clearInterval(timer_image)
});

block_slider.addEventListener('mouseleave', ()=> {
    timer_image = setInterval(() =>slow_slider(), second);
})