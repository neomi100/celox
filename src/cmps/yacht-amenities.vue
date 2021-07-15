<template>
<section v-if="yacht">
<h1>Amenities</h1>
<ul>
    <li v-for="(amen,idx) in yacht.amenities" :key="idx">
        <i :class="icon(idx)"/> {{yacht.amenities[idx]}}
    </li>
</ul>
</section>    
</template>


<script>
export default {
    name:"yacht-amenities",
    props:{
        yacht:Object
    },
    methods:{
        icon(idx){
            var icon=null
            switch(this.yacht.amenities[idx]){
                case 'TV':
                    icon="fas fa-tv"
                    return icon
                case 'Wifi':
                    icon= "fas fa-wifi"
                    return icon
                case 'Air-conditioning':
                    icon="far fa-snowflake"
                    return icon
                case 'Smoking allowed':
                    icon="fas fa-smoking"
                    return icon
                case 'Pets allowed':
                    icon="fas fa-paw"
                    return icon
                case 'Cooking basics':
                    icon="fas fa-utensils"
                    return icon

            }
        }
    },
    created(){
    }
}
</script>
