<template>
  <div class="welcome">
      <div id="cocktailBarText">Cocktail Bar🍸</div>
  </div>
</template>

<script>

export default {
  name: "Welcome",
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
  .welcome {
      display: flex;
  }

  #cocktailBarText {
      color: rgba(0, 0, 0, 0.568);
      text-shadow: 2px 2px 2px white;
      font-family: 'Luckiest Guy', cursive;
      font-size: 3em;
      padding: 0.5em;
      margin: auto;
  }

/* media queries */

  @media only screen and (max-width: 425px){
    #cocktailBarText {
      font-size: 2em;
    }
  }
</style>