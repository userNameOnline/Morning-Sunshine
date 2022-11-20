$(document).ready(function() {
    alert('jquery on')

    let textNum = 0;
    setInterval(function() {
        switch(textNum) {
            case 0:
                $("#text").html('Fresh Roasted Coffee');
                textNum = 1;
                break;
            case 1:
                $('#text').html('Scones & Bagels');
                textNum = 2;
                break;
            case 2:
                $('#text').html('Los Angeles Tourist District');
                textNum = 0;
                break;
        }
    }, 1000)

    



    let backgroundNum = 0;
    setInterval(function() {
        switch(backgroundNum) {
            case 0:
                $('body').css('background-image', 'url('pics/background-2.jpg');
                backgroundNum = 1;
                break;
            case 1:
                $('body').css('background-image', 'url('pics/background-3.jpg');
                backgroundNum = 2;
                break;
            case 2:
                $('body').css('background-image', 'url('pics/background-1.jpg');
                backgroundNum = 0;
                break;
         }
    }, 2000)
    
})
