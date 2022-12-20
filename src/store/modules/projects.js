import axios from "axios";

export default {
   state: {
      projects: []
   },
   mutations: {
      SET_PROJECTS_TO_STATE: (state, projects) => {
         state.projects = projects
      }
   },
   actions: {
      GET_PROJECTS_FROM_API({commit}) {
         //return axios('http://localhost:3000/projects', {
         return axios('https://my-json-server.typicode.com/Kostczev/portfolio-vue/projects', {
            method: "GET"
         })
         .then((projects) => {
            commit('SET_PROJECTS_TO_STATE', projects.data);
            return projects;
         })
         .catch((error) => {
            console.log(error);
            return error;
         })
      }
   },
   getters: {
      PROJECTS(state) {
         return state.projects;
      }
   }
}