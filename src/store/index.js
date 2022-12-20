import { createStore } from 'vuex'
import skills from '@/store/modules/skills'
import projects from '@/store/modules/projects'


const store = createStore({
   modules: {
      skills,
      projects
   }
 })

 export default store;