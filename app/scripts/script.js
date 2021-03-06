window.onload = () => {
    const opener = document.querySelector("#opener");
    const closer = document.querySelector("#closer");
    const menu = document.querySelector('.menu');

    opener.addEventListener('click', event => menu.classList.add('active'));
    closer.addEventListener('click', event => menu.classList.remove('active'));

    //Starts Countdown
    startCountdown();

    //Smooth Scroll Config
    document.querySelectorAll('.link-to').forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            menu.classList.remove('active');
            scrollToItem(document.querySelector(element.href.substring(element.href.lastIndexOf('#'))));
        });
    });
};