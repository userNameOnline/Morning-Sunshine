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
    
    let backgroundnum = 0;
    setInterval(function() {
        switch(backgroundnum) {
            case 0:
                $(body).css('background', 'url(pics/background-2.jpg)')
                backgroundnum = 1;
                break;
            case 1:
                $(body).css('background', 'url(pics/background-3.jpg)')
                backgroundnum = 2;
                break;
            case 2:
                $(body).css('background', 'url(pics/background-1.jpg)')
                backgroundnum = 0;
                break;
        }
    }, 1000)

})
