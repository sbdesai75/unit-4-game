

var random_result
var lost = 0;
var win = 0;
var previous = 0;

var resetandStart = function () {

    $("cystals").empty();

    var images = ['', '', '', '',];

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;

        $("crystals").empty();



        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + " ",
        });
        

        $(".crystals").append(crystal);

    }

    $("previous").html("Total Score", previous);


}



$("previous").html(previous);

resetandStart();



$(document).on('click', function () {



    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("previous").html("Total Score", + previous);

    console.log(previous);

    if (previous > random_result) {
        lost--;

        $("#lost").html("You Lost", + lost);

        previous = 0;

        $("previous").html(previous);
    }
    else if (previous === random_result) {
        win++;

        $("#win").html(win);

        $("previous").html("You Win!!!", + win);

        previous = 0;

        resetAndStart();
    }


});


