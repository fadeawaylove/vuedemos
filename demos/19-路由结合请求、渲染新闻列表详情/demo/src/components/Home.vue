<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li v-for="(item, key) in products">
        <router-link :to="'/pcontent?aid=' + key">{{key}}:{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: ["电视机", "冰箱", "彩电"]
    };
  }
};
</script>