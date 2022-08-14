const notify_btn = document.querySelector('.notifyicon');
const notify_msg = document.querySelector('.message-nav');

notify_btn.addEventListener('click', function () {
    notify_btn.classList.add('is-active');
    notify_msg.classList.add('is-active');
});

