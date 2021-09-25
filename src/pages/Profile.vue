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
        <p class="category">Role</p>
      
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
            
            
          </template>
          <template>
            <fg-input
              class="no-border"
              placeholder="Username..."
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Password"
              
              type="password"
              addon-left-icon="now-ui-icons objects_key-25"
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Confirm Password"
              
              type="password"
              addon-left-icon="now-ui-icons objects_key-25"
            >
            </fg-input>
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg">EDIT</n-button>
          </div>
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
  }
};
</script>
<style></style>
