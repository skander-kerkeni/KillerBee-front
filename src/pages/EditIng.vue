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
          <h1 class="title">FreezBe Models </h1>
         
        </div>
      </div>
    </div>
    


 



    

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Edit Ingredient </h2>
       
        <form @submit.prevent="submit">
             <p class="text-danger" style="
    font-size: 13px;
">{{ form.errorG }}</p>
          <fg-input
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Name"
              v-model="form.name"
            >
            </fg-input>
              <p class="text-danger" style="
    font-size: 13px;
">{{ form.errorD }}</p>
            <fg-input
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Description"
              v-model="form.desc"
              
            >
            </fg-input>
           
            <div class="container">
             
             <n-button v-on:click="submit" type="primary" link>EDIT</n-button>
    </div>

         </form>
  
  
        
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';

export default {
  name: 'EditIng',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
   
    
  },
data () {
        return {
          form:{
            name:'',
            desc:'',
            
            errorG: '',
            errorD: '',
           
          }
        }
      },
    
  methods:{
    async submit(){
      if(!this.form.name || !this.form.desc){
        this.form.errorD=""
        this.form.errorG="Please fill all fildes"
        
      }
     else if(this.form.desc.length <=8 || this.form.desc.length >250){
        
        this.form.errorD="Description must contain minimum 8 characters and maximum 250 characters"
        this.form.errorG=""
      }
      else{
        this.form.errorG="Succ"
        this.form.errorD=""

      //let response  = axios.post('editModel',this.form);
      //console.log(response);
      
      }
    }

  }
};

</script>
<style></style>
