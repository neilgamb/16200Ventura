import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <span className="icon fa-diamond"></span>
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>16200 VENTURA</h1>
                <p>A new way to office</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Building</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Gallery</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.openGallery()}}>Gallery</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Location</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
