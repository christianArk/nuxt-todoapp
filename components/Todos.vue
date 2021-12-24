<template>
    <div>
        <ul v-for="todo in allTodos" :key="todo.id">
            <li class="todo">
                <h3>
                    {{todo.title}}

                    <button @click="deleteTodo(todo.id)">X</button>
                </h3>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

    export default {
        name:  'Todos',
        methods:{
            ...mapActions(['getTodos', 'deleteTodo']),
        },
        computed: mapGetters(['allTodos']),
        created(){
            this.getTodos();
        }
    }
</script>

<style scoped>
ul{
    list-style: none;
}
button{
    background: inherit;
    color: rgb(224, 32, 32);
    border: none;
    outline: none;
    font-weight: bold;
}
button:hover{
    cursor: pointer;
}

</style>