const app = angular.module('MovieApp', []);




app.controller('AddMoviesController', function($scope, MovieCatModel){
  $scope.movieName = '';
  $scope.movieDate = '';
  $scope.movieGenre = '';
  $scope.eachModel = '';
  $scope.movies = MovieCatModel.getMovies();

  $scope.addMovie = function () {

    MovieCatModel.addMovie({
      name: $scope.movieName,
      date: $scope.movieDate,
      genre: $scope.movieGenre,
      isGood: false
    });
    $scope.movieName = '';
    $scope.movieDate = '';
    $scope.movieGenre = '';

    };

    $scope.goodMovie = function (object) {
      MovieCatModel.goodMovie(object);
      console.log(object.name);
    };

    $scope.badMovie = function (object) {
      MovieCatModel.badMovie(object)
      console.log(object.name);
    };

});

app.factory('MovieCatModel', function() {
  let movies = [];
  let goodmovies = [];
  let badmovies = [];

  return {
    addMovie: function (entry) {
      movies.push(entry);
      console.log(entry.name);
    },

    goodMovie: function (entry) {
      entry.isGood = true;
      goodmovies.push(entry);
      console.log("Good movies: " + entry.name);
    },

    badMovie: function (entry) {
      entry.isGood = false;
      badmovies.push(entry);
      console.log("Awful movies: " + entry.name);
    },

    getMovies: function (entry) {
      return movies;
    }
  }
})
