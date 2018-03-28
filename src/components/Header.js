import React from 'react'
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../images/logo_color.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <span className="icon fa-diamond"></span>
        </div> */}
        <div className="content-wrapper">
            <div className="content">
                <div className="inner">
                    {/* <h1>16200 VENTURA</h1> */}
                    <div className="logo_wrapper">
                        <div className="logo_image">
                            <img src={logo}/>
                            <div className="ventura">Ventura</div>
                        </div>
                        {/* <p>a new way to office</p> */}
                    </div>
                    <div className="hamburger_wrapper">
                    <HamburgerMenu 
                        isOpen={props.menuOpen}
                        menuClicked={props.handleMenuClick}
                        color="white"
                        strokeWidth={2}
                        height={20}
                        width={30}
                        />
                    </div>
                </div>
            </div>
            
            <nav>
                <ul className="desktop">
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Building</a></li>
                    <li><a href="javascript:;" onClick={() => {props.openGallery()}}>Gallery</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Location</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                </ul>
                <ul className="mobile" style={{top: props.menuOpen ? '65px' : '-200px'}}>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Building</a></li>
                    <li><a href="javascript:;" onClick={() => {props.openGallery()}}>Gallery</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Location</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
