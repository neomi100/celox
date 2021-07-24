<template>
    <section>
    <ul class="amenities clean-list">
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isWifi">Wifi</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isElevator">Elevator</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isAirConditioning">Air conditioning</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isTv">TV</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isSmokingAllowed">Smoking allowed</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isNoSmoking">No smoking</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isPetsAllowed">Pets allowed</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isParking">Parking</el-checkbox>
        </li>
        <li>
            <el-checkbox @change="updateAmenities()" v-model="booleanAmenityMap.isCookingBasics">Cooking basics</el-checkbox>
        </li>
    </ul>
    </section>
</template>

<script>
export default {
    name:'add-yacht-amenities',
    data(){
        return {
            amenities:[],
            booleanAmenityMap:{
                isWifi:false,
                isElevator:false,
                isAirConditioning:false,
                isTv:false,
                isSmokingAllowed:false,
                isNoSmoking:false,
                isPetsAllowes:false,
                isParking:false,
                isCookingBasics:false,
            }   
        }
    },
    methods:{
        updateAmenities(){
            let amenities=Object.keys(this.booleanAmenityMap).filter((key)=>this.booleanAmenityMap[key])
            this.amenities=amenities
            this.$emit('updateAmenities', this.amenities)
        }
    }
}
</script>