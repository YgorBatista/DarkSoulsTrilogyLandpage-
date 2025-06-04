function applyTextHover(containerSelector) {
    const container = document.querySelector(containerSelector);
    const img = container.querySelector('img');
    const text = container.querySelector('.text');

    //verificacao para aplicar o efeito
    if (!container || !img || !text) return;

    //efeito no hover

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

    //efeito ao sair do hover

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
