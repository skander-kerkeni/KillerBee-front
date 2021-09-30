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
        <h2 class="title">Add a manufacturing process</h2>

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
              <option  value="">Choose a model!</option>
              <option  v-for="(item) in info" :key="item.id" v-bind:value="item['module_nom']">{{item['module_nom']}}</option>
              
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
            <n-button v-on:click="submit" type="primary" link>ADD</n-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput, Checkbox, DropDown } from "@/components";
import { Axios } from "../axios";

export default {
  name: "AddProcess",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
    [DropDown.name]: DropDown,
  },
  data() {
    return {
     token: window.localStorage.getItem("user-token") ,
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
  mounted () {
    Axios
      .get('/Modele?api_token='+this.token)
      .then(response => (this.info = response.data))
  },

  methods: {
    async submit() {
      console.log(this.form);
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
        Axios.post("/Procede/create", {
          pro_nom: this.form.name,
          pro_description: this.form.desc,
          module_nom: this.form.model,
        }).then(
          (response) => {
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
