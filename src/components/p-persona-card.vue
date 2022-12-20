<template>
   <div class="p-persona-card">
      <div class="p-persona-card">
         <img src="@/assets/img/persona.png" alt="" class="p-persona-card__photo">
         <div class="p-persona-card__fio">Чурцев Константин Владимирович</div>

         <div class="p-persona-card__block skills">
            <div class="p-persona-card__title">Skills</div>
            <ul class="p-persona-card__skills block-items">
               <li class="p-persona-card__skill card-item"
               v-for="(skill, index) in SKILLS" :key="index">{{skill.name}}</li>
            </ul>
         </div>
   
         <div class="p-persona-card__block">
            <div class="p-persona-card__title">Связаться со мной</div>
            <ul class="p-persona-card__social social">
               <li class="social__item">
                  <a class="social__link" href="https://t.me/Kostczev" target="_blank">
                     <img src="@/assets/img/social/telegram.svg" alt="Telegram: Чурцев Константин">
                  </a>
               </li>
               <li class="social__item">
                  <a class="social__link" href="https://wa.me/79506541212" target="_blank">
                     <img src="@/assets/img/social/whatsApp.svg" alt="WhatsApp: Чурцев Константин">
                  </a>
               </li>
               <li class="social__item">
                  <a class="social__link" href="https://vk.com/kostczev" target="_blank">
                     <img src="@/assets/img/social/vk.svg" alt="VK: Чурцев Константин">
                  </a>
               </li>
            </ul>
         </div>

      </div>
   </div>
</template>

<script>
   import { mapGetters, mapActions } from 'vuex';

   export default {
   name: 'p-persona-card',
   props: {},
   data() {
      return {}
   },
   computed: {
      ...mapGetters(["SKILLS"])
   },
   methods: {
      ...mapActions(["GET_SKILLS_FROM_API"])
   },
   mounted() {
      this.GET_SKILLS_FROM_API()
   }
}
</script>

<style lang="scss">
   .p-persona-card {
      background: rgb(14, 112, 112);
      display: flex;
      flex-direction: column;
      align-items:center;
      padding: 15px 10px;
      color: #000;

      &__photo {
         height: 200px;
         width: auto;
         border-radius: 5px;
         margin-bottom: 10px;
      }

      @media (min-width: 860px) {
         position: fixed;
         top: 0;
         left: 0;
         bottom: 0;
         width: 230px;

         &__photo {
            height: auto;
            width: 80%;
         }
      }

      

      &__fio {
         font-size: 20px;
         letter-spacing: 1px;
         text-align: center;
         line-height: 26px;
         margin-bottom: 20px;
      }

      &__title {
         font-size: 16px;
         text-transform: uppercase;
         letter-spacing: 2px;
         text-align: center;
         line-height: 20px;
      }

      .block-items {
         display: flex;
         justify-content:space-around;
         flex-wrap:wrap;
         margin: 5px -5px 10px -5px;
      }

      &__social {
         margin: 10px;
      }

      .open-space {
         flex: 1 1 auto;
      }
   }

   .skills {
      flex: 1 1 auto;
   }

   .social {
      display: flex;
      justify-content: center;

      &__item {
         margin: 0 15px;
         height: 30px;
         width: 30px;
      }
   }

   .card-item {
      padding: 5px;
      border: 1px solid #4ECCA3;
      border-radius: 5px;
      letter-spacing: 1px;
      margin: 5px 10px;
   }
</style>