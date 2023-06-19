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
// swipter promotion
new Swiper('.promotion .swiper', {
  autoplay: true, // 자동재생
  loop: true, //반복 재생
  slidesPerView: 3, //한 번에 보여주는슬라이드 횟수
  spaceBetween: 10, //슬라이드 여백 사이
  centeredSlides: true, //1번 슬라이드 가운데 보기
  pagination: { //페이지 번호 사용 swiper 기능
    el: '.promotion .swiper-pagination', //페이지 번호 부여
    clickable: true // 사용자의ㅏ 페이지 번호 제어 여부
  },
  navigation: { // 슬라이드이전/다음 버튼 
    prevEL: '.promotion .swiper-button-prev', //이전
    nextEL: '.promotion .swiper-button-next' //다음
  }
});
// toggle 버튼 동작 하기
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-protmotion');
// 토글 버튼 클릭시 동작
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});
// 애니메이션 동작 처리 floating
gsap.to('.floating1', 1.5, {
  delay: 1, //지연 시간 설정
  y: 15,  // 수직으로 얼마나 움직일지 설정
  repeat: -1, // 몇버 반복하는지 -1은 무한 반복
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
gsap.to('.floating2', 2, {
  delay: 5, //지연 시간 설정
  y: 15,  // 수직으로 얼마나 움직일지 설정
  repeat: -1, // 몇버 반복하는지 -1은 무한 반복
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
gsap.to('.floating3', 2.5, {
  delay: 1.5, //지연 시간 설정
  y: 20,  // 수직으로 얼마나 움직일지 설정
  repeat: -1, // 몇버 반복하는지 -1은 무한 반복
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
});
/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});