import { schema } from "aframe";

window.AFRAME.registerComponent('change_world', {
    schema: {
        src: { type: 'string' }
    },
    init: function() {
        var data = this.data;
        console.log("cambio entorno 1")
        this.el.addEventListener("mouseenter", function() {
            var mysky = document.querySelector("#my-sky");
            mysky.setAttribute("src", data.src);
            console.log("cambio entorno 2")
        });

    }
});
window.AFRAME.registerComponent('change_world_v', {
    schema: {
        src: { type: 'string' }
    },
    init: function() {
        var data = this.data;
        console.log("cambio entorno video 1")
        this.el.addEventListener("mouseenter", function() {
            var vidplayer = document.querySelector("#vid-player");
            vidplayer.setAttribute("material","src",data.src);
            console.log("cambio entorno video 2")
        });

    }
});
window.AFRAME.registerComponent('change_world_v2', {
    schema: {
        src: { type: 'string' }
    },
    init: function() {
        var data = this.data;
        console.log("cambio entorno video 1")
        this.el.addEventListener("mouseenter", function() {
            var vidplayer = document.querySelector("#vid-player");
            vidplayer.setAttribute("src",data.src);
            document.querySelector(data.src).play();
            console.log("cambio entorno video 2")
        });

    }
});