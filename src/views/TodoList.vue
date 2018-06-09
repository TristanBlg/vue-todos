<template>
  <div>
    <h1 class="title">TOTAL TODOS : {{ todolistLength }}</h1>
	  <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue';

export default {
  name: 'TodoList',
  components: {
    Todos,
  },
  computed: {
  	todolistLength(){
  		return this.$store.state.todos.length
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
	}
	.list .list__todo.todo{
		margin-bottom: 10px;
		display: flex;
		align-items: center;
	}
</style>
