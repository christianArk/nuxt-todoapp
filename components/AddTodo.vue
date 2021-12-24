<template>
    <form class="add-form" @submit="onSubmit">
         <div class="form-control">
            <label for='add-todo'><h4>Todo</h4></label>    
            <input type="text" 
            name="add-todo" id="todo-input"
                placeholder="Type A Todo" 
                v-model="title"
                required
                />
        </div>             

    <input type="submit" value="Save" class="btn btn-block" />   
    </form>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        name: 'AddTodo',
        data() {
            return {
                title: '',
            }
        },
        methods:{
            ...mapActions(['AddTodo']),
            onSubmit(e){
                e.preventDefault();
                this.AddTodo(this.title);

                this.title = '';
            }
        }
    }
</script>