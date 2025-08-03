class CustomScript {
    popupWrapper;
    bookNow;
    bookNowCloseBtn;

    constructor() {
        this.init();
    }

    init() {
        this.addEventHandlers();
    }

    addEventHandlers() {
        this.popupWrapper = document.querySelector('.book-now-popup-wrapper');
        this.bookNow = document.querySelectorAll('.book-now-btn');
        this.bookNow.forEach(btnEl => btnEl.addEventListener('click', this.bookNowHandler.bind(this)));

        this.bookNowCloseBtn = document.querySelector('.bnp-close');
        this.bookNowCloseBtn.addEventListener('click', this.bookNowCloseBtnHandler.bind(this));
    }

    bookNowHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        this.popupWrapper.classList.toggle('bnp-open');
    }

    bookNowCloseBtnHandler(event) {
        this.popupWrapper.classList.remove('bnp-open');
    }
}
new CustomScript();
