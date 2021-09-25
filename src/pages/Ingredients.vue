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
          <h1 class="title">Ingredients</h1>
         
        </div>
      </div>
    </div>
    


 



    

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">List of ingredients</h2>
       
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
    <tr >
      <th scope="row">1</th>
      <td>ing 1</td>
      <td>Desc 1</td>
     
      <td>
        <router-link to='/editIng'>
           <n-button   type="warning" link>EDIT</n-button>
          </router-link>
          <n-button  v-on:click="del" type="danger" link>DELETE</n-button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>ing 2</td>
      <td>Desc 2</td>
    
      <td>
          <router-link to='/editIng'>
           <n-button   type="warning" link>EDIT</n-button>
          </router-link>
          <n-button  v-on:click="del" type="danger" link>DELETE</n-button>
      </td>
    </tr>
    
  </tbody>
</table>
<router-link to='/addIng'>
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
  name: 'Ingredients',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  
};

</script>
<style></style>
