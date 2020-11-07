<template>
  <div class="page-container">
    <div class="content-wrap">

      <img src="../assets/dog-pano.jpg" class="img-fluid" alt="Responsive image">

      <div class="text-center">
        <div class="card-body">
          <h5 class="quote">Our Mission</h5>
          <p class="info-text">
            Our mission is to help dog owners to love their dogs even more by providing awesome swag, toys and training at
            a reasonable price. To help support local shelters and help dogs get adopted in your area please donate to
            our cause.
          </p>
          <a href="https://www.google.com/search?safe=active&rlz=1C1CHBF_enUS850US850&sxsrf=ALeKk03JQjocZ6uaKglMar
                LEIRQd70vjdA%3A1601043470004&ei=DfxtX_viPP2O9PwPwsOT6AE&q=donate+here+button&oq=donate+here+button&
                =CgZwc3ktYWIQAzICCAA6BAgjECc6BQgAEJECOgQIABBDOgsILhCxAxDHARCjAjoFCAAQsQM6CAgAELEDEIMBOgYIABAKEEM6CAguEL
                EDEIMBOgcIABCxAxBDOggIABCxAxCRAjoFCAAQkgM6BwgAEBQQhwI6BggAEBYQHlCaJliJPWCSPmgAcAB4AIABa4gBmg2SAQQxNS40
                mAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwi7nbLav4TsAhV9B50JHcLhBB0Q4dUDCA0&uact=5" class="btn btn-primary" target="_blank">
            Donate Here!
          </a>
        </div>
      </div>

      <div class="footer">
        <hr>
        <a href="https://github.com/bswheel/cp3.git">GitHub</a>
      </div>
    </div>
  </div>
</template>

<style>
  hr {
    height: 1px;
  }

  .info-text {
    text-align: center;
    font-size: 20pt;
    font-family: Calibri;
    padding: 100px;
  }

  .quote {
    position: relative;
    text-align: center;
    font-size: 30pt;
    font-family: cursive;
    padding-top: 100px;
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
</style>
