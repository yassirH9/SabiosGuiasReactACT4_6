window.AFRAME.registerComponent('click_move', {
    init: function() {
        this.el.addEventListener("mouseenter", function() {
            setTimeout(() => {
                console.log("pasa por aquí");
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 0 -1.8");
                var lobby = document.getElementById("entity-lobby");
                lobby.setAttribute("visible","false");
            }, 1200);
        });

    },
});