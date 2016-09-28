$(function(){
  $('.search').delegate('.submit', 'click', function(event) {
    console.log("click")
    event.preventDefault();
    $('.youtube-results').empty();
    var videoSearch = $(".ingredient").val()+"cooking tutorial";
  var youtubeParams = {
    part: 'snippet',
    key: 'AIzaSyDG27eYT7rMfcDJpDCgxELZY3DNI02F0P0',
    q: videoSearch,
    r: 'json',
    type: 'video'
  };
  $.getJSON('https://www.googleapis.com/youtube/v3/search', youtubeParams, function(data){
    //showResults(videos.list);
    $.each(data.items, function() {
      var videotitle = this.snippet.title;
      var videoid = this.id.videoId;
      var thumbnail = this.snippet.thumbnails.medium.url;
        $('.youtube-results').append("<a href='https://www.youtube.com/watch?v="+videoid+"'><h2>"+videotitle+"</h2><img src='"+thumbnail+"'></a>")
      var recipeSearch = $(".ingredient").val();
      var recipeParams = {
        key: '1b53c459eec51614b61c6286899fd045',
        q: recipeSearch,
        sort: 'r',
        page: 1,
        recipes: 'title'
      };
    $.getJSON('http://food2fork.com/api/search', recipeParams, function(data){
      $.each(data.recipes, function(){
        console.log(this);
      })

    })
    })
  });
});
});
