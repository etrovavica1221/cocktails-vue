<template>
  <div class="cocktails-container">
    <div class="search-bar">
      <label 
        id="cocktail-search-label" 
        for="cocktail-search"
      >
        Search by desired ingredient or cocktail name:
      </label>
      <!-- v-model is listening for the keyword and passing it to cocktails array in the state -->
      <input
          id="cocktail-search"
          v-model="keyword"
          placeholder="Search"
      />
    </div>
    <div id="cocktails-menu" data-testid="cocktails-menu">
      <!-- looping through checkName, array of cocktails modified by the keyword, to pass each cocktail to individual card  -->
      <div v-bind:key="cocktail.idDrink" v-for="cocktail in checkName">
        <EachCocktail v-bind:cocktail="cocktail" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EachCocktail from './EachCocktail';

export default {
  name: 'Cocktails',
  components: {
    EachCocktail,
  },
  data() {
    return {
      cocktails: [],
      keyword: "",
    }
  },
  mounted() {
    // getting the cocktails from the API and passing it to the state
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then(res => this.cocktails = res.data.drinks)
        .catch(err => alert(err))
  },
  computed: {
    checkName:function() {
      let cocktails = this.cocktails;
      let keyword = this.keyword;
      
      // filtering cocktails by keyword 
      return cocktails.filter((cocktail) => { 
        return JSON.stringify(cocktail).toLowerCase().includes(keyword.toLowerCase())});  
    },
  },
}
</script>

<style scoped>
  .cocktails-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
  }

  #cocktails-menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    height: 80%;
    overflow: scroll;
    border: 1em groove rgba(0, 0, 0, 0.301);
    background: rgba(0, 0, 0, 0.267);
    background-repeat: no-repeat;
    background-size: cover;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(170, 166, 166, 0.301) rgba(16, 230, 219, 0.705);
  }

  /* Works on Chrome/Edge/Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }
  *::-webkit-scrollbar-track {
    background:rgba(170, 166, 166, 0.301);
  }
  *::-webkit-scrollbar-thumb {
    background-color:rgba(16, 230, 219, 0.705);
    border-radius: 20px;
    border: 3px solid rgba(170, 166, 166, 0.301);
  }

  .search-bar {
    display: flex;
    align-items: center;
    margin: 0 0.5em 2em 0.5em;
    padding: 0.5em;
    border: 0.2em groove rgba(0, 0, 0, 0.521);
    border-radius: 6px;
    background: rgba(234, 241, 243, 0.493);
  }

  #cocktail-search {
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0.521);
    border-radius: 4px;
    padding: 5px;
  }

  #cocktail-search-label {
    font-size: 1.2em;
    margin-right: 0.3em;
  }

  /* media queries */
  @media only screen and (min-width: 2500px){
    #cocktails-menu {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .search-bar {
      padding: 0.7em;
      font-size: 2em;
    }

    #cocktail-search {
      font-size: 1em;
    }
  }

  @media only screen and (max-width: 1200px){
    #cocktails-menu {
      grid-template-columns: 1fr 1fr;
      width: 66%;
      border: 0.9em groove rgba(0, 0, 0, 0.301);
    }
  }

  @media only screen and (max-width: 1000px){
    #cocktails-menu {
      width: 75%;
      border: 0.7em groove rgba(0, 0, 0, 0.301);
    }
  }

  @media only screen and (max-width: 900px){
    #cocktails-menu {
      width: 85%;
    }
  }

  @media only screen and (max-width: 800px){
    #cocktails-menu {
      width: 92%;
    }
  }

  @media only screen and (max-width: 705px){
    .search-bar {
      display: flex;
      flex-direction: column;
      width: 88%;
    }

    #cocktails-menu {
      grid-template-columns: 1fr;
      width: 89%;
      border: 0.4em groove rgba(0, 0, 0, 0.301);
    }

    #cocktail-search-label {
      font-size: 0.9em;
    }
  }

  @media only screen and (max-width: 425px){
    #cocktail-search-label {
      font-size: 0.8em;
    }
  }

  @media only screen and (max-width: 380px){
    #cocktail-search-label {
      font-size: 0.6em;
      margin-bottom: 0.5em;
    }
  }
</style>
