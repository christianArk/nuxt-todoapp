<template>
<div class="container"> 
  <Header />
  <AddTodo />
  <Todos />
</div>
</template>

<script>
import Header from '../components/Header.vue'
import AddTodo from '../components/AddTodo.vue'
import Todo from '../components/Todos.vue'


export default {
  name: 'index',
  components:{
    Todo,
    Header,
    AddTodo
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  padding: .2rem;
}

.container {
  max-width: 450px;
  margin: 30px auto;
  overflow: auto;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  font-size: .8rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.todo {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.todo.reminder {
  border-left: 5px solid green;
}

.todo h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

footer {
  margin-top: 30px;
  text-align: center;
}

</style>
