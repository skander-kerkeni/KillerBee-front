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
          <h1 class="title">Manufacturing Process</h1>
        </div>
      </div>
    </div>

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Edit a manufacturing process</h2>

        <form @submit.prevent="submit">
          <p class="text-danger" style="font-size: 13px">{{ form.errorG }}</p>

          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="Name"
            v-model="form.name"
          >
          </fg-input>

          <div class="col-6" style="margin-left: 24%">
            <p class="text-danger" style="font-size: 13px">{{ form.errorM }}</p>
            <select class="form-control" v-model="form.model">
              <option value="">{{ info["id_procede"] + "*" }}</option>
              <option value="Model1">Model1</option>
              <option value="Model2">Model2</option>
              <option value="Model3">Model3</option>
            </select>
          </div>
          <div style="margin-top: 2%"></div>
          <p class="text-danger" style="font-size: 13px">{{ form.errorD }}</p>
          <fg-input
            addon-left-icon="now-ui-icons text_caps-small"
            placeholder="Description"
            v-model="form.desc"
          >
          </fg-input>
          <div class="container">
            <div class="row">
              <div class="col col-lg-2">
                <a> Steps:</a>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step1</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step2</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step3</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step4</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step5</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step6</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step7</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step8</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step9</n-checkbox>
              </div>
              <div class="col col-lg-2">
                <n-checkbox>Step10</n-checkbox>
              </div>
            </div>
            <n-button v-on:click="submit" type="primary" link>EDIT</n-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput, Checkbox } from "@/components";
//import axios from 'axios';
import { Axios } from "../axios";

export default {
  name: "EditProcess",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      id: this.$route.params.id,
      info: null,
      form: {
        name: "",
        desc: "",
        model: "",
        errorM: "",
        errorG: "",
        errorD: "",
      },
    };
  },
  created() {
    Axios.get("/Procede/" + this.id).then(
      (response) => (
        (this.info = response.data),
        (this.form.name = this.info["pro_nom"]),
        (this.form.desc = this.info["pro_description"])
      )
    );
  },

  methods: {
    async submit() {
      if (!this.form.name || !this.form.desc) {
        this.form.errorD = "";
        this.form.errorM = "";
        this.form.errorG = "Please fill all fildes";
      } else if (this.form.model == "") {
        this.form.errorM = "Please choose a model";
        this.form.errorD = "";
        this.form.errorG = "";
      } else if (this.form.desc.length <= 8 || this.form.desc.length > 250) {
        this.form.errorM = "";
        this.form.errorD =
          "Description must contain minimum 8 characters and maximum 250 characters";
        this.form.errorG = "";
      } else {
        this.form.errorG = "";
        this.form.errorD = "";
        this.form.errorM = "";
        Axios.put("/Procede/update/" + this.id, {
          pro_nom: this.form.name,
          pro_description: this.form.desc,
          id_procede: this.form.model,
        }).then(
          (response) => {
            console.log(response);
            this.$router.push("../process");
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
