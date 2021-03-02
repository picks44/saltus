<template>
  <div class="container-fluid">
    <div id="video" class="row d-none d-md-block">
      <video loop muted autoplay controlsList="nodownload">
        <source src="@/assets/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="welcome" class="text-center">
        <h1>
          <img
            alt="SALTUS"
            src="@/assets/img/saltus-logo-white.svg"
            height="80"
            loading="lazy"
          />
          <span>SALTUS</span>
        </h1>
        <p class="baseline">
          <strong>T</strong>ECHNOLOGY FOR YO<strong>U</strong>
        </p>
        <ul>
          <li>
            <a
              class="btn btn-lg btn-saltus mx-1"
              href="#about"
              title="About us"
              v-smooth-scroll
              >About us</a
            >
          </li>
          <li>
            <a
              class="btn btn-lg btn-saltus mx-1"
              href="#gfa"
              title="Geared Front Attachment"
              v-smooth-scroll
              >Geared Front Attachment</a
            >
          </li>
          <li>
            <a
              class="btn btn-lg btn-saltus mx-1"
              href="#socket"
              title="Socket & Bits"
              v-smooth-scroll
              >Socket & Bits</a
            >
          </li>
          <li>
            <a
              class="btn btn-lg btn-saltus mx-1"
              href="#care"
              title="Care and Maintenance"
              v-smooth-scroll
              >Care and Maintenance</a
            >
          </li>
        </ul>
        <p class="go-down">
          <a href="#about" title="About us" v-smooth-scroll
            ><fa icon="chevron-down"></fa
          ></a>
        </p>
      </div>
    </div>

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
            creating the link between the core product/power tool and the
            customer application. It can be a socket, a geared front attachment
            or any customized variant required by your application. In many
            cases, special solutions are needed in order to do the job. With the
            solid experience of our skilled members in the competence centers of
            the Saltus Sockets & Bits and Geared Front Attachments paired with
            the efficient processes that we have in place, we are able develop
            what you need with high quality and in a timely manner.
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
              With our extensive application knowledge, we are able to support
              you with your daily challenges. Our agile teams, which operate in
              a cross-functional setup, secure efficient information flow
              granting successful results for your special solutions. We are
              able to understand your application needs and deliver solutions
              with speed and quality.
            </p>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="text-center">
              <span class="saltus-color"><fa icon="cogs" size="5x"></fa></span>
              <h3 class="mt-2">Our operations</h3>
            </div>
            <p>
              Our operations include complete control of the supply chain with
              in-house manufacturing. We offer flexibility in the logistics
              chain, which spans from off-the-shelf delivery to design of highly
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
              test and calibration services guarantee the superior performance
              of our products and grant you sustainable productivity.
            </p>
          </div>
        </div>
      </div>
    </div>

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
                  :class="{ active: index === 0 }"
                  :key="image.id"
                  :image="image"
                />
              </div>
            </div>
            <div class="carousel slide lazy border" data-ride="carousel">
              <div class="carousel-inner">
                <ImageCarousel
                  v-for="(image, index) in OeImages"
                  :class="{ active: index === 0 }"
                  :key="image.id"
                  :image="image"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <p>
              Space-restricted tightening environments and other challenging
              applications make assembly increasingly strenuous. These
              accessibilty issues can be addressed with the use of designated
              fastening systems and this is where Saltus Geared Front
              Attachments come in. Thanks to our large portfolio of GFAs, with
              different dimensions, maximum output torque and number of gear
              stages, we will always offer the best solution to your application
              challenges. The Saltus GFA range consists of the following:
            </p>
            <ul class="first">
              <li>
                GFA offset closed-end solutions for cramped areas and Hi-Lite
                applications paired with output gear models to install not only
                regular bolts and nuts, but also Hold-and-Drive, frangible
                collars, and socket screws. With an optimized design of the
                GFAs, we offer the best performance-to-size ratio, productivity
                and ergonomics.
                <ul class="second">
                  <li>
                    110° angle heads<br />An angle head with 110 degrees gives
                    better accessibility to cramped working areas and it
                    improves the ergonomics for the operator.
                  </li>
                  <li>
                    Quick-indexing adapters<br />The quick indexing adapter
                    enables repositioning of the GFA to different angles,
                    allowing the same tool access to cramped areas in multiple
                    applications, thus leading to optimum tightening.
                  </li>
                  <li>
                    Hold-and-Drive (HAD)<br />The GFA solution for HAD includes
                    pre-torque, shear-off, torque control with hexagonal or
                    ASTER bits. Output gear extension can be set to any value
                    and installed upward or downward
                  </li>
                </ul>
              </li>
              <li>
                GFA offset open-end heads for tube-nut & cable-nut applications
                that come in many different sizes with a variable number of gear
                stages, maximum output torque and there are also counter
                clockwise models for left-threaded connections. These can be
                combined with various output gear models to install tube-nuts,
                B-nuts or cable-nuts with hexagonal or double hexagonal
                profiles. The output gears can be installed upward or downward
                and the extension set to any value for even better accessibility
                to the joint.
              </li>
            </ul>
            <p>
              Overall, we deliver the best performance packed in an optimized
              design. The use of a unique steel quality in combination with
              special mechanical surface treatment provides improved accuracy
              and higher resistance. Our patented solution with a nifty
              integrated magnet in the geared head for metal particle collection
              increases the product lifetime and the greasing intervals,
              allowing you to reduce total cost of ownership.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="socket" class="row p-md-5 pt-5">
      <div class="col-12 mb-3">
        <h2 class="text-center mt-3">
          Saltus sockets-bits for Industrial Power Tools
        </h2>
        <hr class="underliner" />
      </div>
      <div class="col-12">
        <div class="row d-flex align-items-center">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-sm-3">
            <div class="embed-responsive embed-responsive-16by9">
              <video controls controlsList="nodownload">
                <source src="@/assets/video/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <p>
              Saltus support you with the correct sockets-bits for any customers
              tightening application. We have a wide standard portfolio with
              2600 Sockets & Bits from tiny 4 mm half-moon bits for assembling
              state-of-the-art smartphones up to 2 1/2" HEX Sockets for the
              manufacture and maintenance of windmills or the full range of
              highly durable sockets-bits for automotive production. For a great
              part of our standard Sockets & Bits range we offer our safe
              ROTACTION concept with free rotating sleeves. Furthermore we offer
              a range of Hold and Drive and Flush Socket solutions. If you do
              not find solutions to your assembly challenges among our standard
              products, our Competence Center Sockets & Bits team will help you
              with a customized solution.
            </p>
            <h3>Features</h3>
            <ul class="first">
              <li>sockets-bits with outstanding quality and durability</li>
              <li>
                ROTACTION concept with free rotating sleeves increase safety at
                work
              </li>
            </ul>
            <h3>Benefits</h3>
            <ul class="first">
              <li>
                Wide range of standard sockets-bits from tiny 4 mm half-moon
                bits up to 2 ½” HEX Sockets for any customers tightening
                application
              </li>
              <li>
                Full range of sockets-bits for automotive production that are
                characterized by their durability.
              </li>
              <li>Wide product range for special applications</li>
              <li>Stock kept products with excellent delivery performance</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <h3 class="text-center">
          Saltus standard portfolio of machine-operated sockets-bits
        </h3>
        <p class="text-center">
          Below you have a general overview for the different standard articles
          we offer:
        </p>
        <div id="accordion" class="row d-flex justify-content-center">
          <div
            class="col-6 col-sm-6 col-md-2 text-center"
            data-toggle="collapse"
            data-target="#socket-A"
            aria-expanded="false"
          >
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/A.jpg"
              alt="Sockets"
              loading="lazy"
            />
            <p><strong>Sockets</strong></p>
          </div>
          <div
            class="col-6 col-sm-6 col-md-2 text-center"
            data-toggle="collapse"
            data-target="#socket-B"
            aria-expanded="false"
          >
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/B.jpg"
              alt="Bit Sockets"
              loading="lazy"
            />
            <p><strong>Bit sockets</strong></p>
          </div>
          <div
            class="col-6 col-sm-6 col-md-2 text-center"
            data-toggle="collapse"
            data-target="#socket-C"
            aria-expanded="false"
          >
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/C.jpg"
              alt="Extensions"
              loading="lazy"
            />
            <p><strong>Extensions</strong></p>
          </div>
          <div
            class="col-6 col-sm-6 col-md-2 text-center"
            data-toggle="collapse"
            data-target="#socket-D"
            aria-expanded="false"
          >
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/D.jpg"
              alt="Adapters"
              loading="lazy"
            />
            <p><strong>Adapters</strong></p>
          </div>
          <div
            id="socket-A"
            class="col-12 collapse text-left"
            data-parent="#accordion"
          >
            <h4>Sockets</h4>
            <p>
              Sockets are characterized by a female square drive at the input
              end, and are available from 1/4" up-to 2.1/2". Saltus sockets are
              ideally suited for power tools including handheld tools, fixture
              stations and robotic systems.
            </p>
            <p><strong>Output drives</strong></p>
            <ul class="first">
              <li>
                Sockets for hex, surface drive, double hex, Torx® and Torx Plus®
                screws
              </li>
              <li>Available in standard metric and (SAE) sizes</li>
            </ul>
            <p>
              <small
                >Torx®, Torx Plus® are registered trademarks of Acument
                Intellectual Properties. LLC.</small
              >
            </p>
            <p><strong>Optional features</strong></p>
            <ul class="first">
              <li>
                Features available e.g., with different magnet types, lead in
                chamfer, guided, thin walled, ROTACTION and different lengths
                for accessibility
              </li>
            </ul>
          </div>
          <div
            id="socket-B"
            class="col-12 collapse text-left"
            data-parent="#accordion"
          >
            <h4>Bit sockets</h4>
            <p>
              When a socket is combined with a bit, it is known as a bit socket.
              Bit sockets are characterized by a square drive at the input end
              and are available in the range of 3/8" and 1".
            </p>
            <p><strong>Output drives</strong></p>
            <ul class="first">
              <li>Bit sockets for hex, XZN, Torx® and Torx Plus® screws</li>
            </ul>
            <p>
              <small
                >Torx®, Torx Plus® are registered trademarks of Acument
                Intellectual Properties. LLC.</small
              >
            </p>
            <p><strong>Optional features</strong></p>
            <ul class="first">
              <li>
                Features available e.g., with magnet, guided, ROTACTION and
                different lengths for accessibility
              </li>
            </ul>
          </div>
          <div
            id="socket-C"
            class="col-12 collapse text-left"
            data-parent="#accordion"
          >
            <h4>Extensions</h4>
            <p>
              Suited for all kind of power tools. Fitted between the tool drive
              and the socket, extensions enlarge the operational area of sockets
              for the purpose of loosening or tightening fasteners. Extensions
              are characterized by a female square drive at the input end and a
              male square at the output. They are available in the range of 1/4"
              and 1 1/2". Different fixture systems for every kind of socket.
            </p>
            <p><strong>Output drives with different fixture system</strong></p>
            <ul class="first">
              <li>
                Different fixture system e.g., male square output with through
                hole, pin retainer, ball retainer and removable threaded pin for
                ROTACTION extensions ¾”
              </li>
            </ul>
            <p><strong>Optional features</strong></p>
            <ul class="first">
              <li>
                Features available e.g. guided, ROTACTION and different lengths
                for accessibility
              </li>
            </ul>
          </div>
          <div
            id="socket-D"
            class="col-12 collapse text-left"
            data-parent="#accordion"
          >
            <h4>Adapters and Quick-Change Adapters</h4>
            <p>
              Adapters fit between the tool and the socket to allow the socket
              to adapt to the tool drive that is of a different size or shape
              from that for which the socket is made. Quick Change adapters
              enable you to change sockets without using pin and O-ring
              combinations.
            </p>
            <p><strong>Different types</strong></p>
            <ul class="first">
              <li>
                Adapters input male square to output male square in many
                different versions and sizes e.g., 3/8” -> 1/4”, 1/2” -> 3/8”
                etc.
              </li>
              <li>
                Quick Change Adapters for square drives with square male output,
                in different sizes.
              </li>
              <li>
                Quick Change Adapters for square drives with female hex output,
                hex style C and style E
              </li>
            </ul>
            <p><strong>Optional features</strong></p>
            <ul class="first">
              <li>
                Features available e.g. guided, ROTACTION and different lengths
                for accessibility
              </li>
              <li>
                Wobble adapters and universal adapters enable you to reach
                applications with limited accessibility.
              </li>
              <li>Universal adapters</li>
            </ul>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-6 col-sm-6 col-md-2 text-center">
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/E.jpg"
              alt="Bits"
              loading="lazy"
            />
            <p><strong>Bits</strong></p>
          </div>
          <div class="col-6 col-sm-6 col-md-2 text-center">
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/F.jpg"
              alt="Bit holders"
              loading="lazy"
            />
            <p><strong>Bit holders</strong></p>
          </div>
          <div class="col-6 col-sm-6 col-md-2 text-center">
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/G.jpg"
              alt="Nut setters"
              loading="lazy"
            />
            <p><strong>Nut setters</strong></p>
          </div>
          <div class="col-6 col-sm-6 col-md-2 text-center">
            <img
              class="d-sm-inline-block img-fluid"
              src="@/assets/img/sockets-bits/H.jpg"
              alt="Stud setters"
              loading="lazy"
            />
            <p><strong>Stud setters</strong></p>
          </div>
        </div>
      </div>
    </div>

    <div id="care" class="row p-md-5 pt-5">
      <div class="col-12 mb-3">
        <h2 class="text-center mt-3">Care and Maintenance</h2>
        <hr class="underliner" />
      </div>
      <div class="col-12">
        <div class="row d-flex align-items-center">
          <div class="col-sm-12 col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus atque delectus distinctio facere, fuga fugiat impedit
              ipsum laboriosam neque nihil non omnis quae, totam. Ad minima
              quaerat quas vero!
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

    <footer class="text-center pt-4 pb-2">
      <p class="go-up mb-3">
        <a href="#top" title="Go to top" v-smooth-scroll
          ><fa icon="chevron-up"></fa
        ></a>
      </p>
      <hr />
      <p class="mt-4">
        <img
          src="@/assets/img/saltus-logo-green.svg"
          height="30"
          alt=""
          loading="lazy"
        />
      </p>
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} Saltus. All rights
        reserved.
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageCarousel from '@/components/ImageCarousel.vue'
import DigitalTwinForm from '@/components/DigitalTwinForm.vue'
import ImageService from '@/services/ImageService.js'

export default {
  name: 'Home',
  components: {
    ImageCarousel,
    DigitalTwinForm
  },
  data() {
    return {
      CeImages: ImageService.getCeImages(),
      OeImages: ImageService.getOeImages()
    }
  }
}
</script>

<style scoped>
/* HEADER */
#video {
  background-color: #999;
}

#video video {
  opacity: 0.3;
  width: 100%;
}

#welcome {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  color: #fff;
  background-color: transparent !important;
  top: 30%;
}

#welcome h1 span {
  display: none !important;
}

#welcome .baseline {
  font-size: 2rem;
}

#welcome ul {
  list-style: none;
  padding-left: 0;
  margin: 0 0 30px 0;
}

#welcome ul > li {
  display: inline-block;
  padding: 0;
}

.go-down a,
.go-up a {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: inline-block;
  padding: 10px;
  text-shadow: none;
}

.go-down a {
  background: #fff;
  color: #007a57;
}

.go-up a {
  background: #007a57;
  color: #fff;
}

.go-down a:hover {
  background: #fff;
  color: #003326;
}

.go-up a:hover {
  background: #003326;
  color: #fff;
}

/* ABOUT */
#about blockquote.blockquote {
  padding: 30px;
  border-left: 5px solid #007a57;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* BITS */
#accordion > div[data-toggle='collapse'] > p {
  text-decoration: underline;
}

#accordion > div[data-toggle='collapse'] {
  cursor: pointer;
}

#accordion > div[data-toggle='collapse']:hover > p {
  text-decoration: none;
}

#accordion > div[data-toggle='collapse'] {
  transition-property: opacity;
  transition-duration: 1s;
}

#accordion.triggered > div[aria-expanded='true'] {
  opacity: 1;
}

#accordion.triggered > div[aria-expanded='false'] {
  opacity: 0.5;
}
</style>
