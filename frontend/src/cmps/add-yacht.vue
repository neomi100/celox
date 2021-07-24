<template>
    <section>
        <form class="add-yacht-form">
          <h2>Add a New List:</h2>
            <div>
                <span>Yacht Name:</span>
                <el-input class="add-yacht-name" placeholder="Name" v-model="yacht.name"></el-input>
            </div>
            <div>
                <span>Yacht Summary:</span>
                <el-input
                    type="textarea"
                    placeholder="Enter summary here..."
                    v-model="yacht.summary"
                    maxlength="70"
                    show-word-limit
                  >
                </el-input>
            </div>
            <div>
                <span>Yacht Description:</span>
                <el-input
                    class="add-yacht-summary"
                    type="textarea"
                    :rows="4"
                    placeholder="Enter description here..."
                    v-model="tempDescription">
                </el-input>
            </div>
            <div class="flex align-center">
                <span>Price per night:</span>
                <el-input class="add-yacht-price" placeholder="Enter price" size=small v-model="yacht.price"></el-input>
            </div>
            <div class="capacity">
                <span class="capacity-title">Capacity:</span>
                <el-input-number size=small v-model="yacht.capacity"  :min="1" :max="20"></el-input-number>
            </div>
            <div>
              <span class="add-amen"> Choose amenities:</span>
              <add-yacht-amenities @updateAmenities="updateAmenities()"/>
            </div>
            <div>
            <span>Upload yacht images:</span>
            <!-- <img-cld-upload class="upload-yacht-img"/> -->
            </div>
            <button class="special-btn add-asset-btn" @click="addYacht()">Publish Listing</button>
        </form>
    </section>    
</template>

<script>
// import { yachtService } from '../services/yacht-service.js';
import addYachtAmenities from '../cmps/add-yacht-amenities.vue';
// import imgCldUpload from '../cmps/img-cld-upload.vue';
// import imgUpload from "@/cmps/img-upload.cmp";

// const Swal = require('sweetalert2')

export default {
  name: "add-yacht",
  props: ['owner' ],
  data() {
    return {
      tempDescription:'',
      yacht: {
        name: "",
        imgUrls: ["1.1","1.2a","1.2b","1.2c","1.2d"],////////////////////////////////////FIX (temp)
        price: null,
        size: null,
        summary: "",
        favorites: [],
        amenities: [],
        owner: {
          _id: this.owner._id,
          fullname: this.owner.fullname,
          imgUrl: this.owner.imgUrl,
        },
        /////////////////////////////////FIX (temp)
        loc: {
          country: 'Israel',
          countryCode: 'IL',
          address: 'Jerusalem',
          lat: 31.771959,
          lng: 35.217018,
        },
        ////////////////////////////////////
        reviews: []
        }
    }
    },
    methods: {
    //   handleChange(value) {
    //   },
    capacity() {
      const maxPepole = this.yacht.size;
      switch (maxPepole) {
        case "small":
          return 5;
        case "medium":
          return 12;
        case "large":
          return 35;
        default:
          return "";
      }
    },
      updateAmenities(amenities){
          this.yacht.amenities=amenities;
      },
      async addYacht(){
        this.$notify.error({
          title: 'This feature is not active yet but will be implemented soon :)',
          message: 'Thank'
        })
          // try{
          //   this.yacht.price=+this.yacht.price;
          //   await this.$store.dispatch({type:'saveYacht',yacht:this.yacht})
          //   Swal.fire('Your new yacht was added to listing!')
          //   this.yacht=yachtService.getEmptyYacht()
          // } catch(err){
          //     console.log('yacht was not added:',err);
          //     Swal.fire('Oops! Something went wrong. Yacht was not added. Try again later.')
          // }
      }
    },
    components: {
    addYachtAmenities,
    // imgCldUpload,
    // imgUpload,
  },
};
</script>
<style>
.add-yacht-price{
  max-width:130px;
  margin-inline-start: 26px;
}
</style>