(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
