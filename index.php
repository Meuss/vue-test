<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="just testing out vue js">
    <meta name="keywords" content="vue js">
    <link rel="author" content="Thomas Miller" />
    <title>Testing Vue.js</title>
    <link href="https://fonts.googleapis.com/css?family=Arsenal" rel="stylesheet">
    <link rel="stylesheet" href="assets/min/style.css">
    <img src="assets/League_of_legends_logo_transparent.png" class="logo" alt="">
    <div id="app">
      <button id="getchamps">Get champ data from Riot Api</button>
      <div id="response"></div>
      <hr>
      <h1>This is static data, with vue</h1>
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
  </head>
  <body>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.9/vue.min.js"></script>
  <script src="assets/min/script.js"></script>
  </body>
</html>