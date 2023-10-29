
var nextStep = document.querySelector('#submit');

nextStep.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('my_form').style.display = 'none';

    document.getElementById('thank_you').style.display = 'block';

});

var lastStep = document.querySelector('#close');

lastStep.addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('thank_you').style.display= 'none';
    document.getElementById('my_form').style.display= 'block';
    

});

