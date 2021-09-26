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
            v-model="form.username"
            name="username"
            id="username"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Username..."
              
              required:true
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
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
import axios from 'axios'
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data () {
        return {
          form:{
            username:'',
            password:'',
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
      }
     else  if(!this.form.password){
        this.form.errorU=""
        this.form.errorP="Please enter your password"
        
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
