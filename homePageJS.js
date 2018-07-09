(function() {
"use strict";

    function originalReset(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
    }


    $('#home').hover(function(){
        $('#home').css('text-decoration', 'underline');
        $('#aboutMe').css('opacity', '.5');
        $('#credentials').css('opacity', '.5');
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});

    });
    $('#aboutMe').hover(function(){
        $('#aboutMe').css('text-decoration', 'underline');
        $('#home').css('opacity', '.5');
        $('#credentials').css('opacity', '.5');
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
    });
    $('#credentials').hover(function(){
        $('#credentials').css('text-decoration', 'underline');
        $('#aboutMe').css('opacity', '.5');
        $('#home').css('opacity', '.5');
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
    });

    $('#contact').hover(function(){
        $('#credentials').css('opacity', '.5');
        $('#home').css('opacity', '.5');
        $('.aboutClass').css('opacity', '.5');
        $('#contact').css({'text-decoration':'underline', 'opacity':'1' });
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
        $('.aboutClass').css({'opacity': '1', 'text-decoration' : 'none'});
        });
    $('#bio').hover(function(){
        $('#credentials').css('opacity', '.5');
        $('#home').css('opacity', '.5');
        $('.aboutClass').css('opacity', '.5');
        $('#bio').css({'text-decoration':'underline', 'opacity':'1' });
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
        $('.aboutClass').css({'opacity': '1', 'text-decoration' : 'none'});
    });
    $('#linkedIn').hover(function(){
        $('#credentials').css('opacity', '.5');
        $('#home').css('opacity', '.5');
        $('.aboutClass').css('opacity', '.5');
        $('#linkedIn').css({'text-decoration':'underline', 'opacity':'1' });
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
        $('.aboutClass').css({'opacity': '1', 'text-decoration' : 'none'});
    });
    $('#Twitter').hover(function(){
        $('#credentials').css('opacity', '.5');
        $('#home').css('opacity', '.5');
        $('.aboutClass').css('opacity', '.5');
        $('#Twitter').css({'text-decoration':'underline', 'opacity':'1' });
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
        $('.aboutClass').css({'opacity': '1', 'text-decoration' : 'none'});
    });
    $('#Esports').hover(function(){
        $('#aboutMe').css('opacity', '.5');
        $('#home').css('opacity', '.5');
        $('.credClass').css('opacity', '.5');
        $('#Esports').css({'text-decoration':'underline', 'opacity':'1' });
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
        $('.credClass').css({'opacity': '1', 'text-decoration' : 'none'});
    });

    $('#Software').hover(function(){
        $('#aboutMe').css('opacity', '.5');
        $('#home').css('opacity', '.5');
        $('.credClass').css('opacity', '.5');
        $('#Software').css({'text-decoration':'underline', 'opacity':'1' });
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
        $('.credClass').css({'opacity': '1', 'text-decoration' : 'none'});
    });
    $('#Github').hover(function(){
        $('#aboutMe').css('opacity', '.5');
        $('#home').css('opacity', '.5');
        $('.credClass').css('opacity', '.5');
        $('#Github').css({'text-decoration':'underline', 'opacity':'1' });
    }, function(){
        $('.dropbtn').css({'opacity': '1', 'text-decoration' : 'none'});
        $('.credClass').css({'opacity': '1', 'text-decoration' : 'none'});
    });



})();