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
          <h1 class="title">FreezBe Models</h1>
        </div>
      </div>
    </div>

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Add a FreezBe Model</h2>

        <form @submit.prevent="submit">
          <p class="text-danger" style="font-size: 13px">{{ form.errorG }}</p>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="Name"
            v-model="form.name"
          >
          </fg-input>
          <p class="text-danger" style="font-size: 13px">{{ form.errorD }}</p>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="Description"
            v-model="form.desc"
          >
          </fg-input>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="pUHT"
            type="number"
            v-model="form.puht"
          >
          </fg-input>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="Range"
            v-model="form.range"
          >
          </fg-input>
          <div class="container">
            <n-button v-on:click="submit" type="primary" link>ADD</n-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import { Axios } from "../axios";
import router from "@/router";
export default {
  name: "AddModel",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      token: window.localStorage.getItem("user-token") ,
      form: {
        name: "",
        desc: "",
        puht: "",
        range: "",
        errorG: "",
        errorD: "",
      },
    };
  },
 mounted() {
    if (this.token == null) {
      router.push({ name: "login" });
    }
  },
  methods: {
    async submit() {
      console.log("display form", this.form);
      if (
        !this.form.name ||
        !this.form.desc ||
        !this.form.puht ||
        !this.form.range
      ) {
        this.form.errorD = "";
        this.form.errorG = "Please fill all fildes";
      } else if (this.form.desc.length <= 8 || this.form.desc.length > 250) {
        this.form.errorD =
          "Description must contain minimum 8 characters and maximum 250 characters";
        this.form.errorG = "";
      } else {
        Axios.post("/Modele/create", {
          api_token: this.token,
          module_nom: this.form.name,
          module_description: this.form.desc,
          module_pUHT: this.form.puht,
          module_gamme: this.form.range,
        }).then(
          (response) => {
            this.$router.push("../models");
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
  },
};
</script>
<style></style>
