

const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profileImg = document.querySelector('#profile_img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_text = document.querySelectorAll('.animated-bg-text');

setTimeout(() => getData(), 1500);

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1720470331470-2d6d2fcbc5a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image">';
    title.innerHTML = 'Lorem ipsum dolor sit amet consectetur.';
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, recusandae.';
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/40.jpg" alt="">';
    name.innerHTML = 'Random Name';
    date.innerHTML = 'Jul 20, 2024';

    animated_bgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    });

    animated_bgs_text.forEach(bg => {
        bg.classList.remove('animated-bg');
    });
}