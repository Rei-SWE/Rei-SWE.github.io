// 'use strict';

const bodyObserver = new IntersectionObserver((entries, observer) => {
  const changeHome = document.querySelector('.header_menu_item[href="#home"]')
  const changeAbout = document.querySelector('.header_menu_item[href="#about"]');
  const changeSkills = document.querySelector('.header_menu_item[href="#skills"]');
  const changeWork = document.querySelector('.header_menu_item[href="#work"]');
  const changeTestimonial = document.querySelector('.header_menu_item[href="#testimonial"]');

  entries.forEach(entry => {
    if (entry.target.id === 'home') {
        changeHome.classList.add('active')
        changeAbout.classList.remove('active');
        changeSkills.classList.remove('active');
        changeWork.classList.remove('active');
        changeTestimonial.classList.remove('active');
    } else if (entry.target.id === 'about') {
        changeAbout.classList.add('active');
        changeSkills.classList.remove('active');
        changeHome.classList.remove('active')
        changeWork.classList.remove('active');
        changeTestimonial.classList.remove('active');
    } else if (entry.target.id === 'skills') {
        changeSkills.classList.add('active')
        changeAbout.classList.remove('active');
        changeHome.classList.remove('active')
        changeWork.classList.remove('active');
        changeTestimonial.classList.remove('active');
    } else if (entry.target.id === 'work') {
        changeWork.classList.add('active');
        changeSkills.classList.remove('active')
        changeAbout.classList.remove('active');
        changeHome.classList.remove('active')
        changeTestimonial.classList.remove('active');
    }
},  { threshold: 0.5 });
})

// <body> 안에 있는 요소들 선택
const observeHome = document.querySelector('#home');
const observeAbout = document.querySelector('#about');
const observeSkills = document.querySelector('#skills');
const observeWork = document.querySelector('#work');
const observTestimonial = document.querySelector('#testimonial')
const observContact = document.querySelector('#contact')

// <body> 안에 있는 요소들을 관찰하도록 지시
bodyObserver.observe(observeHome);
bodyObserver.observe(observeAbout);
bodyObserver.observe(observeSkills);
bodyObserver.observe(observeWork);
bodyObserver.observe(observTestimonial, { root: document.body, threshold: 0.5 });
bodyObserver.observe(observContact);

// 헤더 메뉴 바꾸기

