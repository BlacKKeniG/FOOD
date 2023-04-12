'use strict';
import "core-js/stable";

import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calculator from './modules/calculator';

window.addEventListener('DOMContentLoaded', ()=>{
    
    tabs();
    timer();
    modal();
    cards();
    forms();
    slider();
    calculator();
});
