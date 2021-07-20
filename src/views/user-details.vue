<template>
    <section class="user-details">

        <section>
            <div class="main-layout">

            <div class="user-heading flex space-between">
            
               <div class="content">
                   <h3>Hi I'm {{user.username}}</h3>
                   <p>Joined in 2021</p>
                   <a class="edit-profile-button">Edit profile</a>
               </div>
               <div class="profile-container flex column align-center">
                   <div class="profile-img-container">
                       <img :src="user.imgUrl" alt="">
                   </div>
                   <a href="" class="update-photo-button">Update photo</a>
               </div>
            </div>
            <div class="reviews-container">
                <div class="head flex align-center">
                    <i class="fas fa-star"></i>
                    <p>{{relativeReviews.length}} reviews</p>
                </div>
                <review-list :reviews="relativeReviews" :showTime="true"/>
            </div>
            </div>
        </section>
    </section>
</template>
 <script>
     import {yachts} from '../../data/yacht'
     import reviewList from '../cmps/review-list.vue'
 
 export default {
   
    computed: {
        user(){
            return this.$store.getters.loggedinUser
        },
        relativeReviews(){
            return yachts.reduce((accum, {reviews})=> {
                const currRelatedReviews =  reviews.filter(({by})=> by._id === this.user._id)
                return [...accum, ...currRelatedReviews]
            }, [])
        },
    },
    components: {
        reviewList
    }
 }
 </script>

