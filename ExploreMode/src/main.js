
$(document).ready(function(){


  var cDisplayText = "",
      cCalNum1 = "";
      cOper = "";
      cCalNum2 = "";


  $(".cKey").hover(function() { // hover |  pointer on keys | color change

    $(this).css('cursor','pointer');
    $(this).css('background-color','#DDD');

  }, function(){

     $(this).css('background-color','#EEE');

  })


  $(".cOper").hover(function(){

    $(this).css('cursor','pointer');
    $(this).css('background-color','#DDD');

  }, function(){

     $(this).css('background-color','#BBB');

  })





  $(".cKey").click(function() {
  
    cDisplayText += $(this).html()

    $("#cDisplayText").text(cDisplayText)

    var tKey = $(this)

    var cStandColor = tKey.css('font-size')

    $(this).css('font-size', '+=100%');

    setTimeout(function() {

          tKey.css('font-size', cStandColor);

    }, 100);

    

  })





$("body").keypress(function(e) {
    

  if (e.which !== 0) { 

    var cKbEntry = String.fromCharCode(e.which);

    $(".cKey").each(function(){

      if ($(this).html() === cKbEntry) {

        var thisKey = $(this);
      
        var cKeyFontSize = thisKey.css('font-size')

        thisKey.css('font-size', '+=100%');

        setTimeout(function() {

          thisKey.css('font-size', cKeyFontSize);

        }, 100);

      }

    })


    var cRegNumbers = /^[0-9]$/;

    var cRegTest = cRegNumbers.test(cKbEntry);

    if (cRegTest === true) {

            cDisplayText += cKbEntry

            $("#cDisplayText").text(cDisplayText)

        } else if (cKbEntry === '+') {


            calcFunction('+')

        }



    }
});




    

  
// ################################  
// Functions
// #################

  
function calcFunction (c) {

    var cDisNum = ("#cDisplayText").text()

   

  if (cCalNum1.length < 1 && cCalNum2.length < 1) {


      cCalNum1 = Number($("#cDisplayText").text())

      alert(cCalNum1)

      $("#cDisplayText").text('')

      cDisplayText = ''


  } else if (cCalNum1.length > 0 && cCalNum2.length < 1) {

    cCalNum2 = Number($("#cDisplayText").text())

    // alert(cCalNum1)
    // alert(cCalNum2)

  }
  
  

} 



//!!
})




/*


$("body").keyup(function(){

      if () {

        cCalNum1 += "1"
      }
      

    $("#cDisplayText").text(cCalNum1)

  })



        <div id="cKey1" class="cKey">1</div>
        <div id="cKey2" class="cKey">2</div>
        <div id="cKey3" class="cKey">3</div>
        <div id="cKeyD" class="cKey">/</div>

        <div id="cKey4" class="cKey">4</div>
        <div id="cKey5" class="cKey">5</div>
        <div id="cKey6" class="cKey">6</div>
        <div id="cKeyX" class="cKey">X</div>

        <div id="cKey7" class="cKey">7</div>
        <div id="cKey8" class="cKey">8</div>
        <div id="cKey9" class="cKey">9</div>
        <div id="cKeyM" class="cKey">-</div>

        <div id="cKey0" class="cKey">0</div>
        <div id="cKeyP" class="cKey">.</div>
        <div id="cKeyE" class="cKey">=</div>
        <div id="cKeyS" class="cKey">+</div>

*/