//검색창요소 .search 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
//  검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// 검색창 요소 내부 실체 input 요소에 포커스 되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실체 input요소에서 해제 되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 500) {
    // Badge 요소 숨김
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // Badge 요소 보임
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
});
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들은 하나씩 반복처리
fadeEls.forEach(function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
// swiper
new Swiper('.notice .swiper', {
  direction: 'vertical', //수직 슬라이드
  autoplay: true, //자동 재생
  loop: true // 반복 재생
});