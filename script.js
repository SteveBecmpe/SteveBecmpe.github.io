$(document).ready(function () {//START JS Script after document load and ready----START 


    setInterval(function () {//test loop setinterval, updates the title 
        // CurDate = moment().format('dddd, MMMM Do');
        let CurDate = moment().format('dddd, MMMM, Do, hh:mm:ss a');
        $("#currentDay").text(CurDate);
    }, 500);




});//END JS Script after document load and ready----------------------------------END 
