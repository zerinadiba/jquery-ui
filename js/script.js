$( function() {
//ex1

$( "#draggable" ).draggable()
//ex2

 $( "#accordion" ).accordion();

//ex3

 $( function() {
    $( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

//ex4
 $( "#resizable" ).resizable();



//ex5
  $( "#selectable" ).selectable();


//ex6
  $( "#sortable" ).sortable();


//ex7
 var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

//ex8
 $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );


//ex9


$( ".cki" ).checkboxradio();


//ex10

 $( "#datepicker" ).datepicker();

//ex11

$( "#menu" ).menu();

//ex12

$( "#progressbar" ).progressbar({
      value: 37
    });
//ex13

 $( "#slider1" ).slider();


//ex14


$( "#tabs" ).tabs();



//ex15

$( "#accordion1" ).accordion({
      collapsible: true
    });





















  });


