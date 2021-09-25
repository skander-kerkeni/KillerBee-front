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
          <h1 class="title">This is our great company.</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">
              sdlfjsdkfjk ndskfdsfkldf sdlfkdskfjkdsf, sdkfjdskfjksdf dsjfksdjfkldsfdslfjdsf odsfdofidf lsdfksldf odfodsfiosdkflsdkfpo ssdofsdofdsfk
              dsfsdfljdsf dfsdfopsdfksd,vf sdfkdjfksdfnldsf sdfkjsdfksdf sdfjdsfkldfirff dfldkfdkfif dfdfjdkf dfkldf
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/ab1.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "dlfkldf klmdkflmjdfml dlfldjflmd jlmdfjlmdjf ldj jdf jdlmfjdlf 
                  ldfldf dfldjfldflmd jldjfldfld,fm ld ldjf ldjflmdfldf 
                  dfldfk mldkfl dkflkdf"
                  <br />
                  <br />
                  <small>-FreezBe</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/ab4.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/ab6.jpg')"
              ></div>
              <h3>
                ldfkdlfk ldflkdl mfkdmlfk ldkf ldkfml dkfl fldkf ldkfldkf lmdkfldf kldkf dlkf ldkf mdlfk
              </h3>
              <p>
                dflkd kdlfk dlmfk lmdfk ldkf lmdk lmdkf ldkflmdfk ldkflmdkfl kldfkldmfklmdkflmdkf kdf kjfkldjfkd  lkndfkdnfkldnf kdfjkdf lkdfjdlkfj dlkfjl df dfkldfk
                skdldklskdl sdklsdlk sdlk sdklsdklsd sd,flskd sldklds sd sdkls
              </p>
              <p>
                dfl;,d lfdfkdjfkld kldjfkldlkdfkd kdflkdkfdkfl kdf kjfkldjfkd  lkndfkdnfkldnf kdfjkdf lkdfjdlkfj dlkfjl df dfkldfk
                skdldklskdl sdklsdlk sdlk sdklsdklsd sd,flskd sldklds sd sdklsdl kdf kjfkldjfkd  lkndfkdnfkldnf kdfjkdf lkdfjdlkfj dlkfjl df dfkldfk
                skdldklskdl sdklsdlk sdlk sdklsdklsd sd,flskd sldklds sd sdkls
              </p>
              <p>
                dfl;,d lfdfkdjfkld kldjfkldlkdfkd kdflkdkfdkfl kdf kjfkldjfkd  lkndfkdnfkldnf kdfjkdf lkdfjdlkfj dlkfjl df dfkldfk
                skdldklskdl sdklsdlk sdlk sdklsdklsd sd,flskd sldklds sd sdklsdl
                kdf kjfkldjfkd  lkndfkdnfkldnf kdfjkdf lkdfjdlkfj dlkfjl df dfkldfk
                skdldklskdl sdklsdlk sdlk sdklsdklsd sd,flskd sldklds sd sdkls
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'Contact',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
};
</script>
<style></style>
