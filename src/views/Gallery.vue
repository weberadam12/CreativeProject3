<template>
    <div class="page-container">
        <div class="content-wrap">
            <div>
            <h1>Out of Stock until March 2058</h1>
                <div class="row padded-row">
                    <div class="col">
                        <img src="../assets/products/Animal_Translator.png" alt="Animal Translator" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="../assets/products/Car-Wash.png" class="img-fluid" alt="Car Wash">
                    </div>
                </div>
                <div class="row padded-row">
                    <div class="col">
                        <img src="../assets/products/Rainbowinator.jpg" alt="Rainbow Maker" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="../assets/products/Robot-Dog.jpg" alt="Robot Dog" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="../assets/products/Robot-Rodeo.jpg" alt="Robot Rodeo" class="img-fluid">
                    </div>
                </div>
                <div class="row padded-row">
                    <div class="col">
                        <img src="../assets/products/RollerCoaster.jpg" alt="Coolest Coaster EVER" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="../assets/products/Super-Maze.jpg" alt="Shrinking Submarine" class="img-fluid">
                    </div>
                </div>

            </div>
        </div>

        <div class="footer">
            <a href="https://github.com/weberadam12/CreativeProject3.git">GitHub</a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Pre-Order"
    }
</script>

<style scoped>
    hr {
        height: 1px;
    }

    .padded-row {
        padding-top: 50px;
        padding-bottom: 50px;
        margin: auto;
        width: 100%;
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


      .page-container {
      padding-top: 25px;
      padding-bottom: 0px;
      text-align: center;
      background-color: #7194E3
      }

    .content-wrap {
        padding-bottom: 100px;
        width: 100%
    }

</style>
