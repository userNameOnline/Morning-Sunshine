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

})
