import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="contenedor">
        <div class="formulario__contenedor">
            <form action="" class="formulario">
                <div class="formulario__grupo">
                    <div class="formulario__contenedor-campos">
                        <div class="formulario__campo">
                            <input class="formulario__input" type="email" placeholder="Correo electronicó o número de teléfono">
                        </div>
                        <div class="formulario__campo">
                            <input class="formulario__input" type="password" placeholder="Contraseña">
                        </div>
                        <div class="formulario__campo formulario__campo--sin-borde">
                            <button class="formulario__boton formulario__boton--azul">Iniciar sesión</button>
                        </div>
                    </div>
                    <div class="formulario__campo formulario__campo--enlace-separacion ">
                        <a class="formulario__enlace formulario__enlace--texto" href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div class="formulario__campo">
                        <div class="contenedor__linea">
                            <hr class="formulario__linea">
                        </div>
                    </div>
                    <div class="formulario__campo formulario__campo--boton--verde">
                        <button class="formulario__boton formulario__boton--verde">Crear cuenta nueva</button>
                    </div>
                </div>
            </form>
        <div class="formulario__info-extra">
            <label for=""><b>Crea una página</b> para una celebridad, una marca o un negocio.</label>
        </div>
    </div>

    
    <div class="slogan__contenedor">
        <div class="prueba1">
            <div class="contenedor__logo">  
                <img class="slogan__logo" src="facebook-logo.svg" alt="">
            </div>
            <div class="slogan__contenedor-texto">
                <p class="slogan__texo">Facebook te ayuda a comunicarte y compartir con las perosonas que forman parte de tu vida.</p>
            </div>
        </div>
    </div>
</div>
    <footer class="footer">
        <div class="footer__contenedor-enlaces-idiomas">
            <a href="#" class="idioma__enlace">Español</a>
            <a href="#" class="idioma__enlace">English (US)</a>
            <a href="#" class="idioma__enlace">Português (Brasil)</a>
            <a href="#" class="idioma__enlace">Français (France)</a>
            <a href="#" class="idioma__enlace">한국어</a>
            <a href="#" class="idioma__enlace">Italiano</a>
            <a href="#" class="idioma__enlace">Deutsch</a>
            <a href="#" class="idioma__enlace">Bahasa Indonesia</a>
            <a href="#" class="idioma__enlace">العربية</a>
            <a href="#" class="idioma__enlace">हिन्दी</a>
            <a href="#" class="idioma__enlace">中文(简体)</a>
            <button>+</button>
        </div>
        <div class="footer__contenedor-linea">
            <hr class="footer__linea">
        </div>
        <div class="footer__contenedor-enlaces-opciones">
            <a href="#" class="enlace__footer">Registrarte</a>
            <a href="#" class="enlace__footer">Iniciar sesión</a>
            <a href="#" class="enlace__footer">Messenger</a>
            <a href="#" class="enlace__footer">Facebook Lite</a>
            <a href="#" class="enlace__footer">Video</a>
            <a href="#" class="enlace__footer">Meta Pay</a>
            <a href="#" class="enlace__footer">Tienda de Meta</a>
            <a href="#" class="enlace__footer">Meta Quest</a>
            <a href="#" class="enlace__footer">Ray-Ban Meta</a>
            <a href="#" class="enlace__footer">Meta AI</a>
            <a href="#" class="enlace__footer">Más contenido de Meta AI</a>
            <a href="#" class="enlace__footer">Instagram</a>
            <a href="#" class="enlace__footer">Threads</a>
            <a href="#" class="enlace__footer">Centro de información de votación</a>
            <a href="#" class="enlace__footer">Política de privacidad</a>
            <a href="#" class="enlace__footer">Centro de privacidad</a>
            <a href="#" class="enlace__footer">Información</a>
            <a href="#" class="enlace__footer">Crear anuncio</a>
            <a href="#" class="enlace__footer">Crear página</a>
            <a href="#" class="enlace__footer">Desarrolladores</a>
        </div>
        <div class="footer__derechos">
            Meta © 2025
        </div>
    </footer>
`

setupCounter(document.querySelector('#counter'))
