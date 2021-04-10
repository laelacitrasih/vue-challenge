<template>
  <div id="app">
    <Home :optionAge="categoryByAge"></Home>
  </div>
</template>

<script>

import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data(){
    return {
      categoryByAge: [
        [["Under 20"],[['Date of Birth', 'date'], ['Ocupation', 'radio', ['Student', 'Collage Student', 'Other']]]
        ],
        [["20 - 40"],[['Date of Birth', 'date'], ['Ocupation', 'radio', ['Student', 'Collage Student', 'Other']], ['Sallary', 'number']]
        ],
        [["Older 40"],[['Date of Birth', 'date'], ['Ocupation', 'text'], ['Sallary', 'number']]
        ]
        ]
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
