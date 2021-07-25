<template>
    <section>
         <form @submit.prevent="saveYacht" class="edit-continer">
      <h2>{{ title }}</h2>
      <div class="main-continer">
        <div class="main1">
          <div>
            Full name:
            <input
              name="txt"
              type="text"
              v-model="yachtEdit.owner.fullname"
              class="input"
            />
          </div>
          <label /> Name of your Yacht:
          <input
            name="txt"
            type="text"
            v-model="yachtEdit.name"
            class="input"
          />
          <label /> Daily price:
          <input
            name="txt"
            type="number"
            v-model="yachtEdit.price"
            class="input"
            value="1"
          />
        </div>
        <div class="main2">
          <label /> Country:
          <input
            name="txt"
            type="text"
            v-model="yachtEdit.loc.country"
            class="input"
          />
          <label /> City:
          <input
            name="txt"
            type="text"
            v-model="yachtEdit.loc.city"
            class="input"
          />
          <label /> Address:
          <input
            name="txt"
            type="text"
            v-model="yachtEdit.loc.address"
            class="input"
          />
          <select class="btn" v-model="yachtEdit.size">
            Size:
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button class="btn" @click.stop.prevent="selectAmenities">
            Amenities
          </button>
          <div class="amenities" :class="openAmenities">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="yachtEdit.amenities"
              @change="handleCheckAllChange"
              >Select all</el-checkbox
            >
            <el-checkbox-group
              v-model="checkedAmenities"
              @change="handleCheckedAmenitiesChange"
            >
              <el-checkbox
                v-for="amenitie in amenities"
                :label="amenitie"
                :key="amenitie"
                >{{ amenitie }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="second">
        <img-upload @save="saveImg" />
        <button class="btn save">Save</button>
        <button type="button" class="btn delete" @click="remove">Delete</button>
      </div>
    </form>
    </section>    
</template>

<script>
import { yachtService } from "../services/yacht-service";
import imgUpload from "@/cmps/img-upload.cmp";
const amenities = [
  "TV",
  "Wifi",
  "Air-conditioning",
  "Smoking allowed",
  "Pets allowed",
  "Cooking basics",
  "Washing machine",
  "work area",
  "Baby accessories",
  "Water slide",
  "Smoke detector",
];
export default {
  data() {
    return {
      yachtEdit: null,
      showSelectAmenities: false,
      checkAll: false,
      checkedAmenities: [],
      amenities,
      isIndeterminate: true,
    };
  },
  methods: {
    remove() {
      const id = this.$route.params.id;
      this.$store.dispatch({ type: "removeYacht", id })
        .then(() => {
          console.log("remove");
           this.$router.push("/yacht");
          // showMsg('Toy was succesfully removed')
        })
        .catch((err) => {
          console.log(err);
          // showMsg('Cannot remove Toy, try again later', 'danger')
        });
    },
    saveImg(imgUrl) {
      this.yachtEdit.imgUrls.push(imgUrl);
    },
    toggle() {
      this.yachtEdit.inStock = !this.yachtEdit.inStock;
    },
    saveYacht() {
      this.$store.dispatch({ type: "saveYacht", yacht: this.yachtEdit });
      this.$router.push("/yacht");
    },
    selectAmenities() {
      this.showSelectAmenities = !this.showSelectAmenities;
    },
    handleCheckAllChange(val) {
      this.checkedAmenities = val ? amenities : [];
      this.isIndeterminate = false;
    },
    handleCheckedAmenitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.amenities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.amenities.length;
    },
  },
  computed: {
    openAmenities() {
      let amenities = this.showSelectAmenities ? "isOpen" : "isClose";
      return amenities;
    },
    title() {
      console.log(this.yachtEdit);
      return this.yachtEdit.id ? "Edit your yacht " : "Add your Yacht";
    },
  },
  async created() {
    console.log('hi');
    const id = this.$route.params.id;
    console.log(id,'become');
    if (id) {
      try {
        const yacht =  await yachtService.getById(id)
      console.log(yacht);
          this.yachtEdit = JSON.parse(JSON.stringify(yacht));
          console.log(this.yachtEdit);
      } catch{
          // console.log("Something has happened", err);
          // throw err;
      }
    } else {
      console.log(this.yachtEdit, "add");
      this.yachtEdit = yachtService.getEmptyYacht();
      console.log(this.yachtEdit, "add after");
    }
  },
  components: {
    imgUpload,
  },
};
</script>