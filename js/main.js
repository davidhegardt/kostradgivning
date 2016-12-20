/*******************************************************************************
 * Laboration 2, Kurs: DT146G
 * File: main.js
 * Desc: main JavaScript file for Projekt
 * 
 * David Hegardt
 * dahe1501
 * dahe1501@student.miun.se
 ******************************************************************************/


// Animate and view image as fullscreen
var intervall = null;
var speed = 4;
var count = 0;


// called multiple times to animate the image
function run() {
    count += speed;
    if (window.matchMedia("(max-width: 480px)").matches) {
        /* the viewport is at max 480px pixels wide */

        // stop the animation when the image is large enough
        if (count >= 100) {
            window.clearInterval(intervall);
            intervall = null;
        } // end if

        var bigImage = document.getElementById("imgCover");                     // retrieve ID imgCover
        bigImage.setAttribute("style", "width: " + (1.2 * count + "px;") +      // set attributes for image maxSize
           "height: " + (count + "px;"));

 
    }
    if (window.matchMedia("(max-width: 1024px)").matches) {
        /* the viewport is at max 480px pixels wide */

        // stop the animation when the image is large enough
        if (count >= 340) {
            window.clearInterval(intervall);
            intervall = null;
        } // end if

        var bigImage = document.getElementById("imgCover");                     // retrieve ID imgCover
        bigImage.setAttribute("style", "width: " + (1.2 * count + "px;") +      // set attributes for image maxSize
           "height: " + (count + "px;"));


    }
   
    else {
        /* For all other page sizes */
        if (count >= 410) {
            window.clearInterval(intervall);
            intervall = null;
        } // end if

        var bigImage = document.getElementById("imgCover");                     // retrieve ID imgCover
        bigImage.setAttribute("style", "width: " + (1.4 * count + "px;") +      // set attributes for image maxSize
           "height: " + (count + "px;"));

        
    }


}
/* insert proper image based on which image is clicked
   and start animation 
*/
function display(imgfile) {
    if (intervall)
        return;

    var bigImage = document.getElementById("imgCover");
    bigImage.setAttribute("style", "width: 0px; height: 0px;");             // start image at 0px
    bigImage.setAttribute("src", "img/fullsize/" + imgfile);
    bigImage.setAttribute("alt", "Large version of " + imgfile);

    var planInfo = document.getElementById("planInfo");
    bigImage.setAttribute("style", "width: 0px; height: 0px;");


    count = 0;
    intervall = window.setInterval("run()", 10);                            // animation is called, large image set
}

// registration of event handlers when clicking
function start() {
    var name;
    var currLocation = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);             //Get name of current html page, last index  
    
    // Based on which page is displayed, call respective functions
    
    if (currLocation == "gallery.html") {
        document.getElementById("imgCover").style.display = 'none';
        name = "emp";

        /* All image files follow the same standard, call image name based on IF statement above for page employee
           also set propriate text based on which image is displayed
        */
        document.getElementById(name + "1").addEventListener(
          "mouseover", function () {
              display(name + "1" + ".jpg");
              galleryText.innerHTML = "<hr><p> Mer info kommer inom kort..</p>";
          }, false);
        document.getElementById(name + "2").addEventListener(
           "mouseover", function () {
               display(name + "2" + ".jpg");
               galleryText.innerHTML = "<hr><p> Mer info kommer inom kort..</p>";
           }, false);
        document.getElementById(name + "3").addEventListener(
           "mouseover", function () {
               display(name + "3" + ".jpg");
               
           }, false);
        document.getElementById(name + "4").addEventListener(
           "mouseover", function () {
               display(name + "4" + ".jpg");
               
           }, false);
        document.getElementById(name + "5").addEventListener(
           "mouseover", function () {
               display(name + "5" + ".jpg");
               
           }, false);
        document.getElementById(name + "6").addEventListener(
           "mouseover", function () {
               display(name + "6" + ".jpg");
               
           }, false);
        document.getElementById(name + "7").addEventListener(
           "mouseover", function () {
               display(name + "7" + ".jpg");
               
           }, false);
        document.getElementById(name + "8").addEventListener(
           "mouseover", function () {
               display(name + "8" + ".jpg");
               
           }, false);
    }
    else if (currLocation == "booking.html") {
        //window.addEventListener("load", CALENDAR, false);// Your code here!
        //window.addEventListener("load", sendSubmit, false);// Your code here!
        CALENDAR();
        sendSubmit();
    }
}

/* Start the slideshow, should run on all pages */
function slideStart() {
    var slides = document.querySelectorAll('#slides .slide');                                           // retrieve all slides
    var dot0 = document.getElementById("dot0");
    var dot1 = document.getElementById("dot1");
    var dot2 = document.getElementById("dot2");
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 2000);                                                   // set how often new image is displayed
    
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;                                             // Increment to next slide
        slides[currentSlide].className = 'slide showing';       
        if (currentSlide == "0") {
            toggleGreen(dot0);                                                                          // Change color of dot based on image displayed, rotation effect
            toggleOff(dot1);
            toggleOff(dot2);
            toggleOff(dot5);
        }
        if (currentSlide == "1") {
            toggleGreen(dot1);
            toggleOff(dot0);
            toggleOff(dot2);
        }
        if (currentSlide == "2") {
            toggleGreen(dot2);
            toggleOff(dot0);
            toggleOff(dot1);
        }
        if (currentSlide == "3") {
            toggleGreen(dot3);
            toggleOff(dot0);
            toggleOff(dot1);
            toggleOff(dot2);
        }
        if (currentSlide == "4") {
            toggleGreen(dot4);
            toggleOff(dot0);
            toggleOff(dot1);
            toggleOff(dot2);
            toggleOff(dot3);
        }
        if (currentSlide == "5") {
            toggleGreen(dot5);
            toggleOff(dot0);
            toggleOff(dot1);
            toggleOff(dot2);
            toggleOff(dot3);
            toggleOff(dot4);
        }
    }


}

// Change color of dots
function toggleGreen(obj) {
    obj.style.backgroundColor = '#104A46';
}
// Reset color of dots
function toggleOff(obj) {
    obj.style.backgroundColor = '';
}

/* Calendar functions */

var next = false;
var newDatum = new Date();
var year = newDatum.getFullYear();

/* Used to display the correct month depending on user choice */
function CALENDAR() {
    var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni","Juli","Augusti","September","Oktober","November","December"];                              //Array of months
    
    currentMonth = newDatum.getMonth();                                                                                             //Retrieve current month    
    currentDay = newDatum.getDate();                                                                                                //Retrieve current day
    chosenMonth = newDatum.getMonth();                                                                                              //Retrieve current month - for comparison

    



    var cells = document.getElementsByTagName('td');                                                                                //Retrieve all td elements on page
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', clickHandler);                                                                           //Add event listener on all tds
        if (cells[i].textContent == currentDay) {
            cells[i].className = "today";                                                                                           // If current day matches day in calendar, change style
        }
    }

    
    document.getElementById("label").innerText = months[currentMonth] + " " + year;                                                 // Write month and year in cal header
    document.getElementById("next").addEventListener(                                                                               // Add click function for next button
       "click", function () {          
           if (currentMonth > 7 && year == 2017) {
               window.alert("Kan inte boka längre fram i tiden");                                                                   // Limit booking to sept 2017
               return;
           }
           if (currentMonth == 11) {                                                                                                // Change to january after december
               currentMonth = 0;
           }
           else {                                                                                                                   // Increment month on click
               currentMonth += 1;
           }
           if (currentMonth == 0) {                                                                                                 // If month is january, increment year
               year += 1;
               next = true;
           }
           
           document.getElementById("label").innerText = months[currentMonth] + " " + year;                                          // update cal header text
           
           changemonth(currentMonth);                                                                                               // call function to print new month


       }, false);

    document.getElementById("prev").addEventListener(                                                                               //See function above, used to decrement month
       "click", function () {
           if (currentMonth <= chosenMonth && year == 2016) {                                                                       //Limit booking to current and future months
               window.alert("Kan inte välja månad före");
               return;
           }
           if (currentMonth == 0) {                                                                                                 // if month is jan,decrement to dec
               currentMonth = 11;
           }
           else {
               currentMonth -= 1;                                                                                                   //decrement by 1 on click
           }
           if (currentMonth == 11) {
               year -= 1;
               next = false;
           }

           document.getElementById("label").innerText = months[currentMonth] + " " + year;

           changemonth(currentMonth);

       }, false);
}


function changemonth(currentMonth) {
    // Pre create table for upcoming months

    var calNovember = "<table class=\"curr\"><tbody>" +
                "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>" +
               "<tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>" +
               "<tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr>" +
               "<tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr>" +
               "<td>27</td><td>28</td><td>29</td><td>30</td></tbody></table>"

    var calDecember = "<table class=\"curr\"><tbody><tr><td class=\"nil\"><td class=\"nil\"></td><td class=\"nil\">" +
               "</td><td class=\"nil\"></td><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td><td>7</td>" +
               "<td>8</td><td>9</td><td>10</td></tr><tr><td>11</td><td>12</td><td>13</td><td>14</td>" +
               "<td>15</td><td>16</td><td>17</td></tr><tr><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>" +
               "<td>24</td></tr><tr><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td></tr></tbody></table>"

    var calJanuari = "<table class=\"curr\"><tbody>" +
                "<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>" +
               "<tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr>" +
               "<tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr>" +
               "<tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr>" +
               "<tr><td>29</td><td>30</td><td>31</td></tr></tbody></table>"

    var calFebruari = "<table class=\"curr\"><tbody>" +
                "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td><td>2</td><td>3</td><td>4</td></tr>" +
               "<tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>" +
               "<tr><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr>" +
               "<tr><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td></tr>" +
               "<tr><td>26</td><td>27</td><td>28</td></tr></tbody></table>"

    var calMars = "<table class=\"curr\"><tbody>" +
               "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td><td>2</td><td>3</td><td>4</td></tr>" +
               "<tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>" +
               "<tr><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr>" +
               "<tr><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td></tr>" +
               "<tr><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td></tr></tbody></table>"

    var calApril = "<table class=\"curr\"><tbody>" +
               "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td></tr>" +
               "<tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>" +
               "<tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>" +
               "<tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr>" +
               "<tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr>" +
               "<tr><td>30</td></tr></tbody></table>"

    var calMaj = "<table class=\"curr\"><tbody>" +
               "<t<tr><td class=\"nil\"></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>" +
               "<tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>" +
               "<tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>" +
               "<tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>" +
               "<tr><td>28</td><td>29</td><td>30</td><td>31</td></tr></tbody></table>"

    var calJuni = "<table class=\"curr\"><tbody>" +
               "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td><td>2</td><td>3</td></tr>" +
               "<tr><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>" +
               "<tr><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td></tr>" +
               "<tr><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td></tr>" +
               "<tr><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr></tbody></table>"

    var calJuli = "<table class=\"curr\"><tbody>" +
               "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td></tr>" +
               "<tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>" +
               "<tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>" +
               "<tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr>" +
               "<tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr>" +
               "<tr><td>30</td><td>31</td></tr></tbody></table>"

    var calAugusti = "<table class=\"curr\"><tbody>" +
               "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>" +
               "<tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>" +
               "<tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr>" +
               "<tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr>" +
               "<tr><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td></tr></tbody></table>"

    var calSeptember = "<table class=\"curr\"><tbody>" +
               "<tr><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td class=\"nil\"></td><td>1</td><td>2</td></tr>" +
               "<tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td</tr>" +
               "<tr>><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr>" +
               "<tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr>" +
               "<tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>" +
               "</tbody></table>"

    if (currentMonth == 10) {                                                                                           // Based on month chosen, insert correct table for month
        document.getElementById("cal-frame").innerHTML = calNovember;
    }

    else if (currentMonth == 11) {
        document.getElementById("cal-frame").innerHTML = calDecember;
    }
    else if (currentMonth == 0) {
        document.getElementById("cal-frame").innerHTML = calJanuari;
    }
    else if (currentMonth == 1) {
        document.getElementById("cal-frame").innerHTML = calFebruari;
    }
    else if (currentMonth == 2) {
        document.getElementById("cal-frame").innerHTML = calMars;
    }
    else if (currentMonth == 3) {
        document.getElementById("cal-frame").innerHTML = calApril;
    }
    else if (currentMonth == 4) {
        document.getElementById("cal-frame").innerHTML = calMaj;
    }
    else if (currentMonth == 5) {
        document.getElementById("cal-frame").innerHTML = calJuni;
    }

    else if (currentMonth == 6) {
        document.getElementById("cal-frame").innerHTML = calJuli;
    }

    else if (currentMonth == 7) {
        document.getElementById("cal-frame").innerHTML = calAugusti;
    }

    else if (currentMonth == 8) {
        document.getElementById("cal-frame").innerHTML = calSeptember;
    }


    var cells = document.getElementsByTagName('td');                                                    // Add event listener after table has been updated
    for (var i = 0; i < cells.length; i++) {        
            cells[i].addEventListener('click', clickHandler);
        
    }

    
    
}

/* When clicking date in calendar */
function clickHandler() {
    resetCells();                                                                                                                               // reset all cells when new cell is chosen                                                                                  
    var newDatum = new Date();
    currentDay = newDatum.getDate();
    chosenMonth = newDatum.getMonth();                                                                                                          // Retrieve actual date and month

    var datum = document.getElementById("datum");
    var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];        // Array for months
    var dagar = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];                                                  // Array for weekdays

    var currString = String(year) + "-" + String(currentMonth+1) + "-" + String(this.textContent);                                                  // Create string to use for date object
    var d = new Date(currString);                                                                                                                   // Retrieve date info based on chosen day+year+month
    var dayName = dagar[d.getDay()];                                                                                                                // now get weekday based on selection, convert to array position
                                                                                                                                                    // and then retrieve day name from array
    if (this.textContent < currentDay && chosenMonth == currentMonth) {
        window.alert("Datum har redan varit")
    } else {
        datum.value = this.textContent + " " + months[currentMonth] + " " + year + " " + dayName;                                                   // Put info in form

        this.style.background = 'orange';                                                                                                           // Change style of td to indicate booking
        this.style.boxShadow = '1px 1px 0px #fff inset';
    }
    
}

function resetCells() {
    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.background = '';

    }
}

/* Form validation to validate correct user input before form is processed */
function validateForm() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var fname = document.forms["bokning"]["fname"].value;                                                                          // Retrieve form and element for firstname
    if (fname == null || fname == "") {                                                                                            // Check that input is entered into the field
        document.getElementById('errorMsg1').innerHTML = "<p class=\"errorFont\">Förnamn måste fyllas i</p>";                      // Display errormessage in span under input
        document.getElementById("name1").focus();
        document.getElementById('name1').style.webkitAnimationName = 'flash';
        document.getElementById('name1').style.webkitAnimationDuration = '1s';
        return false;
    }

    var lname = document.forms["bokning"]["lname"].value;
    if (lname == null || lname == "") {
        document.getElementById('errorMsg2').innerHTML = "<p class=\"errorFont\">Efternamn måste fyllas i</p>";
        document.getElementById("name2").focus();
        document.getElementById('name2').style.webkitAnimationName = 'flash';
        document.getElementById('name2').style.webkitAnimationDuration = '1s';
        return false;
    }

    var phone = document.forms["bokning"]["phone"].value;
    if (phone == null || phone == "") {
        document.getElementById('errorMsg3').innerHTML = "<p class=\"errorFont\">Telefon måste fyllas i</p>";
        document.getElementById("phone").focus();
        document.getElementById('phone').style.webkitAnimationName = 'flash';
        document.getElementById('phone').style.webkitAnimationDuration = '1s';
        return false;
    }    

    var dagen = document.forms["bokning"]["datum"].value;
    if (dagen == null || dagen == "") {
        document.getElementById("datum").focus();
        document.getElementById('datum').style.webkitAnimationName = 'flash';
        document.getElementById('datum').style.webkitAnimationDuration = '1s';
        return false;
    }

    var epost = document.forms["bokning"]["epost"].value;
    if (!mailformat.test(epost)) {                                                                                               // Call function to check regular expression
        document.getElementById('errorMsg4').innerHTML = "<p class=\"errorFont\">Invalid email!</p>";
        document.getElementById("epost").focus();
        document.getElementById('epost').style.webkitAnimationName = 'flash';
        document.getElementById('epost').style.webkitAnimationDuration = '1s';
        return false;
    }
    else {
        return true;
    }

}
/* Called when button pressed */
function confirmBook() {
    if (validateForm() != false) {
        window.alert("Bokning skickas till Kostrådgivare!");
    }
}

function clearForm() {
    resetCells();
    document.getElementById("bookForm").reset();
    document.getElementById('errorMsg1').innerHTML = "";
    document.getElementById('errorMsg2').innerHTML = "";
    document.getElementById('errorMsg3').innerHTML = "";
    document.getElementById('errorMsg4').innerHTML = "";
    
}

/* Enables storage functions for data */
function sendSubmit() {
    var saveButton = document.getElementById("saveButton");                           // Retrieve id for save button and add event listener
    saveButton.addEventListener("click", confirmBook, false);                         // call function confirmBook on click
    var clearButton = document.getElementById("clearButton");                         // Retrieve id for clear button and add event listener
    clearButton.addEventListener("click", clearForm, false);                   // call function clearAllSearches on click
    
} 




window.addEventListener("load", slideStart, false);// Your code here!
window.addEventListener("load", start, false);// Your code here!
