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
    <tr>
      <th scope="row">1</th>
      <td>Process 1</td>
       <td>Model 15</td>
      <td>Desc 1</td>
     <td>Step1 , Step5 , Step6</td>
      <td>Validated</td>
      <td>
         
                    <n-button  v-on:click="validation" type="success" link>VALIDATE</n-button>

          <router-link to='/editProcess'>
        <n-button   type="warning" link>EDIT</n-button>
          </router-link>
         <n-button  v-on:click="del" type="danger" link>DELETE</n-button>
      </td>
    </tr>
    <tr class="table-danger">
      <th scope="row">2</th>
      <td>Process 2</td>
      <td>Model 2</td>
      <td>Desc 2</td>
    <td>Step1 , Step8 , Step11</td>
    <td>Not Validated</td>
      <td>
          

          
          <n-button  v-on:click="validation" type="success" link>VALIDATE</n-button>
          <router-link to='/editProcess'>
           <n-button   type="warning" link>EDIT</n-button>
          </router-link>
          <n-button  v-on:click="del" type="danger" link>DELETE</n-button>
         
      </td>
    </tr>
      <tr>
      <th scope="row">1</th>
      <td>Process 3</td>
       <td>Model 7</td>
      <td>Desc 3</td>
     <td>Step1 , Step5 , Step6</td>
      <td>Validated</td>
      <td>
         
                    <n-button  v-on:click="validation" type="success" link>VALIDATE</n-button>

          <router-link to='/editProcess'>
        <n-button   type="warning" link>EDIT</n-button>
          </router-link>
         <n-button  v-on:click="del" type="danger" link>DELETE</n-button>
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
export default {
  name: 'Process',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    validation: function(event) {
       if(confirm("Do you really want to validate?")){

                alert('Validated!');
   }
    },
    del: function(event) {
       if(confirm("Do you really want to delete?")){

                alert('Deleted!');
   }
    },
  }
  
};


</script>
<style></style>
