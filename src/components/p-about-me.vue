<template>
   <div class="p-about-me">
      <div class="p-education__item">
         <h1>Коротко о себе</h1>
         <p>Мне 23. Люблю книги и сериалы.</p>
         <p>Нравится созидать, по этому выбрал front-end. Пока искал себя, попробовал создание игр, на базовом уровне разбираюсь в Unity.</p>
         <p>Из положительных качеств: </p>
         <ul>
            <li>ответсвенность</li>
            <li>обучаемость</li>
            <li>честность</li>
            <li>добросовестность</li>
            <li>гибкость и умение принимать чужую точку зрения</li>
            <li>самокритичность, умение видеть свои ошибки и признавать их</li>
            <li>пунктуальность</li>
            <li>дисциплинированность</li>
         </ul>
         <p>К недостаткам можно отнести туже самокритичность. Порой хочется довести до идеала, но идеала не существует. Всегда можно сделать еще лучше. По этому избавляюсь от этой привычки.</p>
      </div>
      
   </div>
</template>

<script>
   export default {
   name: 'p-about-me',
   props: {},
   data() {
      return {}
   },
   computed: {}
}
</script>

<style lang="scss">
   .p-about-me {
      text-align:justify;
      margin: 0 20px;

      @media (min-width: 860px) {
         margin: 0;
      }

      li {
         list-style-type:disc;
         margin-left: 20px;
      }
   }
</style>