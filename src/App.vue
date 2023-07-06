<template>
  <div>
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaSctipt', body: 'Описание поста' },
        { id: 2, title: 'JavaSctipt 2', body: 'Описание поста 2' },
        { id: 3, title: 'JavaSctipt 3', body: 'Описание поста 3' },
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 15px;
}
</style>
