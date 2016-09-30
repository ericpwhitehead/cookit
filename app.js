$(function(){
  $('.search').delegate('.submit', 'click', function(event) {
    event.preventDefault();
    $('.youtube-results').empty();
    $('.recipe-results').empty();
    var videoSearch = $(".ingredient").val()+"cooking tutorial";
    var recipeSearch = $(".ingredient").val();
    var youtubeParams = {
    part: 'snippet',
    key: 'AIzaSyDG27eYT7rMfcDJpDCgxELZY3DNI02F0P0',
    q: videoSearch,
    r: 'json',
    type: 'video',
    maxResults: '10'
  };
  $.getJSON('https://www.googleapis.com/youtube/v3/search', youtubeParams, function(data){
    $.each(data.items, function() {
      var videotitle = this.snippet.title;
      var videoid = this.id.videoId;
      var thumbnail = this.snippet.thumbnails.medium.url;
        $('.youtube-results').append("<a target='_blank' href='https://www.youtube.com/watch?v="+videoid+"'><h2>"+videotitle+"</h2><img src='"+thumbnail+"'></a>")
      });

    });
  $.getJSON('https://api.yummly.com/v1/api/recipes?_app_id=5241297e&_app_key=a811f76dde33d08303b90321171edcc5&q='+recipeSearch+'&maxResult=20&start=20'+'&requirePictures=true', function(data){
    $.each(data.matches, function() {
      var thisId = this.id;
      console.log(this);
      var recipeName = this.recipeName;
      var recipeImage = this.smallImageUrls;
        $('.recipe-results').append("<div class='yummlyWrapper'><a href='http://www.yummly.com/recipe/"+thisId+"'><img style='width:150px;float:left;' src='"+recipeImage+"'><h2>"+recipeName+"</h2></a></div>")
      });
    });
  });
});

