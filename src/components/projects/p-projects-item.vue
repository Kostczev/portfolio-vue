<template>
   <div class="p-projects-item">
      <div class="p-projects-item__title">
         <span v-if="project_data.titleLink != ''">
            <a class="p-projects-item__link" :href="project_data.titleLink" target="_blank">
               {{project_data.titelLinkText}}</a> : 
         </span>
         <span>{{ project_data.title }}</span>
      </div>
      <div class="p-projects-item__image">
         <img :src=" require('@/assets/img/projects/' + project_data.image)  " alt="">
      </div>
      <div class="p-projects-item__links">
         <a class="p-projects-item__link" :href="project_data.linkGit" target="_blank">git</a>
         <a class="p-projects-item__link" :href="project_data.linkBeb" target="_blank">На сайт</a>
      </div>
   </div>
</template>

<script>
   export default {
   name: 'v-catalog-item',
   props: {
      project_data: {
         type: Object,
         default() {
            return {}
         }
      }
   },
   data() {
      return {}
   },
   computed: {},
   methods: {}
}
</script>

<style lang="scss">
   .p-projects-item {
      background: rgb(14, 112, 112);
      border-radius: 5px;
      height: 210px;
      color: #000;
      margin-bottom: 20px;

      &__title {
         font-size: 15px;
         text-align: center;
         padding: 5px;
      }
      &__image {
         padding: 0 5px;
         & img {
            border-radius: 5px;
            object-fit: cover;
            width: 100%;
            height: 150px;
         }
      }
      &__links{
         display: flex;
         height: 25px;
         justify-content: space-around;
         align-items: center;
      }
      &__link {
         transition: .3s;
         transition-property: color;
         text-align: center;
         width: 100px;
         color: #000;
         text-decoration: none;
         &:hover {
            color: #4ECCA3;
         }
      }
   }
</style>