<template>
   <div class="p-main-wrapper">
      <pPersonaCard />

      <div class="p-main-wrapper__main-content">
         <header class="p-main-wrapper__header">
            <div class="p-main-wrapper__header-content container">
               <router-link :to="{name: 'aboutMe'}" class="p-main-wrapper__header-item">
                  Обо мне
               </router-link>
               <router-link :to="{name: 'education'}" class="p-main-wrapper__header-item">
                  Образование
               </router-link>
               <router-link :to="{name: 'projects'}" class="p-main-wrapper__header-item">
                  Проекты
               </router-link>
            </div>
         </header>

         <main class="p-main-wrapper__main container">
            <router-view></router-view>
         </main>

         <footer class="p-main-wrapper__footer" @click="removeLocalStorageCart">
            c. 2022. Чурцев Константин.
         </footer>
      </div>
   </div>
</template>

<script>
   import pPersonaCard from "@/components/p-persona-card"

export default {

   name: 'p-main-wrapper',
   components: {
      pPersonaCard
   }
}

</script>

<style lang="scss">
   .container {
      max-width: 600px;
         margin: 0 auto;
   }
   .p-main-wrapper {
      
      &__main-content {
         width: 100vw;
         min-height: 100vh;
         display: flex;
         flex-direction: column;
      }
      main {
         flex: 1 1 auto;
      }
      @media (min-width: 860px) {
         &__main-content {
            margin-left: 270px;
            width: calc(100vw - 270px - 18px);
         }
      }
      &__header {
         background: rgb(14, 112, 112);
         border-radius: 0 0 5px 5px;
         overflow: hidden;
      }
      &__header-content {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__header-item {
         transition: .3s;
         transition-property: background;
         position: relative;
         height: 40px;
         padding: 0 10px;
         line-height: 40px;
         color: #000;
         cursor: pointer;
         user-select: none;
         text-decoration: none;
         & img {
            padding: 3px 10px;
            height: 30px;
         }
         &:hover {
            background: rgb(21, 146, 146);
         }
      }
      &__footer {
         background: rgb(25, 146, 146);
         height: 30px;
         line-height: 30px;
         margin-top: 30px;
         border-radius: 5px 5px 0 0;
      }
   }
   .router-link-active {
      background: rgb(18, 153, 153);
   }
</style>