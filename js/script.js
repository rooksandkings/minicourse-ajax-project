
function loadData() {
    alert("loading data");

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    alert(streetStr);
    alert(cityStr);

    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');
    alert("greeetings should have changed");

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');
    alert("done?");

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
//$('<background = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">').appendTo($('body'));
//$('body').css('background-image','url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png")');
//console.log("done?");
