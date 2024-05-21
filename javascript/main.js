
// const slider = document.querySelector('#slider');
// const slider_Items = Array.from(slider.children);
// const btnNext = document.querySelector('#btnNext');
// const btnPrev = document.querySelector('#btnPrev');

// slider_Items.forEach(function (slide, index) {

//     /*Скрываю все картинки кроме первой. */
//     if (index !== 0) {
//         slide.classList.add('hidden');
//     }


//     /*Вот этот метод надо запомнить: он даёт индекс любому объекту внутри родителя.*/
//     slide.dataset.index = index;

//     // Добавляем  data  атрибут для первого / автивного слайда. ВАЖНО: пустуя строка, потому что setAttribute требует передачи аргумента.
//     slider_Items[0].setAttribute('data-active', '');

//     /*Обработчик для прокрутки слайдера*/
//     slide.addEventListener('click', function () {

//         slide.classList.add('hidden');
//         slide.removeAttribute('data-active');

//         let next_slider_index;
//         if (index + 1 === slider_Items.length) {
//             next_slider_index = 0;
//         } else {
//             next_slider_index = index + 1;
//         }

//         //Расчитываем индекс следующего слайда
//         //const next_slider_index = +slide.dataset.index + 1;

//         // Находим следующий слайд.
//         const next_slide = slider.querySelector(`[data-index = "${next_slider_index}"]`);
//         // Отображаем следующий слайд.
//         next_slide.classList.remove('hidden');
//         next_slide.setAttribute('data-active', '');
//     });
// });

// btnNext.onclick = function () {

//     // Скрываем текущий слайд
//     const current_slide = slider.querySelector('[data-active]');
//     const current_slide_index = +current_slide.dataset.index;

//     current_slide.classList.add('hidden');
//     current_slide.removeAttribute('data-active');

//     // Показываем следующй слайд.  Тернанрный оператор. Без doka  не разобраться, но попробовал >_<
//     let next_slider_index = current_slide_index + 1 === slider_Items.length ? 0 : current_slide_index + 1;
//     const next_slide = slider.querySelector(`[data-index="${next_slider_index}"]`);
//     next_slide.classList.remove('hidden');
//     next_slide.setAttribute('data-active', '');
// }


// btnPrev.onclick = function () {

//     // Скрываем текущий слайд
//     const current_slide = slider.querySelector('[data-active]');
//     const current_slide_index = +current_slide.dataset.index;

//     current_slide.classList.add('hidden');
//     current_slide.removeAttribute('data-active');

//     // Показываем следующй слайд.  Тернанрный оператор. Без doka  не разобраться, но попробовал >_<

//     let next_slider_index = current_slide_index === 0 ? slider_Items.length -1 : current_slide_index - 1;

//     const next_slide = slider.querySelector(`[data-index="${next_slider_index}"]`);
//     next_slide.classList.remove('hidden');
//     next_slide.setAttribute('data-active', '');
// }*/

// Далее расположен мой код после ревью. Непонятно, но очень интересно.

const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

let currentSlideIndex = 0;

function showSlide(index) {
    sliderItems[currentSlideIndex].classList.add('hidden');
    sliderItems[currentSlideIndex].removeAttribute('data-active');

    sliderItems[index].classList.remove('hidden');
    sliderItems[index].setAttribute('data-active', '');

    currentSlideIndex = index;
}

function showNextSlide() {
    const nextSlideIndex = (currentSlideIndex + 1) % sliderItems.length;
    showSlide(nextSlideIndex);
}

function showPrevSlide() {
    const prevSlideIndex = (currentSlideIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(prevSlideIndex);
}

sliderItems.forEach((slide, index) => {
    if (index !== 0) {
        slide.classList.add('hidden');
    }
    
    slide.dataset.index = index;

    slide.addEventListener('click', () => showSlide(index));
});

btnNext.onclick = showNextSlide;
btnPrev.onclick = showPrevSlide;

// Делаю другой слайдер
