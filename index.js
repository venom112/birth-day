var c=confirm("Do you want to know your birth day?");
var p;
var a;
 if (c==true)
 {
     var day1=["Sun", "Mon", "Tues", "Wednes", "Thurs", ,"Fri", "Satur"];
    p=prompt("Enter your birthdate in(YYYY-MM-DD) format");
    var d= new Date(p);
    a=d.getDay();
    swal.fire("You had born on "+day1[a]+"day");
 }
else
{
    swal.fire("Canceled");
}
