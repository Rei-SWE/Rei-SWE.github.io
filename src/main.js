// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header')
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
  console.log(window.screenY)
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark')
  } else {
    header.classList.remove('header--dark')
  }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함

const home = document.querySelector('.home_container')
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () =>{
  console.log(homeHeight / 2)
  home.style.opacity = 1 - window.scrollY / homeHeight
})



// Arrow up버튼을 아래로 스크롤시 투명하게 처리함

const arrowUp = document.querySelector('.arrow-up')

document.addEventListener('scroll', () => {
  window.scrollY > homeHeight / 2 ? arrowUp.style.opacity = 1 : arrowUp.style.opacity = 0
})



// // 미니어 쿼시시 토글 버튼 만들기

const navbarMenu = document.querySelector('.header_menu')
const navbarToggle = document.querySelector('.header_toggle')
navbarToggle.addEventListener('click', ()=> {
  navbarMenu.classList.toggle('opne');
})


// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', ()=> {
  navbarMenu.classList.remove('opne');
})
