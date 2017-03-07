$.ajax({
    url: "https://api.github.com/users/wearenolte/repos",
    context: document.body
}).done(function(data) {
  for (var i = 0; i < data.length; i++) {
         $('#repos').append(
    '<a href="' + data[i].html_url + '">'
    + '<li class="project_card" style="background:url(\''
    + 'images/repos/' + data[i].name + '/repo_image.png'
    + '\') #373E4A;"><div class="hover">'
    + '<span class="card_title">' + data[i].name.substring(0,30) + '</span>'
    + '<span class="card_text">' + data[i].description.substring(0,30) + '<span>'
    + '<div class="details">'
    + '<div class="detail"><img src="images/fork.svg" alt="">'
    + '<div class="number">'
    + data[i].forks_count
    + '</div>'
    +'</div>'
    + '<div class="detail"><img src="images/star.svg" alt="">'
    + '<div class="number">'
    + data[i].stargazers_count
    + '</div>'
    +'</div>'
    +'</div>'
    + '</div></li></a>')
  }
})
$("span.card_text").text(function(index, currentText) {
return currentText.substr(0, 10);
});
