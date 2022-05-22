import 'aframe';
import { setVideoActive } from '../components/Video360Click.js';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import { useParams } from 'react-router-dom';
import { systems } from 'aframe';


import './js_implement/actions'
import './js_implement/Charge_world'

function VR_Route() {
    return (
        <>
            <div className="my-container">
                <a-scene stats></a-scene>
                <a-scene>
                    <a-assets>
                        <video id="vid1" src="/video/Route-1/Route-1-Stop-6.mp4" preload="auto" loop={new Boolean(true)}></video>
                        <video id="vid2" src="/video/Route-1/Route-1-Stop-3.mp4" preload="auto" loop={new Boolean(true)}></video>
                        <video id="vid3" src="/video/Route-1/Route-1-Stop-5.mp4" preload="auto" loop={new Boolean(true)}></video>
                        <video id="vid4" src="/video/Route-1/Route-1-Stop-1.mp4" preload="auto" loop={new Boolean(true)}></video>
                    </a-assets>

                    <a-sky id="my-sky" color="white"></a-sky>


                    <a-camera id="my-camera">
                        <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02" position="0 0 -1.8" material="shader:flat;color:#008000" animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
                            raycaster="objects: .clickable">
                        </a-entity>
                    </a-camera>


                    {/* Panel de control virtual */}
                    <a-plane material="opacity:0.4:transparent:true" position="2 1 -3" scale="2 1 0" rotation="0 -35 0 ">
                        <a-plane material="opacity:.9:transparent:true" class="clickable" click_appear_lobby position="-.40 .35 -500" scale=".14 .2 .1" rotation="0 0 0" src="/img/home-icon.png" repeat="1 1 1" />
                        <a-plane material="opacity:.9:transparent:true" class="clickable" click_home position=".40 -.35 -500" scale=".12 .24 .1" rotation="0 0 0" src="/img/LogoSabiosGuiasCompact.png" repeat="1 1 1" />
                        <a-plane material="opacity:.9:transparent:true" class="clickable" click_fade_lobby position="-.40 -.35 -500" scale=".14 .2 .1" rotation="0 0 0" src="/img/switch.png" repeat="1 1 1" />
                        <a-plane material="opacity:.9:transparent:true" class="clickable" click_play position="-.1 0 -500" scale=".14 .2 .1" rotation="0 0 0" src="/img/play.svg" repeat="1 1 1" />
                        <a-plane material="opacity:.9:transparent:true" class="clickable" click_pause position=".1 0 -500" scale=".14 .2 .1" rotation="0 0 0" src="/img/pause.svg" repeat="1 1 1" />

                    </a-plane>

                    {/*text area*/}
                    <a-videosphere pause id="vid-player" autoPlay loop={new Boolean(true)}></a-videosphere>a


                    <a-entity id="entity-lobby">
                        {/* Lobby component*/}
                        {/* Lobby suelo*/}
                        <a-plane position="0 -2 0" scale="80 31 80" rotation="-90 0 90" src="https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_960_720.jpg" repeat="10 10 1"></a-plane>
                        {/* Lobby paredes*/}
                        <a-plane position="0 5 -40" scale="15 50 80" rotation="0 0 90" src="https://static.vecteezy.com/system/resources/previews/000/125/828/large_2x/dirty-vector-grunge-texture.jpg" repeat="1 1 3"></a-plane>
                        <a-plane position="15 5 -5" scale="15 100 80" rotation="0 -90 90" src="https://static.vecteezy.com/system/resources/previews/000/125/828/large_2x/dirty-vector-grunge-texture.jpg" repeat="1 1 3"></a-plane>
                        <a-plane position="-15 5 -5" scale="15 100 80" rotation="0 90 90" src="https://static.vecteezy.com/system/resources/previews/000/125/828/large_2x/dirty-vector-grunge-texture.jpg" repeat="1 1 3"></a-plane>
                        <a-plane position="0 5 40" scale="15 50 80" rotation="0 180 90" src="https://static.vecteezy.com/system/resources/previews/000/125/828/large_2x/dirty-vector-grunge-texture.jpg" repeat="1 1 3"></a-plane>
                        {/* Lobby techo*/}
                        <a-plane position="0 10 0" scale="80 31 80" rotation="90 0 90" src="https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_960_720.jpg" repeat="10 10 1"></a-plane>
                        {/* Lobby seccion de ruta 1*/}

                        <a-plane id="panel_lobby1" click_fade_lobby change_world_v2="src:#vid1" class="clickable" position="14.8 3 0" scale="5 5 10" rotation="0 -90 0" repeat="1 1 1" src="/img/r1_s1.png"></a-plane>
                        <a-text value="Ruta 1 -Parada 1- " color="Black" position="13.2 0 -1.5" width="2 " scale="5 5 0" rotation="0 -90 0"/>
                        
                        
                        
                        
                        <a-plane id="panel_lobby2" click_fade_lobby change_world_v2="src:#vid2" class="clickable" position="14.8 3 20" scale="5 5 10" rotation="0 -90 0" repeat="1 1 1" src="/img/r1_s3.png"></a-plane>
                        <a-text value="Ruta 1 -Parada 2-" color="Black" position="13.2 0 8" width="2 " scale="5 5 0" rotation="0 -90 0" />
                        <a-plane id="panel_lobby3" click_fade_lobby change_world_v2="src:#vid3" class="clickable" position="14.8 3 10" scale="5 5 10" rotation="0 -90 0"repeat="1 1 1" src="/img/r1_s2.png"></a-plane>
                        <a-text value="Ruta 1 -Parada 3-" color="Black" position="13.2 0 18" width="2 " scale="5 5 0" rotation="0 -90 0" />
                        <a-plane id="panel_lobby4" click_fade_lobby change_world_v2="src:#vid4" class="clickable" position="14.8 3 30" scale="5 5 10" rotation="0 -90 0" repeat="1 1 1" src="/img/r1_s4.png"></a-plane>
                        <a-text value="Ruta 1 -Parada 4-" color="Black" position="13.2 0 28" width="2 " scale="5 5 0" rotation="0 -90 0" />
                        <a-box position="14.8 0 0" scale="3 2 80" color="#CECECE" />
                        {/* Lobby seccion de ruta azuaje*/}
                        <a-plane change_world_v2="src:" id="panel_lobby5" click_fade_lobby position="-14.8 3 30" scale="5 5 10" rotation="0 90 0" repeat="10 10 1" color="black"></a-plane>
                        <a-text value="Ruta 1" color="Black" position="-13.2 0 0.5" width="2 " scale="5 5 0" rotation="0 90 0" />
                        <a-plane change_world_v2="src:" id="panel_lobby6" click_fade_lobby position="-14.8 3 20" scale="5 5 10" rotation="0 90 0" repeat="10 10 1" color="black"></a-plane>
                        <a-text value="Ruta 1" color="Black" position="-13.2 0 10.5" width="2 " scale="5 5 0" rotation="0 90 0" />
                        <a-plane change_world_v2="src:" id="panel_lobby7" click_fade_lobby position="-14.8 3 10" scale="5 5 10" rotation="0 90 0" repeat="10 10 1" color="black"></a-plane>
                        <a-text v value="Ruta 1" color="Black" position="-13.2 0 20.5" width="2 " scale="5 5 0" rotation="0 90 0" />
                        <a-plane change_world_v2="src:" id="panel_lobby8" click_fade_lobby position="-14.8 3 0" scale="5 5 10" rotation="0 90 0" repeat="10 10 1" color="black"></a-plane>
                        <a-text value="Ruta 1" color="Black" position="-13.2 0 30.5" width="2 " scale="5 5 0" rotation="0 90 0" />
                        <a-box position="-14.8 0 0" scale="3 2 80" color="#CECECE" />
                    </a-entity>
                </a-scene>
            </div>
        </>
    );
}
export default VR_Route;
