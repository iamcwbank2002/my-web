/* ==================== Toggle Icon Navbar ==================== */
// เลือกไอคอนเมนู (ที่มี id เป็น #menu-icon) และ navbar (ที่มี class เป็น .navbar) จาก DOM
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// กำหนดฟังก์ชันให้ทำงานเมื่อคลิกที่ไอคอนเมนู
menuIcon.onclick = () => {
    // เปลี่ยนคลาส 'bx-x' ของไอคอนเมนู (ใช้ในการสลับไอคอนจากขีดเป็น X เมื่อเมนูเปิด)
    menuIcon.classList.toggle('bx-x');
    
    // เปลี่ยนคลาส 'active' ของ navbar (ใช้ในการแสดงหรือซ่อนเมนู)
    navbar.classList.toggle('active');
};

/* ==================== Scroll Sections Active Link ==================== */
// เลือกทุกๆ section และลิงก์ในเมนูจาก DOM
let sections = document.querySelectorAll('section'); // เก็บทุก section
let navLinks = document.querySelectorAll('header nav a'); // เก็บทุกลิงก์ในเมนูของ header

// เมื่อมีการเลื่อนหน้าจอ
window.onscroll = () => {
    // ตรวจสอบแต่ละ section
    sections.forEach(sec => {
        let top = window.scrollY; // ตำแหน่งที่หน้าจอเลื่อนมาถึง
        let offset = sec.offsetTop - 150; // ตำแหน่งของ section แต่ละส่วน (ลบ 150px เพื่อปรับให้ตรงกับตำแหน่ง)
        let height = sec.offsetHeight; // ความสูงของ section
        let id = sec.getAttribute('id'); // ดึงค่า id ของ section

        // ถ้าตำแหน่งของหน้าจออยู่ในช่วงของ section นี้
        if (top >= offset && top < offset + height) {
            // ลบคลาส 'active' ออกจากทุกลิงก์ในเมนู
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // เพิ่มคลาส 'active' ให้กับลิงก์ที่ตรงกับ section ปัจจุบัน
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    /* ==================== Sticky Navbar ==================== */
    // เมื่อเลื่อนหน้าจอลงมาเกิน 100px navbar จะติดที่ด้านบนของหน้า
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // เพิ่มคลาส 'sticky' เมื่อเลื่อนลงเกิน 100px

    /* ==================== Remove Toggle Icon and Navbar When Click Navbar Link (Scroll) ==================== */
    // เมื่อคลิกที่ลิงก์ในเมนูแล้ว เมนูจะปิดอัตโนมัติ
    menuIcon.classList.remove('bx-x'); // เปลี่ยนไอคอนกลับเป็นปกติ
    navbar.classList.remove('active'); // ซ่อนเมนู
};

    /*================ Scroll reveal======================*/
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'top' });