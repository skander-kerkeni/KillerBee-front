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
        <h2 class="title">Edit a FreezBe Model</h2>

        <form @submit.prevent="submit">
          <p class="text-danger" style="font-size: 13px">{{ form.errorG }}</p>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            v-model="form.name"
          >
          </fg-input>
          <p class="text-danger" style="font-size: 13px">{{ form.errorD }}</p>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="Desc"
            v-model="form.desc"
          >
          </fg-input>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="pUHT"
            v-model="form.puht"
            type="number"
          >
          </fg-input>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="Range"
            v-model="form.range"
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
import { Button, FormGroupInput } from "@/components";
import { Axios } from "../axios";
export default {
  name: "EditModel",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },

  data() {
    return {
      id: this.$route.params.id,
      info: null,
      token: window.localStorage.getItem("user-token") ,
      form: {
        name: null,
        desc: "",
        puht: "",
        range: "",
        errorG: "",
        errorD: "",
      },
    };
  },
  created() {
    Axios.get("/Modele/" + this.id+"?api_token="+this.token).then(
      (response) => (
        (this.info = response.data),
        (this.form.name = this.info["module_nom"]),
        (this.form.desc = this.info["module_description"]),
        (this.form.puht = this.info["module_pUHT"]),
        (this.form.range = this.info["module_gamme"])
      )
    );
  },

  methods: {
    async submit() {
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
        this.form.errorD = "";
        this.form.errorG = "";
        Axios.put("/Modele/update/" + this.id, {
          api_token: this.token,
          module_nom: this.form.name,
          module_description: this.form.desc,
          module_pUHT: this.form.puht,
          module_gamme: this.form.range,
        }).then(
          (response) => {
            console.log(response);
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
