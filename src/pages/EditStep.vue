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
          <h1 class="title">Manufacturing Process Steps </h1>
         
        </div>
      </div>
    </div>
    


 



    

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Edit a Step </h2>
       
       
         <form>
             
            
          <fg-input
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Name"
            >
            </fg-input>
             
            <fg-input
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Description"
            >
            </fg-input>
            <div class="container">
             <div class="row">
           
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
  name: 'EditStep',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]:Checkbox,
    
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
