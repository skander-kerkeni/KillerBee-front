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
        <h2 class="title">Edit a manufacturing process </h2>
       
       
         <form>
             
            
          <fg-input
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Name"
            >
            </fg-input>
            <div class="col-6" style="
    margin-left: 24%;
">
<select class="form-control ">
  <option>Choose Your Model</option>
  <option> Model1</option>
  <option> Model2</option>
  <option> Model3</option>
</select>

</div>
<div style="
    margin-top: 2%;
">
</div>
             
            <fg-input
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Description"
            >
            </fg-input>
            <div class="container">
             <div class="row">
            <div class="col col-lg-2">
                 <a> Steps:</a>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked1">Step1</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step2</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step3</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step4</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step5</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step6</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step7</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step8</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step9</n-checkbox>
                 </div>
                 <div class="col col-lg-2">
                 <n-checkbox v-model="unchecked">Step10</n-checkbox>
                 </div>

             </div>
             <n-button type="primary" link>EDIT</n-button>
    </div>

         </form>
  
        
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput,Checkbox } from '@/components';
export default {
  name: 'EditProcess',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]:Checkbox
  },
  data () {
        return {
          unchecked: false,
          checked: true,
          unchecked1: false,
          checked1: true
        }
      }
};

</script>
<style></style>
