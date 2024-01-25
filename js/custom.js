// Clone Menu and INfo Elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

console.log(newInfo);

// Mobile Menu Toggle Function
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; // 요소가 펼쳐졌을 때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    // newMenuBox.style.height = menuHeight + 'px'; // 'px'적어줘야 수치 인식한다.
    newMenuBox.style.height = `${menuHeight}px`; //` ` 백틱(템플릿문자열) : 수치와 문자를 동시에 사용할 수 있는 문자열. `${함수}문자` or`문자 ${함수}` 로 사용할 수 있다.
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = `${0}px`;
  }
});

// Fixed Header Style Change and meet section start animation When Scrolling Down
const header = document.querySelector('.header'); //html header 선택자 불러옮

const meetSection = document.querySelector('.meet-section');
const meetSectionTop = document.querySelector('.meet-section').offsetTop;
const scrCtrl = () => {
  const scry = window.scrollY; //화면 최상단이 위치한 스크롤 Y위치값 구함
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  } //if 함수로 스크롤Y 값이 0보다 크면, header class에 active 추가, 없으면 제거

  // Meet section on 넣다빼기
  if (scry > meetSectionTop - 300) {
    meetSection.classList.add('on');
  } else {
    meetSection.classList.remove('on');
  }
};

window.addEventListener('scroll', scrCtrl); // window 기준으로 스크롤이 실행되면 scrCtrl 함수 사용해라

// 함수 안에 있는 함수 콜백 함수
//함수 3가지 방법 , 화살표 함수 등

// Features Section Data
const features = [
  {
    image: '/soaply_v0.1.0/images/about-icon-1.svg',
    title: 'For All Skin Types',
    txt: '정당의 설립은 자유이며, 복수정당제는 보장된다.',
  },
  {
    image: '/soaply_v0.1.0/images/about-icon-2.svg',
    title: '100% Organic',
    txt: '모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다.',
  },
  {
    image: '/soaply_v0.1.0/images/about-icon-3.svg',
    title: 'Cuelty Free',
    txt: '법원은 최고법원인 대법원과 각급법원으로 조직된다.',
  },
];

// 상대경로 : 파일있는 곳이 기준 -> ../
// 절대경로 : 해당 파일이 어디있든 상관 없이 무조건 루트에서 내려옴. 자바스크립트는 절대경로로 파일 찾을 수 있다!

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featrueElm = `
  <div class="feature">
    <div class="feature-icon">
      <img src="${feature.image}" alt=""/>
    </div>
    <h4>${feature.title}</h4>
    <p>${feature.txt}</p>
  </div>
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featrueElm);
  // beforeend: </닫는태그> 앞에 위치 시킴
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical', // 디폴트값은 가로라서 주석처리함
  loop: true, // 반복여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
