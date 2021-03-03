<template>
  <div id="about" class="row p-md-5 pt-5">
    <div class="col-12 mb-3">
      <h2 class="text-center mt-3">About us</h2>
      <hr class="underliner" />
    </div>
    <div id="boilerplate" class="col-12 mb-4">
      <blockquote class="blockquote">
        <p class="text-center mb-4">
          <img
            alt="SALTUS"
            src="@/assets/img/saltus-logo-green.svg"
            height="50"
            loading="lazy"
          />
        </p>
        <p>
          Saltus has more than 100 years of experience serving customers
          globally with assembly solutions. The focus of Saltus today is on
          Sockets & Bits and Geared Front Attachments (GFAs) for power tools.
          The Saltus solutions are serving as the link between your tool and
          your customer application securing a quality result with high
          productivity. Having in-house manufacturing including heat treatment
          we are able to secure the lead time and quality of our products.
        </p>
        <p>
          With our highly motivated employees ready to support you - Saltus
          Solutions is the technology for you!
        </p>
        <p>
          <strong>Customized solutions that add value</strong><br />We are
          creating the link between the core product/power tool and the customer
          application. It can be a socket, a geared front attachment or any
          customized variant required by your application. In many cases,
          special solutions are needed in order to do the job. With the solid
          experience of our skilled members in the competence centers of the
          Saltus Sockets & Bits and Geared Front Attachments paired with the
          efficient processes that we have in place, we are able develop what
          you need with high quality and in a timely manner.
        </p>
        <p>
          At our competence centers, the dedicated teams handle technical
          customer support, product design and production control. Our
          specialists can design a solution that not only meets your needs but
          also helps optimize your production and adds value to your business.
        </p>
        <p>
          <strong>Developing the solutions of the future</strong><br />Our
          experts work continuously to develop more innovative products and
          solutions in order to meet the tightening needs of the future.
        </p>
      </blockquote>
    </div>
    <div id="marketing" class="col-12">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="text-center">
            <span class="saltus-color"><fa icon="users" size="5x"></fa></span>
            <h3 class="mt-2">Our people</h3>
          </div>
          <p>
            With our extensive application knowledge, we are able to support you
            with your daily challenges. Our agile teams, which operate in a
            cross-functional setup, secure efficient information flow granting
            successful results for your special solutions. We are able to
            understand your application needs and deliver solutions with speed
            and quality.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="text-center">
            <span class="saltus-color"><fa icon="cogs" size="5x"></fa></span>
            <h3 class="mt-2">Our operations</h3>
          </div>
          <p>
            Our operations include complete control of the supply chain with
            in-house manufacturing. We offer flexibility in the logistics chain,
            which spans from off-the-shelf delivery to design of highly
            customized solutions.
          </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="text-center">
            <span class="saltus-color"
              ><fa icon="check-double" size="5x"></fa
            ></span>
            <h3 class="mt-2">Our manufacturing expertise</h3>
          </div>
          <p>
            Our extensive experience in gear manufacturing along with advanced
            test and calibration services guarantee the superior performance of
            our products and grant you sustainable productivity.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#about blockquote.blockquote {
  padding: 30px;
  border-left: 5px solid #007a57;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
