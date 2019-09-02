var today = new Date();
var comingSunday = new Date();

var str = "";

comingSunday.setMonth(today.getMonth()+1);
comingSunday.setYear(today.getFullYear());

for (i = 1; i <= 6; i++) {
  if (today.getDay() == i) {
    comingSunday.setDate(today.getDate() + (7-i));
  }
}

str = comingSunday.getMonth() + "/" + comingSunday.getDate() + "/" + comingSunday.getFullYear();

if(comingSunday.getDate() == 19 || comingSunday.getDate() == 2 || comingSunday.getDate() == 16 ||
comingSunday.getDate() == 30|| comingSunday.getDate() == 4) {
    document.write("<font face = \"Josefin Sans\">");
    document.write("<p style=\"text-align:center\">");
    document.write(str.bold());
    document.write("</p>");
    document.write("<p style=\"text-align:center\">");
    document.write("ENGLISH SERVICE".fontsize(5));
    document.write("</p>");
    document.write("<p style=\"text-align:center\">");
    document.write("10:15AM".bold());
    document.write("</p>");
} else {
  document.write("<font face = \"Josefin Sans\">");
  document.write("<p style=\"text-align:center\">");
  document.write(str.bold());
  document.write("</p>");
  document.write("<p style=\"text-align:center\">");
  document.write("MALAYALAM SERVICE".fontsize(5));
  document.write("</p>");
  document.write("<p style=\"text-align:center\">");
  document.write("10:15AM".bold());
  document.write("</p>");
}
