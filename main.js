/* Function for changing states when clicked */
/* Adapted from online source https://teamtreehouse.com/community/change-colour-of-label-when-relevant-radio-button-is-checked */
$(document).ready(function() {
    $('input[type="radio"]').click(function() {
        $label = $(this).parent();
        $label.parent().parent().find('label').css('opacity', '50%');
        $label.css('opacity', '100%');
    });
});

/* hiding all album results and error before submit click*/
$("#dangerously").hide();
$("#bday").hide();
$("#sasha").hide();
$("#four").hide();
$("#beyonce").hide();
$("#lemonade").hide();
$("#oops").hide();

/* Function for submit button: calculations and album results */
$('#submit-button').on('click', function(i) {
    /* source for getting checked inputs https://stackoverflow.com/questions/16170828/jquery-get-values-of-checked-checkboxes-into-array */
    var qchoices = $('input[type="radio"]:checked').map(function(i,radio){
        return $(radio).val();
    })
    .toArray();
    /* check if all questions answered, display error message if not */
    if (qchoices.length != 6){
        $("#oops").show();
        /* same source as below */
        window.scrollTo(0,document.body.scrollHeight);
    }
    else{
        
        /* set counts to 0 */
        dangerously = 0;
        bday = 0;
        sasha = 0;
        four = 0;
        beyonce = 0;
        lemonade = 0;

        /* assign values to corresponding questions */
        inlove = qchoices[0]
        song = qchoices[1]
        met = qchoices[2]
        remix = qchoices[3]
        performance = qchoices[4]
        ego = qchoices[5]

        /* cases for each question and calculations */
        switch(inlove){
            case "crazy":
                dangerously += 1;
                four += 0.5;
                break;
            case "danger":
                dangerously += 1;
                break;
            case "drunk":
                beyonce += 1;
                break;
            case "none":
                lemonade += 1;
                sasha += 0.5;
                bday += 0.5;
                break;

        }

        switch(song){
            case "mine":
                beyonce += 1;
                break;
            case "kitty":
                bday += 1;
                break;
            case "party":
                four += 1;
                break;
            case "holdup":
                lemonade += 1;
                break;
            case "partition":
                beyonce += 1;
                break;
            case "formation":
                lemonade += 1;
                break;
            case "oneplus":
                four += 1;
                break;
            case "myself":
                dangerously += 1;
                break;
        }

        switch(met){
            case "2012":
                bday += 1;
                break;
            case "2013":
                sasha += 1;
                four += 0.5;
                break;
            case "2014":
                lemonade += 1;
                break;
            case "2015":
                beyonce += 1;
                break;

        }

        switch(remix){
            case "jayz1":
                four += 1;
                break;
            case "meg":
                lemonade += 0.5;
                break;
            case "jayz2":
                dangerously += 1;
                bday += 0.5;
                break;
            case "nicki":
                beyonce += 1;
                break;

        }


        switch(performance){
            case "silver":
                four += 1;
                break;
            case "cheetah":
                bday += 1;
                beyonce += 0.5;
                break;
            case "gold":
                bday += 1;
                dangerously += 0.5;
                break;
            case "hat":
                lemonade += 1;
                break;

        }


        switch(ego){
            case "sasha":
                sasha += 1;
                break;
            case "yonce":
                beyonce += 1;
                break;
            case "b":
                dangerously += 1;
                break;
            case "slay":
                lemonade += 1;
                break;

        }

        /* keeping track of counts for each album result */
        totalcounts = [dangerously, bday, sasha, four, beyonce, lemonade];
        max = 0;

        for(totalcount of totalcounts){
            if (totalcount > max){
                max = totalcount;
            }
        }

        /* check which is max and display corresponding result*/
        if (max!=0){
            switch(max){
                case dangerously:
                    $('#dangerously').show();
                    break;
                case bday:
                    $('#bday').show();
                    break;
                case sasha:
                    $('#sasha').show();
                    break;
                case four:
                    $('#four').show();
                    break;
                case beyonce:
                    $('#beyonce').show();
                    break;
                case lemonade:
                    $('#lemonade').show();
                    break;
                
            }

            $('#oops').hide();
        }

    }

    /* adapted from online source https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page */
    window.scrollTo(0,document.body.scrollHeight);

});

/* function for redo button, refreshes quiz*/ 
$('.retry-button').on('click', function(i){
    $("#dangerously").hide();
    $("#bday").hide();
    $("#sasha").hide();
    $("#four").hide();
    $("#beyonce").hide();
    $("#lemonade").hide();
    $("#oops").hide();
    console.log("made it")
    $('input[type="radio"]').each(function(j){
        console.log("i here")
        /* how to reset check source https://stackoverflow.com/questions/426258/setting-checked-for-a-checkbox-with-jquery */
        this.checked=false;
        $label = $(this).parent();
        $label.parent().parent().find('label').css('opacity', '100%');
    });
    /* same source as above */
    window.scrollTo(0,0);

});