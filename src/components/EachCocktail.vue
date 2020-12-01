<template>
    <!-- container for eachindividual cocktail -->
    <div id="cocktail-container">
        <!-- initial rendereng of cocktails list -->
        <div v-if="!isViewing" class="each-cocktail">
            <div class="title">{{cocktail.strDrink}}</div>
            <img class="img-cocktail" :src="`${cocktail.strDrinkThumb}`">
            <div class="ingredients-container">
                <!-- rendering only ingredients which have a value -->
                <div v-if="cocktail.strIngredient1 !== null">{{cocktail.strIngredient1}}</div>
                <div v-if="cocktail.strIngredient2 !== null">{{cocktail.strIngredient2}}</div>
                <div v-if="cocktail.strIngredient3 !== null">{{cocktail.strIngredient3}}</div>
                <div v-if="cocktail.strIngredient4 !== null">{{cocktail.strIngredient4}}</div>
                <div v-if="cocktail.strIngredient5 !== null">{{cocktail.strIngredient5}}</div>
                <div v-if="cocktail.strIngredient6 !== null">{{cocktail.strIngredient6}}</div>
                <div v-if="cocktail.strIngredient7 !== null">{{cocktail.strIngredient7}}</div>
                <div v-if="cocktail.strIngredient8 !== null">{{cocktail.strIngredient8}}</div>
            </div>
            <button id="recipe-btn" class="viewCocktail-btn" @click="toggleViewing">View recipe</button>
        </div>

        <div v-else class="each-cocktail" id="recipe-container">
            <!-- rendered when 'view recipe button' is clicked  -->
            <div class="title">{{cocktail.strDrink}}</div>
            <div class="ingredients-container">
                <h1 id="ingredients-header">Ingredients:</h1>
                <div v-if="cocktail.strIngredient1 !== null">{{cocktail.strIngredient1}}</div>
                <div v-if="cocktail.strIngredient2 !== null">{{cocktail.strIngredient2}}</div>
                <div v-if="cocktail.strIngredient3 !== null">{{cocktail.strIngredient3}}</div>
                <div v-if="cocktail.strIngredient4 !== null">{{cocktail.strIngredient4}}</div>
                <div v-if="cocktail.strIngredient5 !== null">{{cocktail.strIngredient5}}</div>
                <div v-if="cocktail.strIngredient6 !== null">{{cocktail.strIngredient6}}</div>
                <div v-if="cocktail.strIngredient7 !== null">{{cocktail.strIngredient7}}</div>
                <div v-if="cocktail.strIngredient8 !== null">{{cocktail.strIngredient8}}</div>
            </div>
            <div id="instructions-container">
                {{cocktail.strInstructions}}
            </div>
            <!-- the button lets you get back to the front of the cocktail card  -->
            <button id="back-btn" class="viewCocktail-btn" @click="toggleViewing">back</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EachCocktail",
    props: ["cocktail"],
    data() {
        return {
            isViewing: false,
        }
    },
    methods: {
        toggleViewing() {
            this.isViewing = !this.isViewing;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

    .each-cocktail {
    display: flex;
    overflow: scroll;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 16em;
    height: 19.5em;
    margin: 1em;
    background-color: rgba(233, 222, 222, 0.13);
    border: ridge 5px rgba(255, 255, 255, 0.514);
    border-radius: 10px;
    padding: 0.5em;
  }

  .each-cocktail > * {
      margin-top: 10px;
  }

  .img-cocktail {
      width: 130px;
      height: 130px;
  }

  .title {
    font-family: 'Luckiest Guy', cursive;
    font-size: 2em;
    color: rgba(0, 0, 0, 0.568);
    text-shadow: 2px 2px 2px white;
  }

  #recipe-container {
      overflow: scroll;
  }

    #recipe-container {
  scrollbar-width: thin;
  scrollbar-color: rgba(170, 166, 166, 0.301) rgba(10, 22, 22, 0.705);
  }


 /* Works on Chrome/Edge/Safari */

    #recipe-container::-webkit-scrollbar {
    width: 12px;
  }
  #recipe-container::-webkit-scrollbar-track {
    background:rgba(170, 166, 166, 0.301);
  }
  #recipe-container::-webkit-scrollbar-thumb {
    background-color:rgba(10, 22, 22, 0.705);
    border-radius: 20px;
    border: 3px solid rgba(170, 166, 166, 0.301);
  }

  #back-btn {
      margin: auto auto 0px auto;
  }

  #recipe-btn {
      margin: auto auto 5px auto;
  }

    .each-cocktail {
        scrollbar-width: thin;
        scrollbar-color: rgba(170, 166, 166, 0.301) rgba(10, 22, 22, 0.705);
  }

    .each-cocktail::-webkit-scrollbar  {
      width: 12px;
  }

    .each-cocktail::-webkit-scrollbar-track {
    background:rgba(170, 166, 166, 0.301);
  }

    .each-cocktail::-webkit-scrollbar-thumb {
    background-color:rgba(10, 22, 22, 0.705);
    border-radius: 20px;
    border: 3px solid rgba(170, 166, 166, 0.301);
  }

  .ingredients-container {
      margin: 0.5em auto;
  }

  #ingredients-header {
      text-decoration: underline;
      font-size: 1.2em;
  }

  #instructions-container {
      margin-bottom: 0.5em;
  }

    #cocktail-container {
        display: flex;
        justify-content: center;
    }

/* media queries */
    @media only screen and (max-width: 500px){
        #cocktail-container {
            display: flex;
            justify-content: center;
        }

        .each-cocktail {
        width: 16em;
        height: 17.5em;
        margin: 0.5em;
        }

        .img-cocktail {
        width: 106px;
        height: 106px;
        }
    }

  @media only screen and (max-width: 400px){

    .each-cocktail {
      width: 82%;
      height: 17.5em;
      margin: 0.5em;
    }

    .img-cocktail {
      width: 106px;
      height: 106px;
    }
  }

    @media only screen and (max-width: 350px){
        .each-cocktail {
            width: 90%;
            height: 17.5em;
            margin: 0.5em;
        }

        .img-cocktail {
            width: 100px;
            height: 100px;
        }
    }
</style>