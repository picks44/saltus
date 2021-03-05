<template>
  <div id="gfa" class="row p-md-5 pt-5">
    <div class="col-12 mb-3">
      <h2 class="text-center mt-3">Saltus Geared Front Attachment</h2>
      <hr class="underliner" />
    </div>
    <div class="col-12">
      <div class="row d-flex align-items-center">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-sm-3">
          <div class="carousel slide lazy border mb-3" data-ride="carousel">
            <div class="carousel-inner">
              <ImageCarousel
                v-for="(image, index) in CeImages"
                :key="image.id"
                :image="image"
                :index="index"
              />
            </div>
          </div>
          <div class="carousel slide lazy border" data-ride="carousel">
            <div class="carousel-inner">
              <ImageCarousel
                v-for="(image, index) in OeImages"
                :key="image.id"
                :image="image"
                :index="index"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">
          <p>
            Space-restricted tightening environments and other challenging
            applications make assembly increasingly strenuous. These
            accessibilty issues can be addressed with the use of designated
            fastening systems and this is where Saltus Geared Front Attachments
            come in. Thanks to our large portfolio of GFAs, with different
            dimensions, maximum output torque and number of gear stages, we will
            always offer the best solution to your application challenges. The
            Saltus GFA range consists of the following:
          </p>
          <ul class="first">
            <li>
              GFA offset closed-end solutions for cramped areas and Hi-Lite
              applications paired with output gear models to install not only
              regular bolts and nuts, but also Hold-and-Drive, frangible
              collars, and socket screws. With an optimized design of the GFAs,
              we offer the best performance-to-size ratio, productivity and
              ergonomics.
              <ul class="second">
                <li>
                  110° angle heads<br />An angle head with 110 degrees gives
                  better accessibility to cramped working areas and it improves
                  the ergonomics for the operator.
                </li>
                <li>
                  Quick-indexing adapters<br />The quick indexing adapter
                  enables repositioning of the GFA to different angles, allowing
                  the same tool access to cramped areas in multiple
                  applications, thus leading to optimum tightening.
                </li>
                <li>
                  Hold-and-Drive (HAD)<br />The GFA solution for HAD includes
                  pre-torque, shear-off, torque control with hexagonal or ASTER
                  bits. Output gear extension can be set to any value and
                  installed upward or downward
                </li>
              </ul>
            </li>
            <li>
              GFA offset open-end heads for tube-nut & cable-nut applications
              that come in many different sizes with a variable number of gear
              stages, maximum output torque and there are also counter clockwise
              models for left-threaded connections. These can be combined with
              various output gear models to install tube-nuts, B-nuts or
              cable-nuts with hexagonal or double hexagonal profiles. The output
              gears can be installed upward or downward and the extension set to
              any value for even better accessibility to the joint.
            </li>
          </ul>
          <p>
            Overall, we deliver the best performance packed in an optimized
            design. The use of a unique steel quality in combination with
            special mechanical surface treatment provides improved accuracy and
            higher resistance. Our patented solution with a nifty integrated
            magnet in the geared head for metal particle collection increases
            the product lifetime and the greasing intervals, allowing you to
            reduce total cost of ownership.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
import ImageCarousel from '@/components/ImageCarousel.vue'

export default {
  name: 'Gfa',
  components: {
    ImageCarousel
  },
  data() {
    return {
      CeImages: ImageService.getCeImages(),
      OeImages: ImageService.getOeImages()
    }
  }
}
</script>

<style scoped></style>
