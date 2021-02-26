<template>
  <div class="digital-twin-form">
    <form id="twin-form" v-on:submit.prevent="submitForm">
      <div class="input-group mb-3">
        <input
          id="serialNumber"
          v-model="form.serial"
          type="search"
          class="form-control"
          placeholder="Type Your Serial Number"
        />
        <div class="input-group-append">
          <button class="btn btn-saltus" type="submit">Search</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import jQuery from 'jquery'
const $ = jQuery
window.$ = $

export default {
  name: 'DigitalTwinForm',
  data() {
    return {
      form: {
        serial: '',
        type: 'standard',
        locale: 'en'
      }
    }
  },
  methods: {
    submitForm() {
      ApiService.check(this.form)
        .then(response => {
          window.open(response.data.uri)
        })
        .catch(error => {
          if (error.response) {
            if (404 === error.response.status) {
              $('#notAvailable').on('show.bs.modal', function() {
                $(this)
                  .find('.modal-body p#message')
                  .text(error.response.data.detail)
              })
              $('#notAvailable').modal('show')
            }
          }
        })
    }
  }
}
</script>

<style scoped>
.btn-saltus {
  background-color: #007a57;
  border-color: #007a57;
  color: #fff;
  border-radius: 0;
}

.btn-saltus:hover {
  color: #fff;
  background-color: #003326;
  border-color: #003326;
}

.form-control {
  border-radius: 0;
}

.form-control:focus {
  border-color: #007a57;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(0 122 87 / 25%);
}
</style>
