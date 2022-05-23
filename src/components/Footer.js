import "./Footer.css";
import ytlogo from "../SVG/youtube.svg";
import wlogo from "../SVG/world.svg";
import twtlogo from "../SVG/twitter-filled.svg";
import ftlogo from "../SVG/facebook-original.svg";
import rsslogo from "../SVG/rss-icon.svg";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        {/* Seccion elnaces destacados */}
        <div className="texts">
          <h4>Enlaces destacados</h4>
          <dl>
            <dd>
              <a href="https://www.youtube.com/channel/UCsXpM6GoxhFjlGDTyEZ4q8A"><img className="icon" src={ytlogo}/><span class="label">Youtube</span></a>
            </dd>
            <dd>
              <a href="https://www.facebook.com/fundacionlidiagarcia/posts/sabios-gu%C3%ADas-interpretes-en-agaete-hoy-el-equipo-t%C3%A9cnico-del-proyecto-sabios-gu%C3%AD/877161022843884/"><img className="icon" src={ftlogo}/><span class="label">Facebook</span></a>
            </dd>
            <dd>
              <a href="https://twitter.com/FundacionLidia"><img className="icon" src={twtlogo}/><span class="label">Twitter</span></a>
            </dd>
            <dd>
              <a href="https://www.sabiosguiasinterpretes.com/"><img className="icon" src={wlogo}/><span class="label">Web Oficial</span></a>
            </dd>
            <dd>
              <a type="application/rss+xml" href="/feed.rss"><img className="icon" src={rsslogo}/><span class="label">RSS</span> </a>
            </dd>
          </dl>
        </div>
        {/* Seccion partners */}
        <div className="img-colum">
          <img className="d-img" src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
          <img className="d-img" src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
          <img className="d-img" src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        </div>
        {/* Seccion enlace copy y politica de cookies */}
        <div className="texts">
          <ul class="menu">
            <li>Copyright&copy;</li><li><a href="#">Política de Cookies</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}