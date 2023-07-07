<template>
  <form @submit.prevent class="form">
    <h4>Создание поста</h4>
    <my-input v-model="post.title" placeholder="Название" />
    <my-input v-model="post.body" placeholder="Описание" />
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
</style>
