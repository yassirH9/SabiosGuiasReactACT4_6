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