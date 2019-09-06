//Author Glen Joy (www.glenjoy.com)
//Mar Thoma Church of Greater Washington
//Use example: marthomawashington.com

var today = new Date(); //today's date
var comingSunday = new Date();
var firstSunday = new Date(); //date of first sunday
var secondSunday = new Date();
var thirdSunday = new Date();
var fourthSunday = new Date();
var str = "";
firstSunday.setDate(1);
while(firstSunday.getDay() != 0){
firstSunday.setDate(firstSunday.getDate()+1);
console.log("TEST" + firstSunday.getDate());
}
secondSunday.setDate(firstSunday.getDate() + 7);
thirdSunday.setDate(firstSunday.getDate() + 14);
fourthSunday.setDate(firstSunday.getDate() + 21);
for (i = 1; i <= 6; i++) {
  if (today.getDay() == i) {
    comingSunday.setDate(today.getDate() + (7 - i));
  }
}
str =
  comingSunday.getMonth() +
  1 +
  "/" +
  comingSunday.getDate() +
  "/" +
  comingSunday.getFullYear();

console.log(firstSunday.getDate());
console.log(secondSunday.getDate());
console.log(thirdSunday.getDate());
console.log(fourthSunday.getDate());
var writeEnglish = function() {
  document.write('<font face = "Josefin Sans">');
  document.write('<p style="text-align:center">');
  document.write(str.bold()); //was str.bold()
  document.write("</p>");
  document.write('<p style="text-align:center">');
  document.write("ENGLISH SERVICE".fontsize(5));
  document.write("</p>");
  document.write('<p style="text-align:center">');
  document.write("10:15AM".bold());
  document.write("</p>");
};
var writeMalayalam = function() {
  document.write('<font face = "Josefin Sans">');
  document.write('<p style="text-align:center">');
  document.write(str.bold());
  document.write("</p>");
  document.write('<p style="text-align:center">');
  document.write("MALAYALAM SERVICE".fontsize(5));
  document.write("</p>");
  document.write('<p style="text-align:center">');
  document.write("10:15AM".bold());
  document.write("</p>");
};
if (today.getDate() <= firstSunday.getDate()) {
  writeEnglish();
} else if (
  today.getDate() > firstSunday.getDate() &&
  today.getDate() <= secondSunday.getDate()
) {
  writeMalayalam();
} else if (
  today.getDate() > secondSunday.getDate() &&
  today.getDate() <= thirdSunday.getDate()
) {
  writeEnglish();
} else if (today.getDate() > thirdSunday.getDate() &&
  today.getDate() <= fourthSunday.getDate()) {
  writeMalayalam();
} else {
  writeEnglish();
}
