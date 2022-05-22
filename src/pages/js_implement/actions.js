window.AFRAME.registerComponent('click_fade_lobby', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            setTimeout(() => {
                console.log("pasa por aquí");
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 2 -1.8");
                var lobby = document.getElementById("entity-lobby");
                lobby.setAttribute("visible", "false");
            }, 1200);
        });
    },
});

window.AFRAME.registerComponent('click_appear_lobby', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            setTimeout(() => {
                console.log("pasa por aquí");
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 2 -1.8");
                var lobby = document.getElementById("entity-lobby");
                lobby.setAttribute("visible", "true");
            }, 1200);
        });
    },
});