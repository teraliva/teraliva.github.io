$(document).ready(function () {
    $('.carousel').slick({
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    });
});

// small-carousel

$(document).ready(function () {
    $('.article-page__carousel').slick({
        speed: 300,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        nextArrow: '<span class="nextArrow"><i class="fa-solid fa-arrow-right-long fa-xl"></i></span>',
        prevArrow: '<span class="prevArrow"><i class="fa-solid fa-arrow-left-long fa-xl"></i></span>',
    });
});


// const pArrow = document.querySelector('.prevArrow');
// const nArrow = document.querySelector('.nextArrow');


// pArrow.addEventListener("mouseover", function handleMouseOver() {
//     pArrow.style.opacity = 1;
// });
//
// nArrow.addEventListener("mouseover", function handleMouseOver() {
//     nArrow.style.opacity = 1;
// });
//
// nArrow.addEventListener("mouseleave", function handleMouseOver() {
//     nArrow.style.opacity = 0.3;
// });
//
// pArrow.addEventListener("mouseleave", function handleMouseOver() {
//     pArrow.style.opacity = 0.3;
// });


// noise settings

const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (var i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

noise();

function reveall() {
    var reveals = document.querySelectorAll(".page-base");

    for (var asd = 0; asd < reveals.length; asd++) {
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('goUp');
                }
            });
        });

        observer.observe(reveals[asd]);
    }
}
reveall();

function showVideo(e) {
    let a = document.querySelector("home-page__2");
    a.classList.add('goUp');
}


// small-cursor
const scursor = document.querySelector('.small-cursor');
const areas = document.querySelectorAll('.page-base__img');

const cursor = document.querySelector('.ball');


for (var qwe = 0; qwe < areas.length; qwe++) {
    const area = areas[qwe];

    area.addEventListener("mouseover", function handleMouseOver() {
        // scursor.style.visibility = 'hidden';
        cursor.classList.add('scaleUp');
    });

    area.addEventListener("mouseleave", function handleMouseOver() {
        // scursor.style.visibility = 'visible';
        cursor.classList.remove('scaleUp');
    });
}

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // scursor.style.left = e.clientX + 'px';
    // scursor.style.top = e.clientY + 'px';
});


const hamburger = document.querySelector('.hamburger');
// const hamburger__index = document.querySelector('.hamburger__index');
const header__right = document.querySelector('.header__right');
// const menu__index__right = document.querySelector('.header__index__right');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');



hamburger.addEventListener("click", () => {
    bar1.classList.toggle('open1')
});
hamburger.addEventListener("click", () => {
    bar2.classList.toggle('open2')
});
hamburger.addEventListener("click", () => {
    bar3.classList.toggle('open3')
});

hamburger.addEventListener("click", ()  => {
    header__right.classList.toggle('active')
   
});

// hamburger.addEventListener("click", toggleNav);

// function toggleNav() {
//     menu_right.classList.toggle('active');
//   }
// hamburger.addEventListener("click", () => {
//     // if (menu__index__right ) {
//     //     menu__index__right.classList.toggle('active2');
//     // }

//     if (menu_right ) {
//         menu_right.classList.toggle('active');
//     }
// })


// 