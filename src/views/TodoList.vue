<template>
  <div>
    <h1 class="title">TOTAL TODOS : {{ todosLength }}</h1>
    <Todos />
    <FormTodo />
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue';
import FormTodo from '@/components/FormTodo.vue';

export default {
  name: 'TodoList',
  components: {
    Todos,
    FormTodo
  },
  computed: {
    todosLength(){
      return this.$store.getters.todoLength;
    }
  }
};
</script>

<style lang="scss">
.title{
  font-weight: 600;
  font-size: 1.8rem;
  margin: 0 0 40px 0;
}
.list{
  text-align: left;
  padding: 0;
  margin: 0 0 40px 0;

  & &__todo{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
}
.form{
  margin: 0;
  
  & &__input{
    width: 100%;
    padding: 10px;
    display: block;
    border: none;
    margin: 0;
    font-size: 1.4rem;

    &--text{
      margin-bottom: 10px;
      border: 1px solid #e0e0e0;
    }
    &--submit{
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
      background-color: #36495d;
    }
  }
}
</style>
