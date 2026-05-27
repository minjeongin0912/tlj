/* ========================================
   SCRIPT.JS — Main JavaScript
======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- AOS 초기화 ---- */
  AOS.init({
    duration: 700,
    easing: 'ease-out-quad',
    once: true,
    offset: 60,
  });

  /* ---- GNB: 스크롤 시 scrolled 클래스 ---- */
  const gnb = document.querySelector('.gnb');

  if (gnb) {
    window.addEventListener('scroll', () => {
      gnb.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  /* ---- 검색창 열고 닫기 ---- */
  const searchBox = document.querySelector('.search-box');
  const searchBtn = document.querySelector('.search-btn');
  const closeBtn = document.querySelector('.close-btn');
  const searchInput = document.querySelector('.search-box input');

  if (searchBox && searchBtn && closeBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchBox.classList.add('active');
      searchInput.focus();
    });

    closeBtn.addEventListener('click', () => {
      searchBox.classList.remove('active');
      searchInput.value = '';
    });
  }
/* ---- 왼쪽 이벤트 배너 슬라이더 ---- */
const eventSlides = document.querySelectorAll('.event-slide');
const eventDots = document.querySelectorAll('.event-dot');
const eventPlayBtn = document.querySelector('.event-play-btn');

let eventIndex = 0;
let eventTimer = null;
let eventPlaying = true;

function showEventSlide(index) {
  eventSlides.forEach(slide => slide.classList.remove('active'));
  eventDots.forEach(dot => dot.classList.remove('active'));

  eventSlides[index].classList.add('active');
  eventDots[index].classList.add('active');

  eventIndex = index;
}

function nextEventSlide() {
  const nextIndex = (eventIndex + 1) % eventSlides.length;
  showEventSlide(nextIndex);
}

function startEventAuto() {
  eventTimer = setInterval(nextEventSlide, 3000);
}

function stopEventAuto() {
  clearInterval(eventTimer);
}

if (eventSlides.length && eventDots.length && eventPlayBtn) {
  startEventAuto();

  eventDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showEventSlide(index);

      if (eventPlaying) {
        stopEventAuto();
        startEventAuto();
      }
    });
  });

  eventPlayBtn.addEventListener('click', () => {
    eventPlaying = !eventPlaying;

    if (eventPlaying) {
      startEventAuto();
      eventPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      stopEventAuto();
      eventPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });
}


/* ---- 오른쪽 추천제품 페이지 이동 ---- */
const productPages = document.querySelectorAll('.product-page');
const productPrev = document.querySelector('.product-prev');
const productNext = document.querySelector('.product-next');

let productIndex = 0;

function showProductPage(index) {
  productPages.forEach(page => page.classList.remove('active'));
  productPages[index].classList.add('active');
  productIndex = index;
}

if (productPages.length && productPrev && productNext) {
  productPrev.addEventListener('click', () => {
    const prevIndex = (productIndex - 1 + productPages.length) % productPages.length;
    showProductPage(prevIndex);
  });

  productNext.addEventListener('click', () => {
    const nextIndex = (productIndex + 1) % productPages.length;
    showProductPage(nextIndex);
  });
}
/* ---- Go Top 버튼 ---- */
const goTopBtn = document.querySelector('.go-top');

if (goTopBtn) {
  goTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

});