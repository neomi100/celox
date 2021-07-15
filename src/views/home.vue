<template>
<section>
  <div class="home">
       <img class="main-img" src="@/assets/main-img.jpg"/>
  </div>
  <div>
    Filter
  </div>
  <div class="top-destinations">
    Top destinations
    <div class="destination" v-for="(yacht, idx) in yachts" :key="idx">
      {{yacht}}
    </div>
  </div>
  <div class="top-rated-yachts">
  <div class="yacht" v-for="(yacht, idx) in yachts" :key="idx">
    {{yacht.name}}
  </div>
</div>
  </section>
</template>

<script>

export default {
 computed:{
   yachts(){
   return this.$store.getters.yachtsForShow
   }
 }

}
</script>
