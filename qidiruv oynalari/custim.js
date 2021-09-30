window.addEventListener('DOMContentLoaded', () => {
    let googleBox = document.querySelector('#google-search'),
        googleBtn = document.querySelector('#google-btn'),
        yandexBox = document.querySelector('#yandex'),
        yandexBtn = document.querySelector('.yandex-btn'),
        yahooBox = document.querySelector('.yahoo'),
        yaahoBtn = document.querySelector('.yahooBtn');

        googleBtn.addEventListener('click', () => {
            let googleUrl = 'https://www.google.com/search?q=' + googleBox.value ;
            window.open(googleUrl,'_self');
        });

        yandexBtn.addEventListener('click',  () => {
            let yandexUrl = 'https://yandex.uz/search/?lr=' + yandexBox.value;
            window.open(yandexUrl, '_self')
        })

        yaahoBtn.addEventListener('click', () => {
            let yahoUrl = 'https://search.yahoo.com/search?p' + yahooBox.value;
            window.open(yahoUrl,"_self");
        })
})