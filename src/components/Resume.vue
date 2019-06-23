<template>
  <div class="resume-container">
    <iframe :src="require('@/assets/cv.pdf')" type="application/pdf"/>
  </div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style scoped>
  .resume-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100vh;
  }

  .resume-container embed {
    width: 60%;
    height: 80vh;
  }

  .resume1, .resume2, .resume3, .resume4, .resume5 {
    width: 80%;
    background-color: white;
    border: 1px rgb(30, 30, 30) solid;
    border-radius: 3px;
    margin: 15px 0 15px 0;
    padding: 10px;
  }
</style>
