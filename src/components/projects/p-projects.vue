<template>
   <div class="p-projects">
      <div class="p-projects__tips">
         <div class="form-radio-btn">
            <input id="radio-1" type="radio" 
               name="tips" value="vue" v-model="tip" 
               checked>
            <label for="radio-1">Vue</label>
         </div>
         <div class="form-radio-btn">
            <input id="radio-2" type="radio"
               name="tips" value="js" v-model="tip">
            <label for="radio-2">JS</label>
         </div>
         <div class="form-radio-btn">
            <input id="radio-3" type="radio" 
               name="tips" value="html" v-model="tip">
            <label for="radio-3">HTML</label>
         </div>
      </div>
      <div class="p-projects__list">
         <pLoader v-if="isLoad" />
         <pProjectsItem 
            v-for="(project, index) in sortedProjects"
            :key="index"
            :project_data="project"
         />
      </div>
   </div>
</template>

<script>
   import pProjectsItem from '@/components/projects/p-projects-item';
   import pLoader from '@/components/p-loader';
   import { mapGetters, mapActions } from 'vuex';

   export default {
   name: 'p-projects',
   components: {
      pProjectsItem,
      pLoader
   },
   data() {
      return {
         tip: '',
         isLoad: true,
         sortedProjects: []
      }
   },
   computed: { 
      ...mapGetters(["PROJECTS"])
   },
   methods: {
      ...mapActions(["GET_PROJECTS_FROM_API"])
   },
   watch: {
      tip(val) {
         let fSortedProjects = [];
         this.PROJECTS.map(function(item) {
            if(item.tipe === val) {
               fSortedProjects.push(item);
            }
         })
         this.sortedProjects = fSortedProjects;
      }
   }, 
   mounted() {
      this.GET_PROJECTS_FROM_API()
      setTimeout( () => {
         this.tip='vue'
         this.isLoad = false
      }, 500);
   }
}
</script>

<style lang="scss">

   .form-radio-btn {
      display: inline-block;

      & input[type=radio] {
         display: none;
      }

      & label {
         transition: .3s;
         transition-property: color;
         
         display: inline-block;
         cursor: pointer;
         padding: 0px 15px;
         line-height: 34px;
         user-select: none;
      }

      & input[type=radio]:checked + label {
         color: #4ECCA3;
      }
      &  label:hover {
         color: #4ECCA3;
      }
   }

   .p-projects {
      &__tips {
         display: flex;
         justify-content: space-around;
         list-style: none;
         margin: 15px 0;
      }
      &__tip {
         transition: .3s;
         transition-property: color;
         padding: 10px;
         cursor: pointer;
         &:hover {
            color: rgb(21, 146, 146);
         }
      }
      &__list {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         align-items: center;
      }
   }
</style>