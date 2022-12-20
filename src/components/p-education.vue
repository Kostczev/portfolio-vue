<template>
   <div class="p-education">
      <div class="p-education__item">
         <h1>Магистратура</h1>
         <div class="p-education__place">УрФУ имени первого Президента России Б.Н. Ельцина</div>
         <div class="p-education__direction">09.04.03 Прикладная информатика</div>
         <div class="p-education__end">2022 год</div>
         <a class="p-projects-item__link card-item" href="https://istudent.urfu.ru/s/zachetnaya-knizhka-1/sharelink?l=195e3pg0000n8buea6a0l38u0k.rt20ymf63a0ee499f0b99.88317880" target="_blank">Зачетная книжка</a>
      </div>

      <div class="p-education__item">
         <h1>Бакалавриат</h1>
         <div class="p-education__place">УрФУ имени первого Президента России Б.Н. Ельцина</div>
         <div class="p-education__direction">09.03.02 Информационные системы и технологии</div>
         <div class="p-education__end">2020 год</div>
         <a class="p-projects-item__link card-item" href="https://istudent.urfu.ru/s/zachetnaya-knizhka-1/sharelink?l=18hc2jg0000ld4o5ejsepinq3o.rt20ymf63a0ef9e299728.40785911" target="_blank">Зачетная книжка</a>
      </div>
      
   </div>
</template>

<script>
   export default {
   name: 'p-education',
   props: {},
   data() {
      return {}
   },
   computed: {}
}
</script>

<style lang="scss">
   .p-education {
      &__item {
         margin: 10vh 0;
      }
      &__place {
         line-height: 22px;
         margin-bottom: 5px;
      }
      &__direction {
         font-size: 24px;
         margin-bottom: 5px;
      }
      &__end {
         margin-bottom: 15px;
      }
   }
</style>