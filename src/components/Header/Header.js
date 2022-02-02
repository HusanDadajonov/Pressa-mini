import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import HeaderItem from "./HeaderItem/HeaderItem"
import "./Header.scss"

function Header (){
    return(
        <header className="header">
            <div className="header__container container">
                <Link className="header__logo--link" to="/">
                    <img className="header__logo" src={Logo} alt="Logo" />    
                </Link> 
                <ul className="header__list">
                    <HeaderItem path="/view" text="Yordam"/>
                    <HeaderItem path="/about" text="Loyiha haqida"/>
                    <HeaderItem path="/" text="Bosh sahifa"/>
                </ul>
                <div className="header__btns--wrap">
                    <button className="header__btn">+e'lon berish</button>
                </div>
            </div>
        </header>    
    )
}

export default Header