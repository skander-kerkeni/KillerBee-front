<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/freezbe3.jfif')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/user.jpg" alt="" />
        </div>
        <h3 class="title">User1</h3>
        <p class="category">Administrator</p>
      
      </div>
    </div>
    <div class="section">
      <div class="container">
        
        <h3 class="title">Profile Informations</h3>
       
        <div    class="section section-signup">
    
  
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">User 1</h3>
            
            
          <form  @submit.prevent="submit">
            <p  style="
    font-size: 13px;
">{{ form.errorU }}</p>
            <fg-input
              class="no-border"
              placeholder="Username..."
              addon-left-icon="now-ui-icons users_circle-08"
               v-model="form.username"
            >
            </fg-input>
<p  style="
    font-size: 13px;
">{{ form.errorP }}</p>
            <fg-input
              class="no-border"
              placeholder="Password"
               v-model="form.password"
              type="password"
              addon-left-icon="now-ui-icons objects_key-25"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Confirm Password"
               v-model="form.passwordV"
              type="password"
              addon-left-icon="now-ui-icons objects_key-25"
            >
            </fg-input>
            <div class="card-footer text-center">
            <n-button v-on:click="submit" type="neutral" round size="lg">EDIT</n-button>
          </div>
          </form>
          </template>
          
        
        </card>
      </div>
      
    </div>
  </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { Tabs, TabPane } from '@/components';
import { Card, FormGroupInput, Button } from '@/components';
export default {
  name: 'profile',
  bodyClass: 'profile-page',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data () {
        return {
          form:{
            username:'',
            password:'',
            passwordV:'',
            errorU: '',
            errorP: ''
          }
        }
      },
    
  methods:{
    async submit(){
      if(!this.form.username && !this.form.password){
        
        this.form.errorU="Please enter your username and password"
        this.form.errorP=""
      }
     else if(!this.form.username){
        
        this.form.errorU="Please enter your username"
        this.form.errorP=""
      }else if(!this.form.password){
        this.form.errorU=""
        this.form.errorP="Please enter your password"
        
      }
       else if(this.form.password!=this.form.passwordV){
        this.form.errorU=""
        this.form.errorP="Wrong password"
        
      }else if(!this.form.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ){
        this.form.errorU=""
        this.form.errorP="Password must contain minimum eight characters, at least one lower and upper case and one number "
        
      }
      else{
        this.form.errorU=""
        this.form.errorP=""

      //let response  = axios.post('login',this.form);
      //console.log(response);
      
      }
    }

  }
};
</script>
<style></style>
