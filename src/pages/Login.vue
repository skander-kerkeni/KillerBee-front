<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login1.jpeg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/freezbe.png'" alt="" />
            </div>
           
      <form @submit.prevent="submit"
    
      >    
      
    
    
  <p class="text-danger" style="
    font-size: 13px;
">{{ form.errorU }}</p>
        
          
            <fg-input
            v-model="form.email"
            name="email"
            id="email"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Email..."
              
             
            >
            
            </fg-input>
 <p class="text-danger" style="
    font-size: 13px;
">{{ form.errorP }}</p>
            <fg-input
            v-model="form.password"
            name="password"
            id="password"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons objects_key-25"
              placeholder="Password..."
              type="password"
            >
            </fg-input>

            
              <div class="card-footer text-center">
               
                <a
                  v-on:click="submit"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Get Started</a
                >
                
              </div>
              
              <div class="pull-right">
                <h6>
                  <a href="/" class="link footer-link">Forget Password?</a>
                </h6>
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
    <main-footerL></main-footerL>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';

import MainFooterL from '@/layout/MainFooterL';
import {Axios} from '../axios';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooterL,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data () {
        return {
          form:{
            email:'',
            password:'',
            errorU: '',
            errorP: ''
          }
        }
      },
    
  methods:{
    async submit(){
      if(!this.form.email && !this.form.password){
        
        this.form.errorU="Please enter your email and password"
        this.form.errorP=""
      }
     else if(!this.form.email){
        
        this.form.errorU="Please enter your email"
        this.form.errorP=""
      }
     else  if(!this.form.password){
        this.form.errorU=""
        this.form.errorP="Please enter your password"
        
      }
      else{
        this.form.errorU=""
        this.form.errorP=""

    Axios.post('/login/auth', {
  email: this.form.email,
  password: this.form.password,
 
  
})
.then((response) => {
    if (response.data=="identifiant ou mot de passe incorrect")
    this.form.errorU="Wrong informations!"
  else{
   
      window.localStorage.setItem('user-token', response.data.api_token)
     
      this.$router.push('../home')
  }
   
}, (error) => {
 
  console.log(error);
});
     
      
      }
    }

  }
};
</script>
<style></style>
