
$(document).ready(function(){


  var cDisplayText = "",
      cCalcBoo = false,
      cOper = "",
      calcString = "",
      origColor = ""



  $(".cKey, .cOper").hover(function() { 

    origColor = $(this).css('background-color')

    $(this).css('cursor','pointer')

    $(this).css('background-color','#DDD')

  }, function() { 

     $(this).css('background-color',origColor)

  })



$("body").keyup(function(e) {

if (e.which == 27) {


      calcString = ""

      cDisplayText = ""

      $("#cDisplayText").text(0) 

    }


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

          thisKey.css('font-size', '-=100%');

        }, 100);

      }

    })



    if (e.which == 13) {

        $("#cDisplayText").text("")

        cOper = '='

        calcFunction()

    } else if (e.keyCode == 42) {

      cDisplayText = "" 

      $("#cDisplayText").text(cDisplayText) 

      calcString += '*'

      cOper = '*'

    }


    var cRegNumbers = /^[0-9]$/;

    var cRegTest = cRegNumbers.test(cKbEntry);



    if (cRegTest === true) {

      cSetDispNum(cKbEntry)

    } else { 


      if (cKbEntry === '+') { 

        cDisplayText = "" 

        $("#cDisplayText").text(cDisplayText) 

        calcString += cKbEntry

        cOper = '+'
          
      } else if (cKbEntry === '-') { 

        cDisplayText = "" 

        $("#cDisplayText").text(cDisplayText) 

        calcString += cKbEntry

        cOper = '-'
          
      } else if (cKbEntry === '/') { 

        cDisplayText = "" 

        $("#cDisplayText").text(cDisplayText) 

        calcString += cKbEntry

        cOper = '/'
          
      } else if (cKbEntry === 'x') { 

        cDisplayText = ""

        $("#cDisplayText").text(cDisplayText)

        calcString += '*'

        cOper = '*'
          
      } else if (cKbEntry === '.') { 

        calcString += cKbEntry

        cDisplayText += cKbEntry 

        $("#cDisplayText").text(cDisplayText)
          
      }  else if (cKbEntry === 'C') { 
      
        calcString = ""

        cDisplayText = ""

        $("#cDisplayText").text(0) 

      }

       else if (cKbEntry === '=') { 

        $("#cDisplayText").text("")

        cOper = '='

        calcFunction()

      }

    } 
     
  }

});



  $(".cKey, .cOper").click(function() { 

  
    var cKeyClicked =  $(this).html() 


    var tKey = $(this)

    var cStandColor = tKey.css('font-size')

    $(this).css('font-size', '+=100%');

    setTimeout(function() {

          tKey.css('font-size', '-=100%');

    }, 100);



    var cRegNumbers = /^[0-9]$/; 

    var cRegTest = cRegNumbers.test(cKeyClicked);


    if (cRegTest === true) { 

      cSetDispNum(cKeyClicked)


    } else { 


      if (cKeyClicked === '+') { 


        cDisplayText = "" 

        $("#cDisplayText").text(cDisplayText) 

        calcString += cKeyClicked

        cOper = '+'

          
      } else if (cKeyClicked === '-') { 


        cDisplayText = ""

        $("#cDisplayText").text(cDisplayText)

        calcString += cKeyClicked

        cOper = '-'

          
      } else if (cKeyClicked === '/') { 


        cDisplayText = ""

        $("#cDisplayText").text(cDisplayText)

        calcString += cKeyClicked

        cOper = '/'
          
      } else if (cKeyClicked === 'x') { 

        cDisplayText = "" 

        $("#cDisplayText").text(cDisplayText) 

        calcString += '*'

        cOper = '*'
          
      } else if (cKeyClicked === '.') { 

        calcString += cKeyClicked

        cDisplayText += cKeyClicked 

        $("#cDisplayText").text(cDisplayText)
          
      }  else if (cKeyClicked === 'C') { 
      
        $("#cDisplayText").text(cDisplayText)

        calcString = ""

        cDisplayText = ""

        $("#cDisplayText").text(0) 

      }

       else if (cKeyClicked === '=') { 

        $("#cDisplayText").text("")

        cOper = '='

        calcFunction()

      }

    }    

  })


function calcFunction () {

    if(cOper === '=') {

      calcString = eval(calcString)

      if (calcString.toString().length > 10) {


        var z = Math.floor(Math.log(calcString) * Math.LOG10E)

        $("#cDisplayText").text((cSetDec(calcString).toFixed(3)) + " e" + z);

      } else {


        $("#cDisplayText").text(eval(calcString))

      }

      cOper = ""
    }

} 


function cSetDispNum (c) {

  if ((cDisplayText.length).toString() < 10) {

    calcString += c

    cDisplayText += c 

    $("#cDisplayText").text(cDisplayText) 

  } else {

    $("#cDisplayText").fadeOut('fast')

    $("#cDisplayText").fadeIn('fast')
   
  }

}


function cSetDec(c) {
  
  var m = c.toString().length - 1

  var p = c / Math.pow(10, m)
 
  return p
  
}



//!!
})




/*


for (var i = 0; i < calcString.length; i += 1) {
    

    if (calcString.charAt(i) == '+') {


      var calcStringSplit = calcString.split('+')

      calcString = (cAdd(Number(calcStringSplit[0]), Number(calcStringSplit[1])))

      $("#cDisplayText").text(cAdd(Number(calcStringSplit[0]), Number(calcStringSplit[1])))


    }

  } // FOR ( i )





//>>>>>>>>>>>


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