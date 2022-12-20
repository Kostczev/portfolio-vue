import axios from "axios";

export default {
   state: {
      skills: []
   },
   mutations: {
      SET_SKILLS_TO_STATE: (state, skills) => {
         state.skills = skills
      }
   },
   actions: {
      GET_SKILLS_FROM_API({commit}) {
         //return axios('http://localhost:3000/skills', {
         return axios('https://my-json-server.typicode.com/Kostczev/portfolio-vue/skills', {
            method: "GET"
         })
         .then((skills) => {
            commit('SET_SKILLS_TO_STATE', skills.data);
            return skills;
         })
         .catch((error) => {
            console.log(error);
            return error;
         })
      }
   },
   getters: {
      SKILLS(state) {
         return state.skills;
      }
   }
}