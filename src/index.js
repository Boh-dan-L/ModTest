import './styles/index.scss'
import './just-validate.min.js'
import $ from "jquery";
import { validate } from 'schema-utils';
// import 'bootstrap';


new window.JustValidate('.js-form', {
    rulse: {

    },

    colorWrong: '#D73F3E',

    submitHandler: function (form, values, ajax) {
        console.log(values);

        form.reset();
    }

})