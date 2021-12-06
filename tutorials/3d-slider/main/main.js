const swiper = new Swiper ('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
});
const imgSlide = document.querySelectorAll('.img-slide');

for (let i=0; i<imgSlide.length; i++) {
  imgSlide[i].addEventListener('click',(evt)=> {
    const sliderModal = document.createElement('div');
    sliderModal.classList.add('slider_modal');

    const modalItem = document.createElement('img');
    modalItem.classList.add('modal-item');
    modalItem.src=evt.target.src;
    sliderModal.append(modalItem);

    const modalClose = document.createElement('div');
    modalClose.classList.add('modal-close');
    sliderModal.append(modalClose);
    modalClose.addEventListener('click', () => sliderModal.remove());
    document.body.append(sliderModal);
  });
};