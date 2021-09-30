<template>

  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/freezbe3.jfif')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">FreezBe Models</h1>
         
        </div>
      </div>
    </div>
    


 



    

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">List of models</h2>
       
        <div class="row">
         

         <table class="table">
  <thead>
    <tr class="table-info">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">pUHT</th>
      <th scope="col">Range</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
 
    <tr v-for="(item,index) in info" :key="item.id">
         
      <th scope="row">{{index}}</th>
      <td>{{item['module_nom']}}</td>
      <td>{{item['module_description']}}</td>
      <td>{{item['module_pUHT']}}</td>
      <td>{{item['module_gamme']}}</td>
      <td>
        <router-link v-bind:to="'/editModel/'+item['id']"  >
           <n-button   type="warning" link>EDIT</n-button>
          </router-link>
          <n-button  v-on:click="del(item['id'])" type="danger" link>DELETE</n-button>
      </td>
     
    </tr>
    
    
  </tbody>
</table>
<router-link to="/addModel">

 <n-button type="info" link>ADD</n-button>

</router-link>

  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import router from "@/router";
import {Axios} from '../axios';

export default {
  name: 'Models',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data () {
    return {
      token: window.localStorage.getItem("user-token") ,
      info: null
    }
  },

  mounted () {
   
console.log(this.token)
    Axios
      .get('/Modele?api_token='+this.token)
      .then(response => (
        console.log(response.data ),
        this.info = response.data
        ))
  },
  methods: {
    
    del(x) {
       if(confirm("Do you really want to delete?")){
         Axios
      .delete('/Modele/delete/'+x,
      {data: {api_token: this.token}})
      .then(response => (
      
      this.$router.go()	),
       )
       
   }
    },
  }
  
};

</script>
<style></style>
