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
          <h1 class="title">Manufacturing Process </h1>
         
        </div>
      </div>
    </div>
    


 



    

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">List of manufacturing process </h2>
       
        <div class="row">
         

         <table class="table">
  <thead>
    <tr class="table-info">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
      <th scope="col">Description</th>
       <th scope="col">Steps</th>
       <th scope="col">Validation</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in info" :key="item.id">
      <th scope="row">{{index}}</th>
      <td>{{item['pro_nom']}}</td>
       <td>{{item['id_procede']}}</td>
      <td>{{item['pro_description']}}</td>
     <td>Step1 , Step5 , Step6</td>
      <td>Validated</td>
      <td>
         
                    <n-button  v-on:click="validation(item['id'])" type="success" link>VALIDATE</n-button>

          <router-link v-bind:to="'/editProcess/'+item['id']" >
        <n-button   type="warning" link>EDIT</n-button>
          </router-link>
         <n-button  v-on:click="del(item['id'])" type="danger" link>DELETE</n-button>
      </td>
    </tr>
   
      
    
  </tbody>
</table>

<router-link to='/steps'>
<n-button type="info" link>GENERATE STEPS</n-button>

</router-link>
<router-link to='/addProcess'>
 <n-button type="info" link>ADD</n-button>
</router-link>
  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import axios from 'axios';
export default {
  name: 'Process',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
   data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/Procede')
      .then(response => (this.info = response.data))
  },
  methods: {
    validation: function(event) {
       if(confirm("Do you really want to validate?")){

                alert('Validated!');
   }
    },
    del(x) {
       if(confirm("Do you really want to delete?")){
         axios
      .delete('http://localhost:8000/Procede/delete/'+x)
      .then(response => (
       this.$router.push('../process'),
      alert("Deleted")))
                
   }
    },
  }

  
};


</script>
<style></style>
