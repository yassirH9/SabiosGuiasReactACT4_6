window.AFRAME.registerComponent('click_fade_lobby', {
    init: function() {
        this.el.addEventListener("mouseenter", function() {
            setTimeout(() => {
                console.log("pasa por aquí");
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 2 -1.8");
                var lobby = document.getElementById("entity-lobby");
                if (lobby.getAttribute("visible")){
                    lobby.setAttribute("visible","false");
                } else{
                    lobby.setAttribute("visible","true");
                }
            }, 1200);
        });
    },
});