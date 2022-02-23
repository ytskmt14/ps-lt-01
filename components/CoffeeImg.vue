<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  path: string,
  title: string,
}

const props = defineProps<Props>();

const path = ref(props.path)
const title = ref(props.title)
</script>

<template>
  <section class="card">
    <img :src="path" class="card-img" />
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
    </div>
  </section>
</template>

<style scoped>
.card {
  margin: 5px auto;
  width: 200px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 5px;
}
.card-title {
  font-size: 1rem;
  margin-bottom: 5px;
  text-align: center;
  color: #333;
}
</style>
