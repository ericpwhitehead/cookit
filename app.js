$(function(){
  $('.search').delegate('.submit', 'click', function(event) {
    event.preventDefault();
    $('.youtube-results').empty();
    var videoSearch = $(".ingredient").val()+"cooking tutorial";
    var recipeSearch = $(".ingredient").val();
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
      })
    })
      var recipeParams = {
        key: '1b53c459eec51614b61c6286899fd045',
        q: recipeSearch,
        sort: 'r',
        page: 1,
        count: 6,
        recipes: 'title'
      };
    $.getJSON('http://food2fork.com/api/search', recipeParams, function(data){
      $('.recipe-results').empty();
      $.each(data.recipes, function(){
        var recipeTitle = this.title;
        var recipeImage = this.image_url;
        var recipeRank = this.social_rank;
        var f2fRecipeView = this.f2f_url;
        var recipeURL = this.source_url;
        $('.recipe-results').append("<a href='"+recipeURL+"'><h2>"+recipeTitle+"</h2><img class='foodpic' src='"+recipeImage+"'></a>")
      })
      $('.recipe-results').append("<button class='next'>next</button>")
    })
    var omitIngredient = $('.omit-ingredient').val()
    var appID = '5241297e'
    var appKey = 'a811f76dde33d08303b90321171edcc5'
    $.ajax({
      url: 'https://api.yummly.com/v1/recipes?_app_id='+appID+'&_app_key='+appKey,
      dataType: 'json',
      data: {
        q:recipeSearch
      },
    })
  });
});
    /*$('.recipe-results').delegate('.next', 'click', function(event) {
      var page:;
    });*/
