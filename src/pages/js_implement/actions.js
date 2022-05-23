window.AFRAME.registerComponent('click_fade_lobby', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            setTimeout(() => {
                console.log("pasa por aquí");
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 2 -1.8");
                var lobby = document.getElementById("entity-lobby");
                lobby.setAttribute("visible", "false");
                for(var i=1; i<=8; i++){
                    var panels = document.getElementById("panel_lobby"+i);
                    panels.setAttribute("rotation","0 90 0");    
                }
         }, 1200);
        });
    },
});

window.AFRAME.registerComponent('click_appear_lobby', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            setTimeout(() => {
                console.log("pasa por aquí");
                var vidplay = document.querySelector("#vid-player");
                var srcc = vidplay.getAttribute("src");
                document.querySelector(srcc).pause();
                const myCamera = document.getElementById("my-camera");
                myCamera.setAttribute("position", "0 2 -1.8");
                var lobby = document.getElementById("entity-lobby");
                lobby.setAttribute("visible", "true");
                for(var i=1; i<=5; i++){
                    var panels = document.getElementById("panel_lobby"+i);
                    panels.setAttribute("rotation","0 -90 0");    
                }
                document.getElementById("panel_lobby_azu").setAttribute("rotation","0 90 0");
                
            }, 1200);
        });
    },
});

window.AFRAME.registerComponent('click_home', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            setTimeout(() => {
                console.log("Punto2");
                window.open("/","_self");
            }, 1200);
        });
    },
});

window.AFRAME.registerComponent('click_play', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            setTimeout(() => {
                var vidplay = document.querySelector("#vid-player").getAttribute("src");
                document.querySelector(vidplay).play();
            }, 1200);
        });
    },
});

window.AFRAME.registerComponent('click_pause', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            setTimeout(() => {
                var vidplay = document.querySelector("#vid-player").getAttribute("src");
                document.querySelector(vidplay).pause();
            }, 1200);
        });
    },
});