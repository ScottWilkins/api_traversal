$(document).ready(function(){
  $('button').on('click',function(){
  var title = $('input').val();
  $.get("http://www.omdbapi.com/?s="+title, function(data){
console.log(data.Search);
    data.Search.forEach(item => {
      var image = item.Poster;
      var title = item.Title;
      var noImage = './mockups/images/no_image.png'
      // $('#center_column').html("")

      image === "N/A" ? $('#center_column').append(`<h5>${title}</h5>`).append(`<div class="movie_poster" style="background-image: url(${noImage})"></div>`) :
      $('#center_column').append(`<h5>${title}</h5>`).append(`<div class="movie_poster" style="background-image: url(${image})"></div>`)
    })


    })

  })
})
