var allnames = [];
var allsum = [];
var everyone = [];
var Person = function(name) {
  this.name = name
  this.sum = 0;
  this.items = [];
  this.prices = [];
}
function reset() {
  allnames = [];
  allsum = [];
  everyone = [];
  document.getElementById("nameslist").innerHTML = "No results";
}
function checkNames(names) {
  var front = names.charAt(0);
  var back = names.charAt(names.length - 1);
  if (front == ',' || back == ',') {
    return false;
  }
  return true;
}
function saveNames() {
  var names = document.getElementById("namesinput").value;
  if (!checkNames(names)) {
    alert ("Please enter names in the correct format");
    document.getElementById("namesinput").value = "";
    return;
  }
  var itemname = document.getElementById("iteminput").value;
  var namesarr = names.split(",");
  var indisum = Math.round(Number(document.getElementById("suminput").value)/namesarr.length *100)/100;
  for(i=0; i < namesarr.length;i++){
    var curName = namesarr[i].trim();
    var found = allnames.indexOf(curName);
    if (found != -1) {
      allsum[found] = Math.round(Number((allsum[found]) + Number(indisum))*100)/100;
      everyone[found].sum += Math.round(Number(indisum)*100)/100;
      everyone[found].items.push(itemname);
      everyone[found].prices.push(indisum);
    }
    else {
      allnames.push(curName);
      allsum.push(Number(indisum));
      var newguy = new Person(curName);
      newguy.items.push(itemname);
      newguy.prices.push(indisum);
      newguy.sum += indisum;
      everyone.push(newguy);
    }
  }
  var everything = "";
  everything += "<table>";

  everything += "<tr>";
  everything += "<th>Name</th>";
  everything += "<th>Amount</th>";
  everything += "<th>Total</th>";
  everything += "</tr>";

  // loop every person
  for(i = 0; i < allnames.length; i++) {
    // get the total number of items this guy has
    var l = everyone[i].items.length;

    // loop each item
    for (j = 0; j < l; j++) {
      everything += "<tr>";

      // rowspan and name only for first row
      if (j == 0) {
        everything += "<td rowspan=\"" + l + "\">";
        everything += allnames[i];
        everything += "</td>";
      }
      
      everything += "<td> $"
      everything += everyone[i].prices[j];
      everything += " (" + everyone[i].items[j] + ")";
      everything += "</td>"

      // rowspan and sum only for first row
      if (j == 0) {
        everything += "<td rowspan=\"" + l + "\"> $";
        everything += allsum[i];
        everything += "</td>";
      }
      everything += "</tr>";
    }
  }
  document.getElementById("namesinput").value = "";
  document.getElementById("suminput").value = "";
  document.getElementById("iteminput").value = "";
  document.getElementById("nameslist").innerHTML = everything;
}