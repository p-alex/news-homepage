"use strict";
const hamburger = document.getElementById('hamburger');
const closeSideBar = document.querySelector('.sideMenu__close');
const sideMenuBackdrop = document.querySelector('.sideMenu__backdrop');
const sideBarLinks = document.querySelectorAll('.sideMenu__link');
const topFocusTrap = document.querySelector('.sideMenu__topFocusTrap');
const bottomFocusTrap = document.querySelector('.sideMenu__bottomFocusTrap');
const showSideBar = () => {
    const nav = document.querySelector('nav');
    nav.dataset.sideNav = 'active';
    topFocusTrap.tabIndex = 0;
    bottomFocusTrap.tabIndex = 0;
    sideBarLinks[0].focus();
    document.body.style.overflow = 'hidden';
};
const hideSideBar = () => {
    const nav = document.querySelector('nav');
    nav.dataset.sideNav = '';
    topFocusTrap.tabIndex = 1;
    bottomFocusTrap.tabIndex = 1;
    hamburger.focus();
    document.body.style.overflow = 'auto';
};
hamburger.addEventListener('click', showSideBar);
closeSideBar.addEventListener('click', hideSideBar);
sideMenuBackdrop.addEventListener('click', hideSideBar);
topFocusTrap.addEventListener('focus', () => {
    console.log('here');
    sideBarLinks[sideBarLinks.length - 1].focus();
});
bottomFocusTrap.addEventListener('focus', () => {
    closeSideBar.focus();
});
