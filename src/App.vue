<template>
  <div id="app">
      <Welcome />
      <Cocktails />
  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Cocktails from './components/Cocktails';

export default {
    name: 'app',
    components: {
        Welcome,
        Cocktails,
    },
}
           
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@600&display=swap');
    #app, html, body, root {
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Karla', sans-serif;
        background-image: linear-gradient(to bottom, rgba(223, 216, 216, 0.6) 0%,rgba(236, 226, 226, 0.6) 100%), url('./components/Images/bar.jpeg');
        background-position: bottom left;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .viewCocktail-btn {
      margin: auto auto 5px auto;
      font-size: 18px;
      background-color: rgba(0, 0, 0, 0.267);
      border: ridge 2px rgba(0, 0, 0, 0.301);
      color: rgba(255, 255, 255, 0.671);
      border-radius: 3px;
    }

    .viewCocktail-btn:hover {
        background-color: rgba(0, 0, 0, 0.082);
        cursor: pointer;
        outline: none;
    }

    .viewCocktail-btn:focus {
        outline: none;
    }
</style>