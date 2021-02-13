$(document).ready(function () {
  $.getJSON("assets/data/skill_data.json", function (data) {
    var skill_array = data.skill_array;
    skill_array.sort(function (a, b) {
      let x = a.toLowerCase(),
        y = b.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    });
    for (var i = 0; i < skill_array.length; i++) {
      var li = $("<li>").text(skill_array[i]);
      if (i < skill_array.length / 2) {
        $("#skill_list").append(li);
      } else {
        $("#skill_list_2").append(li);
      }
    }
  });

  $.getJSON("assets/data/experience_list_data.json", function (data) {
    for (var i = 0; i < data.experience_list.length; i++) {
      generate_experience_list(data.experience_list[i]);
    }
  });

  function generate_experience_list({ title, description, date, skill }) {
    var row = $("<div>").attr("class", "row");
    var col1 = $("<div>").attr("class", "col-6");
    var col2 = $("<div>").attr("class", "col-6");

    var new_title = $("<h4>");
    var strong = $("<strong>").text(title);
    col1.append(new_title);
    var new_date = $("<p>").text(date);
    new_date.attr("class", "experience_date");
    col2.append(new_date);

    if (Array.isArray(description)) {
      var new_description = $("<div>");
      for (var i = 0; i < description.length; i++) {
        var description_text = $("<p>").text(description[i]);
        new_description.append(description_text);
      }
    } else {
      var new_description = $("<p>").text(description);
    }

    var skill_div = $("<div>");
    var skill_title = $("<h5>").text("Software use on project:");
    var new_skill = $("<ul>");
    for (var i = 0; i < skill.length; i++) {
      var skill_text = $("<li>").text(skill[i]);
      new_skill.append(skill_text);
    }

    new_title.append(strong);

    skill_div.append(skill_title, new_skill);

    row.append(col1, col2);

    $("#experience_data").append(row, new_description, skill_div);
  }

  $.getJSON("assets/data/project_data.json", function (data) {
    for (var i = 0; i < data.project.length; i++) {
      render_project(data.project[i]);
    }
  });

  function render_project({ title, git_link, site_link, description }) {
    var render_title = $("<h4>").text(title);
    var render_description = $("<p>").text(description);
    var render_git_link = $("<a>").attr("href", git_link);
    render_git_link.attr("target", "blank_");
    var strong_git_link = $("<strong>").text(git_link);

    var render_site_link = $("<a>").attr("href", site_link);
    render_site_link.attr("target", "blank_");
    var strong_site_link = $("<strong>").text(site_link);

    render_git_link.append(strong_git_link);
    render_site_link.append(strong_site_link);
    $("#project_data").append(
      render_title,
      render_description,
      render_git_link,
      render_site_link
    );
  }
});
