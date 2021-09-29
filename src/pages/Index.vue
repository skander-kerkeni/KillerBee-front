<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/freezbeeB2.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/freezbe.png" alt="" />
          <h1 class="h1-seo">FreezBe</h1>
          <h3>Create your awesome FreezBe</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Parallax } from "@/components";
import router from "@/router";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    Parallax,
  },
  data() {
    return {
      token: window.localStorage.getItem("user-token"),
    };
  },
  mounted() {
    console.log(this.token);
    if (this.token == null) {
      router.push({ name: "login" });
    }
  },
};
</script>
<style></style>
