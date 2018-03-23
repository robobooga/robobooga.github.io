var classNameList = [];
var hitDieList = [];
var skillsList = [];
var proficienciesList = [];
var savingThrowsList = [];
var subclassList = [];

// BASE API URL
var base = "http://www.dnd5eapi.co/api/";

function loadHitDie(id) {
  var editedId = Number(id) +1;
  $.ajax({
    url: base + "classes/" + editedId
  }).then(function(data) {
    if (data != null) {
      document.getElementById("hitdie-" + id).innerHTML = data.hit_die;
      hitDieList.push(data.hit_die);
    }
      
  });
}

function loadSkills(id) {
  $.ajax({
    url: base + "classes/" + id
  }).then(function(data) {
    if (data != null)
      var skills = data.proficiency_choices;

      for (i in skills) {
        skillsList.push(skills[i].from);
      }
  });
}

function loadProficiencies(id) {
  $.ajax({
    url: base + "classes/" + id
  }).then(function(data) {
    if (data != null)
      proficienciesList.push(data.proficiencies);
  });
}

function loadSavingThrows(id) {
  $.ajax({
    url: base + "classes/" + id
  }).then(function(data) {
    if (data != null)
      savingThrowsList.push(data.saving_throws);
  });
}

function loadSubClass(id) {
  $.ajax({
    url: base + "classes/" + id
  }).then(function(data) {
    if (data != null)
      subclassList.push(data.subclasses);
  });
}

$(".Barbarian").click(function() {
  $(".Barbarian .flipper").toggleClass("flip");
});

$(".Wizard").click(function() {
  $(".Wizard .flipper").toggleClass("flip");
});

$(document).ready(function() {   
  $.ajax({
    url: base + "classes/",
    success: function(data) {

      for (i in data.results) {
        classNameList.push(data.results[i].name);
      }

      $('.class-total').append(data.count);

      for (i in classNameList) {
        
        loadHitDie(i);
        loadSkills(i);
        // alert(hitDieList[i]);
        for (j in skillsList) {
          
        }

        var currentName = classNameList[i];

        var front = "<li class='flip-container " + currentName + "'><article class='flipper'><div class='front card'><img src='assets/images/" + currentName + "-smol.png'><h2>" + currentName + "</h2></div>";
        var back = "<div class='back card'><ul><li><strong>Hit Die:</strong> <span id='hitdie-" + i + "'></span></li><li>" + skillsList[i] + "</ul></div></article></li>";
        var card = front + back;
        $(".content .tile-4").append(card);
      }
      
    }
  });
});

