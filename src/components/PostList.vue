<template>
  <div class="list-wrapper" v-show="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item :post="post" v-for="post in posts" :key="post.id" @remove="$emit('remove', post)" />
    </transition-group>
  </div>
  <div v-show="posts.length === 0" style="color: red">
    <h3>Список постов пуст</h3>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue"
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.list-wrapper {
  padding: 0 30px;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all .3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.post-list-move {
  transition: transform .4s ease;
}
</style>
