$(function () {
  $("#main_content").load("./content/experience.html");
});

$(document).ready(function () {
  $("#Home").click(function () {
    $("#main_content").load("./content/home.html");
    $("#Contact").attr("class", "nav-link hover");
    $("#Experience").attr("class", "nav-link hover");
    $("#Home").attr("class", "nav-link hover select");
  });
  $("#Experience").click(function () {
    $("#main_content").load("./content/experience.html");
    $("#Contact").attr("class", "nav-link hover");
    $("#Experience").attr("class", "nav-link hover select");
    $("#Home").attr("class", "nav-link hover");
  });
  $("#Contact").click(function () {
    $("#main_content").load("./content/contact.html");
    $("#Contact").attr("class", "nav-link hover select");
    $("#Experience").attr("class", "nav-link hover");
    $("#Home").attr("class", "nav-link hover");
  });
});
