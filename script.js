// set up text to print, each item in array is new line
var aText = new Array(
    "Hello and welcome to our app!!!",
    "Project Green is an app designed to raise awareness about Climate Change.",
    "The United Nations recently released a report saying it is now a 'Code Red for Humanity.'",
    "Constant damage to our planet through burning of fossil fuels, cutting down trees,",
    "and many more has put animals, living things and everyone's lives at stake.",
    "There is only a limited amount of time left before the impacts of climate change become irreversible.",
    "We hope this app can inspire you and the world for change today.",
    "Everday counts and you can help make a huge difference!!!",
    "",
    "Project | Green"
    );
    var iSpeed = 95; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();