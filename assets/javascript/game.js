//GLOBAL VARIABLES
//=================================================================================================
var wins = 0; // numbers of wins
var losses = 0; // numbers of losses
var currentScore = 0; // player's current score
var targetScore = 0; // target score
var diamondVal = 0; // value of diamond
var pinkGemVal = 0; // value of pink gem
var rubyGemVal = 0; // value of ruby gem
var whiteGemVal = 0; // value of white gem


$(document).ready(function(){
  var currentScore = 0;
  var targetScore = Math.floor(Math.random()*101 + 19);
  var diamondVal = Math.floor(Math.random()*12 + 1);
  var pinkGemVal = Math.floor(Math.random()*12 + 1);
  var rubyGemVal = Math.floor(Math.random()*12 + 1);
  var whiteGemVal = Math.floor(Math.random()*12 + 1);
  $('#targetScore').html(targetScore);
  $('#diamond').attr("data-num", diamondVal);
  $('#pink-gem').attr("data-num", pinkGemVal);
  $('#ruby').attr("data-num", rubyGemVal);
  $('#white-gem').attr("data-num", whiteGemVal);
});

