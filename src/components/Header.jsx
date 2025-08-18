export default function Header(){
    return(
        <>
        <header className="header">
            <div className="header__logo-container">
                <img className="header__logo" src="/pokemon-logo.webp" alt="" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="#">FESTIVAL DE GO</a></li>
                    <li className="header__nav-item"><a href="#profile">NOTICIAS</a></li>
                    <li className="header__nav-item"><a href="#portfolio">TEMPORADAS</a></li>
                    <li className="header__nav-item"><a href="#form">EVENTOS</a></li>
                    <li className="header__nav-item"><a href="#">COMUNIDAD</a></li>
                    <li className="header__nav-item"><a href="#profile">CLASIFICACION</a></li>
                    <li className="header__nav-item"><a href="#portfolio">TIENDA</a></li>
                </ul>
            </nav>
            <div className="button__container">
                <button className="header__button">INICIAR SESIÓN</button>
            </div>
        </header>
        </>
    )
}

