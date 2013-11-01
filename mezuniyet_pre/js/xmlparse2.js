$(document).ready(function(){
	$.ajax({
    type: "GET",
    url: "xml/countries.xml",
    dataType: "xml",
    success: xmlParser
   });

$("#txtsearch").keyup(function(){
	$(".main").show();
	var text=$(this).val();
	$(".main").find('a:not(:Contains('+text+'))').slideUp();
	$(".main").find('a:Contains('+text+')').slideDown();

});


jQuery.expr[':'].Contains = function(a,i,m){
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
};



});

function xmlParser(xml) {
$(xml).find("country").each(function () {
  

    $(".main").append('<div class="country"><a href="turkey.html">'+$(this).attr("countryname")+'</a></div>');
 
    $(".country").fadeIn(1000);

 });
}




// function xmlParser(xml) {

// $('#load').fadeOut();

// $(xml).find("Book").each(function () {

//     $(".main").append('<div class="book"><div class="title">' + $(this).find("Title").text() +   '</div><div class="description">' + $(this).find("Description").text() + '</div><div   class="date">Published ' + $(this).find("Date").text() + '</div></div>');
//     $(".book").fadeIn(1000);

//  });

// }