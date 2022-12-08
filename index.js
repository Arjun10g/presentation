const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const slide4 = document.querySelector('.slide4');

const img1l = document.querySelector('.slide1 .left img');
const img1r = document.querySelector('.slide1 .right img');

const img2l = document.querySelector('.slide2 .left img');
const img2r = document.querySelector('.slide2 .right img');

const img3l = document.querySelector('.slide3 .left img');
const img3r = document.querySelector('.slide3 .right img');

const img4l = document.querySelector('.slide4 .left img');
const img4r = document.querySelector('.slide4 .right img');

const cimg = document.querySelector('#img1');
const cimg2 = document.querySelector('#img2');
const cimg3 = document.querySelector('#img3');
const cimg4 = document.querySelector('#img4');

const intro = document.querySelector('.intro');
const design = document.querySelector('.design');
const model = document.querySelector('.model');
const graph = document.querySelector('.graph');

// Create an array of images
const images1 = [img1l, img1r];

const images2 = [img2l, img2r];

const images3 = [img3l, img3r];

const images4 = [img4l, img4r];


images1.forEach((img) => {
  img.addEventListener('click', () => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.to(intro, { scale: 0.001, ease: 'none' })
    tl.to(img1l, { y: '-100%', ease: 'none' })
    tl.to(img1r, { y: '100%', ease: 'none' }, '<')
    setTimeout(() => {
    slide1.style.zIndex = -6;
    intro.style.display = 'none';
    design.style.display = 'block';
    tl.fromTo(design, { scale: 0.001 }, { scale: 1, ease: 'none' }, '>')
    }, 2000);
  });
});

images2.forEach((img) => {
    img.addEventListener('click', () => {
        const tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.to(design, { scale: 0.001, ease: 'none' })
        tl.to(img2l, { y: '100%', ease: 'none' })
        tl.to(img2r, { y: '-100%', ease: 'none' }, '<')
        setTimeout(() => {
            slide2.style.zIndex = -6;
            design.style.display = 'none';
            model.style.display = 'block';
            tl.fromTo(model, { scale: 0.001 }, { scale: 1, ease: 'none' }, '>')
            }, 2000);
    });
    });

images3.forEach((img) => {
    img.addEventListener('click', () => {
        const tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.to(model, { scale: 0.001, ease: 'none' })
        tl.to(img3l, { y: '-100%', ease: 'none' })
        tl.to(img3r, { y: '100%', ease: 'none' }, '<')
        setTimeout(() => {
            slide3.style.zIndex = -6;
            model.style.display = 'none';
            graph.style.display = 'block';
            tl.fromTo(graph, { scale: 0.001 }, { scale: 1, ease: 'none' }, '>')
            }, 2000);
    });
    });

images4.forEach((img) => {
    img.addEventListener('click', () => {
        const tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.to(graph, { scale: 0.001, ease: 'none' })
        tl.to(img4l, { y: '100%', ease: 'none' })
        tl.to(img4r, { y: '-100%', ease: 'none' }, '<')
        setTimeout(() => {
            slide4.style.zIndex = -6;
            graph.style.display = 'none';
            const tl2 = gsap.timeline({ defaults: { duration: 1, repeat: -1, yoyo: true, repeatDelay: 2} });
            tl2.to(cimg, { rotate: '360deg', ease: 'none'});
            tl2.to(cimg2, { rotate: '360deg', ease: 'none'}, '<');
            tl2.to(cimg3, { rotate: '360deg', ease: 'none'}, '<');
            tl2.to(cimg4, { rotate: '360deg', ease: 'none'}, '<');
            }, 2000);
    });
    });

