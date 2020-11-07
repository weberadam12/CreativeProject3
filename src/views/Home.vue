<template>
  <div class="page-container">
    <div class="content-wrap">
      <div>
        <div class="row  padded-row banner side-by-side">
          <div class="col">
            <p class="info-text">
              Pamper your dog with the things they love.
            </p>
          </div>
          <div class="col text-center">
            <img class="rounded" src="https://live.staticflickr.com/3433/3927529272_e6e5448807.jpg" alt="dog">
          </div>
        </div>

        <div class="row padded-row infos">
          <div class="col">
            <div style="width: 18rem;">
              <img style="height: 431.72px;" class="card-img-top" src="../assets/dog-training.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Training</h5>
                <p class="card-text">Train your dog to do some cool tricks.</p>
                <a href="https://www.google.com/search?q=dog+training&rlz=1C1CHBF_enUS850US850&oq=dog+training&aqs=
                      chrome..69i57j0l4j46j0l2.1887j0j4&sourceid=chrome&ie=UTF-8" target="_blank" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div style="width: 18rem;">
              <img class="card-img-top" src="../assets/doctor.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Dog Care</h5>
                <p class="card-text">Learn from experts how to care for your little fur friend.</p>
                <a  href="https://www.google.com/search?q=dog+care&rlz=1C1CHBF_enUS850US850&oq=dog+care&aqs=chrome..69i57
                  j0l7.1015j0j7&sourceid=chrome&ie=UTF-8" target="_blank" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div style="width: 18rem;">
              <img class="card-img-top" src="../assets/dog-date.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Doggie Dates</h5>
                <p class="card-text">Setup a doggie play date with a dog near you.</p>
                <a href="https://www.google.com/search?safe=active&rlz=1C1CHBF_enUS850US850&sxsrf=ALeKk03gk75D8lCp5CP
                      Lr9-VDH2sT8GlkA%3A1601044889500&ei=mQFuX8HvHdq0tAbfz6G4Dg&q=doggie+date&oq=doggie+date&gs_lcp=CgZwc3kt
                      YWIQAzIECAAQCjIECAAQCjIKCC4QxwEQrwEQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjICCAAyAggAOgQIABBHOgUIA
                      BCxAzoFCAAQkgM6BAgjECc6BAgAEEM6CggAELEDEBQQhwI6BwgAEBQQhwI6CgguEMcBEKMCEEM6CwguELEDEMcBEKMCOggIABCxAxC
                      DAToICC4QsQMQgwE6BwgAELEDEEM6BggAEAoQQzoCCC46CAguEMcBEK8BOgkIABCxAxAKEENKBQg3EgExSgUIJBIBMVDljAJY7qoCY
                      OauAmgFcAN4AIABf4gBjAuSAQQyLjExmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiBoKH_xITsAhVa
                      Gs0KHd9nCOcQ4dUDCA0&uact=5" target="_blank" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="footer">
      <hr>
      <a href="https://github.com/bswheel/cp3.git">GitHub</a>
    </div>

<!--    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>-->
<!--    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
//
// export default {
//   name: "Home",
//   components: {
//     HelloWorld
//   }
// };
</script>

<style>
  hr {
    height: 1px;
  }

  .infos {
    margin: 50px;
  }

  .banner {
    height: 1%;
    width: auto;
    background-color: steelblue;
    color: white;
  }

  .padded-row {
    padding-top: 50px;
    padding-bottom: 50px;
    /*margin: auto;*/
    width: 100%;
  }

  .info-text {
    text-align: center;
    font-size: 20pt;
    font-family: Calibri;
    padding: 100px;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 100px;
    padding-bottom: 50px;
    background-color: #f8f9fa;
  }

  .page-container {
    position: relative;
    min-height: 100vh;
    width: 100%;
  }

  .content-wrap {
    padding-bottom: 100px;
    width: 100%
  }

  @media only screen and (min-width: 961px){
    .side-by-side{
      display: flex;
      align-items: center;
      vertical-align: center;
      justify-content: space-around;
      flex-direction: row;
      align-self: center;
      padding-top: 100px;
    }
  }

</style>
