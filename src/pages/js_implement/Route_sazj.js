var index = 1;
window.AFRAME.registerComponent('azu_vid_izq', {

    init: function () {
        this.el.addEventListener("mouseenter", function () {
            if (!(index < 1)) {
                var vidplayer = document.querySelector("#vid-player");
                var srcc = vidplayer.getAttribute("src");
                document.querySelector(srcc).pause();
                index--;
                vidplayer.setAttribute("src", "#azu" + index);
                document.querySelector("#azu" + index).play();
            }

        });

    }
});
window.AFRAME.registerComponent('azu_vid_der', {
    init: function () {
        this.el.addEventListener("mouseenter", function () {
            if (!(index >= 18)) {
            var vidplayer = document.querySelector("#vid-player");
            var srcc = vidplayer.getAttribute("src");
            document.querySelector(srcc).pause();
            vidplayer.setAttribute("src", "#azu" + index);
            document.querySelector("#azu" + index).play();
            index++;
            }
        });

    }
});