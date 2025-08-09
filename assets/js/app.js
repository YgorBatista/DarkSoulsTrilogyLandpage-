function applyTextHover(containerSelector) {
    const container = document.querySelector(containerSelector);
    const img = container.querySelector('img');
    const text = container.querySelector('.text');

    //verificacao para aplicar o efeito
    if (!container || !img || !text) return;

    //alteração no hover

    container.addEventListener('mouseenter', () => {
        document.querySelectorAll('.text').forEach(t => {
            t.style.opacity = '0';
            t.style.visibility = 'hidden';
            t.style.zIndex = '1';
        });

        document.querySelectorAll('main img').forEach(i => {
            i.style.zIndex = '1';
        });

        img.style.zIndex = '123';
        text.style.zIndex = '124';
        text.style.opacity = '1';
        text.style.visibility = 'visible';
    });

    //alteração ao sair do hover

    container.addEventListener('mouseleave', () => {
        text.style.opacity = '0';
        text.style.visibility = 'hidden';

        setTimeout(() => {
            img.style.zIndex = '1';
            text.style.zIndex = '1';
        }, 100);
    });
}

//onde aplicar o efeito

applyTextHover('.ds1');
applyTextHover('.ds2');
applyTextHover('.ds3');

// elementos com  gsap
// funções de animação paragraph e information
function animateParagraph() {
    const tlParagraph = gsap.timeline({
        scrollTrigger: {
            trigger: '.paragraph',
            start: 'top 60%',
            end: 'bottom 100%',
            toggleActions: ' play none none none '
        }
    });
    tlParagraph.fromTo(
        '.paragraph',
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.3
        }
    );
    tlParagraph.fromTo('.paragraph h2', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 });
    tlParagraph.fromTo('.paragraph .divider', { width: 0 }, { width: '10%', duration: 1 }, '-=0.3');
    tlParagraph.fromTo('.paragraph span', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5');
}

// .information
function animateInformation() {
    const tlInformation = gsap.timeline({
        scrollTrigger: {
            trigger: '.information',
            start: '-30% top',
            end: '10% bottom',
            toggleActions: 'play none none none'
        }
    });
    tlInformation.fromTo('.information h2', { opacity: 0 }, { opacity: 1, duration: 0.6 });
    tlInformation.fromTo('.information .divider', { width: 0 }, { width: '10%', duration: 1 }, '-=0.3');
}

// fade
document.querySelectorAll('.fade').forEach(e => {
    gsap.fromTo(e, { opacity: 0, y: '20px' }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: e, start: 'top 60%', toggleActions: 'play none none none' } });
});

animateParagraph();
animateInformation();
