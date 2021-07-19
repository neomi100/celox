<template>
  <section v-if="yachtEdit" class="main-layout">

    <!-- <user-msg v-if="userMsg.txt.length"  :msg="userMsg"  @timeout="hideMsg" /> -->
    <form @submit.prevent="saveYacht" class="edit-continer">
    <h3>{{title}}</h3>
      <label /> Full name:
      <input name="txt" type="text" v-model="yachtEdit.owner.fullname" />
       <input @change="onUploadImg" type="file" id="imgUpload" hidden />
      <label /> Name of your Yacht:
      <input name="txt" type="text" v-model="yachtEdit.name" />
      <label /> Daily price:
      <input name="txt" type="number" v-model="yachtEdit.price" />
      <label /> Country:
      <input name="txt" type="text" v-model="yachtEdit.loc.country" />
      <label /> City:
      <input name="txt" type="text" v-model="yachtEdit.loc.city" />
      <label /> Address:
      <input name="txt" type="text" v-model="yachtEdit.loc.address" />
      <!-- <label class="switch" /> Captin: זה ביוזר
      <input type="checkbox" @click="toggle" :checked="yachtEdit.inStock" /> -->
     
     <select v-model="yachtEdit.size">Size:
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
     </select>

       <!-- <el-transfer
    v-model="yachtEdit. amenities"
    :data="data">
  </el-transfer> -->

  <!-- <div class="block">
  <span class="demonstration">Display all tags (default)</span>
  <el-cascader
    :options="options"
    :props="props"
    clearable></el-cascader>
</div> -->

      <input @change="onUploadImg" type="file" id="imgUpload" hidden />
      <button class="btn-save">Save</button>
    </form>
  </section>
</template>

<script>
import { yachtService } from "../services/yacht-service";
import { uploadImg } from "@/services/img-upload.service.js";
export default {
  data() {
    return {
      yachtEdit: null,
    };
  },
  methods: {
    toggle() {
      this.yachtEdit.inStock = !this.yachtEdit.inStock;
    },
    saveYacht() {
      console.log(this.yachtEdit,'save');
      this.$store.dispatch({ type: "saveYacht", yacht: this.yachtEdit });
      this.$router.push("/");
    },
       async onUploadImg(ev) {
      // this.isLoading = true
      const res = await uploadImg(ev);
      console.log("onUploadImg -> res.url", res.url);
      // res.url =imgUrl      
      this.yachtEdit.imgUrls.push(res.url)
      // this.isLoading = false
    },
  },
  computed: {
    // yachtId() {
    //     return this.$route.params.yachtId;
    // },
     title() {
            return  this.yachtEdit._id ? 'Edit your yacht ' : 'Add your Yacht'
        },
  },
  created() {
    const id = this.$route.params.yachtId;
      console.log("hi", id);
    if (id) {
      yachtService
        .getById(id)
        .then((yacht) => {
          this.yachtEdit = yacht
        //   this.yachtEdit = JSON.parse(JSON.stringify(yacht));
        })
        .catch((err) => {
          console.log("Something has happened", err);
          throw err;
        });
    } else {
      console.log(this.yachtEdit, "add");
      this.yachtEdit = yachtService.getEmptyYacht();
      console.log(this.yachtEdit, 'add after');
    }
  },
};
</script>

