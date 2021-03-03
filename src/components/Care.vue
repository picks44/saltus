<template>
  <div id="care" class="row p-md-5 pt-5">
    <div class="col-12 mb-3">
      <h2 class="text-center mt-3">Care and Maintenance</h2>
      <hr class="underliner" />
    </div>
    <div class="col-12">
      <div class="row d-flex align-items-center">
        <div class="col-sm-12 col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            atque delectus distinctio facere, fuga fugiat impedit ipsum
            laboriosam neque nihil non omnis quae, totam. Ad minima quaerat quas
            vero!
          </p>
          <DigitalTwinForm />
        </div>
        <div class="col-sm-12 col-md-6 text-center">
          <img
            src="@/assets/img/image_contact.jpg"
            class="img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="modal fade" id="notAvailable" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title">Serial Number Not Found</h5>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <p id="message"></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary rounded-0"
              data-dismiss="modal"
            >
              Close
            </button>
            <a class="btn btn-saltus" href="mailto:#" target="_blank"
              >Ask Your Local Representative</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DigitalTwinForm from '@/components/DigitalTwinForm.vue'

export default {
  name: 'Care',
  components: {
    DigitalTwinForm
  }
}
</script>

<style scoped></style>
