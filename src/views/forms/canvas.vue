<template>
    <el-row>
        <el-col :span="24">
            <canvas id="canvas" width="400" height="300"></canvas>
            <image id="image" src="../../assets/logo.png" style="display: none;"></image>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
            var image = document.getElementById("image");
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var isDrawing = false;
            var state = context.getImageData(0, 0, canvas.width, canvas.height);
            history.pushState(state, null);
            canvas.addEventListener("pointerdown", function(e) {
                e.preventManipulation()
            }, false);
            canvas.addEventListener("mousedown", startDrawing, false);
            canvas.addEventListener("mousemove", draw, false);
            canvas.addEventListener("mouseup", stopDrawing, false);
            canvas.addEventListener("popstate", loadState, false);

            function startDrawing() {
                isDrawing = true;
            }

            function draw(event) {
                if (isDrawing) {
                    var sx = canvas.width / canvas.offsetWidth;
                    var sy = canvas.height / canvas.offsetHeight;
                    var x = sx * event.clientX - image.natualWidth / 2;
                    var y = sy * event.clientY - image.natualHeight / 2;
                    context.drawImage(image, x, y);

                }
            }

            function stopDrawing() {
                isDrawing = false;
                var state = context.getImageData(0, 0, canvas.width, canvas.height);
                history.pushState(state, null);
            }

            function loadState(e) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                if (e.state) {
                    context.putImageData(e.state, 0, 0);
                }
            }

            return {}
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
}
</script>
<style>
#canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    display: block;
}
</style>
