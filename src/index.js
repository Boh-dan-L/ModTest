import './styles/index.scss'
import './just-validate.min.js'


// Validate form

new window.JustValidate('.js-form', {
    rulse: {},

    colorWrong: '#D73F3E',

    submitHandler: function (form, values, ajax) {
        console.log(values);

        form.reset();
    }

})

// API endpoint, exchange rate

    fetch(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then (function(resp) {return resp.json()})
.then (function(data){
    console.log(data)
    document.querySelector('.rate__dollar--text').textContent = data[0]['ccy'];
    document.querySelector('.rate__dollar--buy').textContent = Math.round(data[0]['buy']*100)/100;
    document.querySelector('.rate__dollar--sale').textContent = Math.round(data[0]['sale']*100)/100;
    document.querySelector('.rate__eur--text').textContent = data[1]['ccy'];
    document.querySelector('.rate__eur--buy').textContent = Math.round(data[1]['buy']*100)/100;
    document.querySelector('.rate__eur--sale').textContent = Math.round(data[1]['sale']*100)/100;
});

