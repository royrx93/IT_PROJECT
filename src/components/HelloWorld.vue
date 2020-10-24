<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
  margin: 0px 0 0;
  }
  ul {
  list-style-type: none;
  padding: 0;
  }
  li {
  display: inline-block;
  margin: 0 0px;
  }
  a {
  color: #42b983;
  }
  h1 {
  padding: 230px;
  margin-left:30px;
  margin-top:70px;
  letter-spacing: 7px;
  font-size:3em;
  }
</style>
