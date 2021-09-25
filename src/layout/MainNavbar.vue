<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/home">
        FreezBe
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        
      </el-popover>
    </template>
    <template slot="navbar-menu">
      
      
      <drop-down
              tag="li"
              title="FreezBe"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
      <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
        <nav-link to="/models">
          <i class="now-ui-icons education_paper"></i> Models
        </nav-link>
        <nav-link to="/ingredients">
          <i class="now-ui-icons education_paper"></i> Ingredients
        </nav-link>
        <nav-link to="/process">
          <i class="now-ui-icons education_paper"></i> Manufacturing process
        </nav-link>
        <nav-link to="/">
          <i class="now-ui-icons users_circle-08"></i> Logout
        </nav-link>
        
      </drop-down>
     

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="#"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="#"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="#"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
