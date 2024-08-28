// 'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header')
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
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
  console.log("안녕")
  navbarMenu.classList.toggle('open');
})


// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', ()=> {
  navbarMenu.classList.remove('open');
})


// 프로젝트 필터링 관련 로직 처리

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects')
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category
  if (filter == null){
    return;
  }

handleActiveSelectrion(event.target);
filterProjects(filter);
})


function handleActiveSelectrion(target) {
  const active = document.querySelector('.category_seleted')
  active.classList.remove('category_seleted')
  target.classList.add('category_seleted')
}


function filterProjects (filter) {
  projects.forEach(project => {
    if(filter === 'all' || filter === project.dataset.type){
        project.style.display = 'block'
    } else {
      project.style.display = 'none'  
    } 
  })

  projectsContainer.classList.add('anim-out')
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250)
}

// //Intersection Observer API 활용
// 구현계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 사용해서 모든 섹션들을 관찰해야 한다.
// 3. 보여지는 섹션의 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션: 디수의섹션이 동시에 보여진다면, 가장 첫번째 색션을 우선
// 마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택

const setionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact',];
const sections = setionIds.map((id) => document.querySelector(id))
const navItems = setionIds.map((id) => document.querySelector(`[href="${id}"]`))
console.log(sections)
console.log(navItems)
const visibleSections = setionIds.map(() => false )

const options = {}
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  entries.forEach((entry) => {
    const index = setionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne = 
        index === setionIds.length - 1 && 
        entry.isIntersecting && 
        entry.intersectionRatio >= 0.99;
  }); 
  console.log(visibleSections)
  console.log('무조건 라스트 섹션!!', selectLastOne)

  const navIndex = selectLastOne 
    ? setionIds.length - 1 
    : findFirstIntersecting(visibleSections)
    console.log(setionIds[navIndex])
}


function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true)
  return index >= 0 ? index : 0
}