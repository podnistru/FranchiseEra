let loadSlogans = [
    'Just make some music',
    'Creating beat',
    'Just mix',
    'Just play on guitar',
    'Just make samples',
    'Just record loops',
    'Just render beat'
];

let rndLoadSlogans = Math.floor(Math.random() * loadSlogans.length);  
$('#slogan').html(loadSlogans[rndLoadSlogans]);

setTimeout(function(){
    $('#load').css('display', 'none');
    $('#nav').css('display', 'flex');
    $('#wrap1').css('display', 'flex');
    $('#wrap2').css('display', 'flex');
    $('#wrap3').css('display', 'flex');
    $('#state-container').css('display', 'flex');
    $('#wrap4').css('display', 'flex');
    $('#foot').css('display', 'flex');
    $('#info_h').css('display', 'flex');
},2000);




