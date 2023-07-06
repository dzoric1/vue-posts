<template>
  <form @submit.prevent class="form">
    <h4>Создание поста</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Название">
    <input v-model="post.body" class="input" type="text" placeholder="Опсиание">
    <my-button @click="createPost">Создать пост</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    },
  }
}

</script>

<style>
.form {
  margin: 0 0 20px 0;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 5px 10px;
  margin: 5px 0;
}
</style>
