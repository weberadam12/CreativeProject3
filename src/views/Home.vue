<template>
  <div class="page-container-home">
    <div class="content-wrap">
      <div>
        <div class="row  padded-row banner side-by-side">
          <div class="col">
            <p class="info-text">
              Give your child the what they've always wanted.
            </p>
          </div>
          <div class="col text-center">
            <img style="width = 500px" class="rounded" src="../assets/Theme-Song.jpg" alt="Phineas and Ferb">
          </div>
        </div>

        <div class="row padded-row infos">
          <div class="col">
            <div style="width: 18rem;">
              <img style="width = 1.5rem;" class="card-img-top" src="../assets/About-to-Build.jpg" alt="Shopping link">
              <div class="card-body">
                <p class="card-text">Buy already built and tested authentic Phineas and Ferb inventions</p>
                <a href="/browse" target="_blank" class="btn btn-primary">Shop</a>
              </div>
            <br>
            </div>
          </div>
          <div class="col">
            <div style="width: 18rem;">
              <img style="width = 1.5rem;" class="card-img-top" src="../assets/Math-Tutor.jpg" alt="Card image cap" >
              <div class="card-body">
                <p class="card-text">Take some free math lessons from the boy genius Baljeet</p>
                <a  href="https://www.youtube.com/watch?v=XsIes8UUjCk" target="_blank" class="btn btn-primary">Study Now</a>
              </div>
              <br>
            </div>
          </div>
          <div class="col">
            <div style="width: 18rem;">
              <img style="width = 1.5rem;" class="card-img-top" src="../assets/FanFiction.jpg" alt="Card image cap" width="1.5rem">
              <div class="card-body">
                <p class="card-text">Discuss Phineas and Ferb fanfiction with other fanatics</p>
                <a href="https://www.google.com/search?q=Phineas+and+Ferb+fan+fiction&source=lmns&bih=805&biw=855&rlz=1C1CHBF_enUS918US918&hl=
                en&sa=X&ved=2ahUKEwiS25rs6IT0AhXMaM0KHVWKDi8Q_AUoAHoECAEQAA" target="_blank" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="footer">

      <a href="https://github.com/weberadam12/CreativeProject3.git">GitHub</a>
    </div>

  </div>
</template>

<style>
  hr {
    height: 1px;
  }
img.rounded {
  height: 300px;
}
.card-img-top {
  height: 1.5 rem;
  width: auto;
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
    margin: auto;
    width: 100%;
  }

  .info-text {
    text-align: center;
    font-size: 20pt;
    font-family: Calibri;
    padding: 100px;
  }

  .footer {
    text-align: center;
    background-color: #173985;
    color: #fff;
    padding: 20px;
    min-height: 50px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }

  .page-container-home {
  padding-top: 0;
  padding-bottom: 0px;
  text-align: center;
  min-height: 0;
  background-color: #7194E3
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
