import axios from 'axios';

const state =  {
  list: []
};

const getters = {
  allTodos: (state) => state.list
};

const actions = {
  async getTodos({ commit }) {
    const res = await axios.get('https://simp-node-todo.herokuapp.com/todo');

    commit('SET_TODO', res.data)
  },

  async AddTodo({commit}, title) {
    const res = await axios.post('https://simp-node-todo.herokuapp.com/todo', {
      title,
      status: false
    });

    commit('NEW_TODO', res.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://simp-node-todo.herokuapp.com/todo/${id}`);

    commit('REMOVE_TODO', id)
  }
};

const mutations = {
  SET_TODO(state, todo) {
    state.list = todo
  },
  NEW_TODO(state, todo) {
    state.list.unshift(todo);
  },

  REMOVE_TODO(state, id) {
    state.list = state.list.filter(todo => todo.id !== id)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}