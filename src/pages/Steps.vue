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
          <h1 class="title">Steps</h1>
         
        </div>
      </div>
    </div>
    


 



    

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">List of steps</h2>
       
        <div class="row">
         

            <table class="table">
  <thead>
    <tr class="table-info">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(item,index) in info" :key="item.id">
      <th scope="row">{{index}}</th>
      <td>{{item['etap_nom']}}</td>
      <td>{{item['etap_description']}}</td>
     
      <td>
        <router-link v-bind:to="'/editStep/'+item['id']"  >
           <n-button   type="warning" link>EDIT</n-button>
          </router-link>
          <n-button  v-on:click="del(item['id'])" type="danger" link>DELETE</n-button>
      </td>
    </tr>
    
    
  </tbody>
</table>
<router-link to="/addStep">
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
import axios from 'axios';
export default {
  name: 'Steps',
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
    if (this.token == null) {
      router.push({ name: "login" });
    }
    axios
      .get('http://localhost:8000/Etapes')
      .then(response => (this.info = response.data))
  },
  methods: {
    
    del(x) {
       if(confirm("Do you really want to delete?")){
         axios
      .delete('http://localhost:8000/Etapes/delete/'+x)
      .then(response => (
       this.$router.push('../steps'),
      alert("Deleted")))
                
   }
    },
  }
  
};

</script>
<style></style>
