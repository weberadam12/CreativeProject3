<template>
    <div class="page-container">
        <div class="content-wrap">
            <div>
                <div class="row padded-row">
                    <div class="col">
                        <img src="https://live.staticflickr.com/4174/33634058024_74d000546d_b.jpg" alt="doggo" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="https://live.staticflickr.com/8519/8645723913_8ba2a85f6f_b.jpg" class="img-fluid" alt="Allic's 1st birthday party">
                    </div>
                </div>
                <div class="row padded-row">
                    <div class="col">
                        <img src="https://live.staticflickr.com/6198/6114260088_20a2cc5ae5_b.jpg" alt="Dog" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="https://live.staticflickr.com/5204/5302995657_f083b1558d_b.jpg" alt="the doggos" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="https://live.staticflickr.com/5088/5323961120_0172112bcb_b.jpg" alt="Dogs 013" class="img-fluid">
                    </div>
                </div>
                <div class="row padded-row">
                    <div class="col">
                        <img src="https://live.staticflickr.com/604/32255598460_274caa2db0_b.jpg" alt="dog" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="https://live.staticflickr.com/7396/8728178651_912c2fa554_b.jpg" alt="A cute Dog 4" class="img-fluid">
                    </div>
                </div>
                <div class="row padded-row">
                    <div class="col">
                        <img src="../assets/dog1.jpg" class="img-fluid" alt="dog1">
                    </div>
                    <div class="col">
                        <img src="../assets/dog2.jpg" class="img-fluid" alt="dog2">
                    </div>
                    <div class="col">
                        <img src="../assets/dog3.jpg" class="img-fluid" alt="dog3">
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <hr>
            <a href="https://github.com/bswheel/cp3.git">GitHub</a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Gallery"
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