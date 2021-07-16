<template>
     <section >
        <label> Search our yacht: </label>
        <input ref="title" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.location">
 <label for="dob">Dates:</label>
        <input type="date" id="dob" name="dob" />
           <label for="age">Price: {{filterBy.price}}</label>
        <input type="range" id="price" name="price" min="500" max="1000000" step="10" value="1000"
            @input="setFilter" v-model="filterBy.price" />      
        <label for="browser">Size:</label>
                <input v-model="filterBy.size" list="browsers" name="browser" id="browser" @change="setFilter" >
            <datalist id="browsers">
               <option >All</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </datalist>
        <label>Rate:</label>
          <select v-model="filterBy.rete" @change="setFilter" id="filter" >
                <option>All</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
          </select>
    </section>
</template>

<script>
export default {
  data() {
        return {
            filterBy: {
                location: '',
                price: '',
                size: 'All',
                rate:'All',
            }
        }
    },
        methods: {
        setFilter() {
            var filterBy = JSON.parse(JSON.stringify(this.filterBy))
            this.$emit('filterby', filterBy)
            console.log(filterBy,'filter');
        },

    },

}
</script>

