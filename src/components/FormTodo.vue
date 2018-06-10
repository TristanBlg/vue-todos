<template>
  <div>
    <form class="form" v-on:submit="pushTodo">
        <input class="form__input form__input--text" type="text" placeholder="Écrire une nouvelle todo" v-model="input">
        <input class="form__input form__input--submit" type="submit" value="Ajouter">
      </form>
  </div>
</template>

<script>
export default {
  name: 'FormTodo',
  data: function() {
    return {
      input: ''
    }
  },
  methods: {
    pushTodo(){
      if(this.$data.input.length > 0) {
        this.$store.commit('pushTodo', {name: this.$data.input});
        this.$data.input = '';
        return;
      } else {
        alert('Veuillez saisir au moins 1 caractère.');
      }
    }
  }
};
</script>