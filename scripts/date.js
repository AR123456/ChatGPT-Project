//code to fix date 
//variable to makeDate 
var makeDate = function (){
    var d = new Date();
    //this variagle holds the formatted date empty string 
    var formattedDate = "";
// adding month,data and year to the string,the getMonth,getDate and fetFullYear are all built in JS functions 
//Jaunary starts at zero so add one to get a human date 
    formattedDate += (d.getMonth()+1) + "_";

    formattedDate += d.getDate() + "_";

    formattedDate += d.getFullYear();

    return formattedDate;

};
//exporting the makeDate variable  for use later 
module.exports = makeDate;
