<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="just testing out vue js">
    <meta name="keywords" content="vue js">
    <link rel="author" content="Thomas Miller" />
    <title>Riot-Champion.gg API</title>
    <link href="https://fonts.googleapis.com/css?family=Arsenal" rel="stylesheet">
    <link rel="stylesheet" href="assets/min/style.css">
  </head>
  <body class="loading">
    <img src="assets/images/League_of_legends_logo_transparent.png" class="logo" alt="">
    <div id="app-summoner-info">
      <input id="summoner-input" type="text" placeholder="Summoner Name">
      <button id="get-summoner">Get Summoner infos</button>
    </div>
    <div id="app2">
      <button id="getchampions">Get Champions info</button>
      <div class="winrate-wrapper">
        <div id="winrate"></div>
      </div>
      <div class="title-wrapper"></div>
      <div class="wrapper"></div>
    </div>
    <div class="separator"></div>
    <div id="app">
      <h1>This is static data, with Vue computed search filter</h1>
      <div class="search-wrapper">
        <input type="text" v-model="keyword" placeholder="Search..">
        <label>Search:</label>
      </div>
      <div class="wrapper">
        <div class="card" v-for="post in filteredList">
          <a href="javascript:void(0);" target="blank">
            <img v-bind:src="post.img" alt="">
            {{post.title}}
          </a>
        </div>
      </div>
    </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TweenMax.min.js"></script>
  <script src="_build/bundle.js"></script>
  </body>
</html>