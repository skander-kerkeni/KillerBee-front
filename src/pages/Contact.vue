<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/ab9.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Contact US</h1>
          
        </div>
      </div>
    </div>
   <div class="section section-tabs">
    <div class="container">
      
      <div class="row">
        
        <div class="col-md-10 ml-auto col-xl-6 mr-auto">
          
          <div class="card">
            <tabs
              centered
              type="neutral"
              tab-nav-wrapper-classes="card-header"
              tab-content-classes="card-body text-center"
              data-background-color="orange"
            >
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons ui-1_send"></i> Location
                </template>
                <p>
                  
                  ddkkj lkddkjd
                </p>
              </tab-pane>
              <tab-pane>
                <template slot="label">
                  <i class="now-ui-icons tech_mobile"></i> Phone
                </template>
                <p>
                   +33 97 54 65 32 15
                </p>
              </tab-pane>
              
              
            </tabs>
          </div>
        
        </div>
      </div>
    </div>
  </div>
    
  </div>
</template>
<script>
import {  Tabs, TabPane } from '@/components';

export default {
  name : 'Contact',
  components: {
   
    Tabs,
    TabPane
  }
};
</script>
<style></style>
