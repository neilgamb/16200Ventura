import React from 'react';
import Link from 'gatsby-link';
import Map from './Map';

import building from '../images/building.jpg';

import pic01 from '../images/gallery/2.jpg'
import pic02 from '../images/gallery/3.jpg'
import pic03 from '../images/gallery/4.jpg'
import pic04 from '../images/gallery/5.jpg'
import pic05 from '../images/gallery/6.jpg'
import pic06 from '../images/gallery/7.jpg'
import pic07 from '../images/gallery/8.jpg'
import pic08 from '../images/gallery/9.jpg'
import pic09 from '../images/gallery/10.jpg'
import pic10 from '../images/gallery/11.jpg'
import pic11 from '../images/gallery/12.jpg'
import pic12 from '../images/gallery/13.jpg'
import pic13 from '../images/gallery/14.jpg'
import pic14 from '../images/gallery/15.jpg'
import pic15 from '../images/gallery/16.jpg'

import Lightbox from 'react-images';

class Main extends React.Component {
  closeLightbox(){
    this.props.closeLightbox();
  }
  gotoNext(){
    this.props.gotoNext();
  }
  gotoPrev(){
    this.props.gotoPrev();
  }
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="building" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Building</h2>
          <span className="image main"><img src={building} alt="" /></span>
          <p>Located in the heart of Encino on the historic Ventura Boulevard, <a href="https://goo.gl/maps/U8Qxu1QWPQL2" target="_blank">16200 Ventura</a> is a fresh take on the traditional office experience. Fully remodeled in 2017, the property offers a tenant amenity lounge and kitchen, individual work cubbies, private conference room, renovated bathrooms and upgraded building systems. All with one goal in mind: to improve your work experience.</p>
          <p>With suite sizes ranging from 200 square feet up to 2,200 square feet, 16200 Ventura offers the flexibility and energy of coworking / executive suites with the professionalism of an institutional office address. Whether you’re just launching your company or looking to expand into a long-term lease, there’s a home for you at 16200 Ventura.</p>
          {close}
        </article>
        <article id="gallery" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gallery</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <Lightbox
            images={[
              { src: pic01 }, { src: pic02 }, { src: pic03 }, { src: pic04 }, { src: pic05 }, { src: pic06 }, { src: pic07 },
              { src: pic08 }, { src: pic09 }, { src: pic10 }, { src: pic11 }, { src: pic12 }, { src: pic13 }, { src: pic14 },
              { src: pic15 }        
               ]}
            currentImage={this.props.currentImage}
            isOpen={this.props.isGalleryVisible}
            onClickPrev={this.gotoPrev.bind(this)}
            onClickNext={this.gotoNext.bind(this)}
            onClose={this.closeLightbox.bind(this)}
          />
          {close}
        </article>

        <article id="location" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Location</h2>
          <div className="address">
            <p>16200 Ventura Blvd</p>
            <p>Encino, CA 91436</p>
          </div>
          <Map />
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
            <div className="contact-wrapper">
              <div className="contact contact-1">
                <h3>LEASING BROKER</h3>
                <p>Kevin Fenenbock | <a href="https://www2.colliers.com/en" target="_blank" className="contact-type">Colliers International</a></p>
                <p><a href="tel:1-818-325-4118"><i className="fa fa-phone"></i> 818.325.4118</a></p>
                <p><a href="mailto:kevin.fenenbock@colliers.com?Subject=16200 Ventura"><i className="fa fa-envelope"></i> kevin.fenenbock@colliers.com</a></p>
              </div>
              <div className="contact contact-2">
                <h3>PROPERTY MANAGER</h3>
                <p>Seana Yates | <a href="http://www.mosscompany.com" target="_blank" className="contact-type">Moss & Company</a></p>
                <p><a href="tel:1-818-788-2714"><i className="fa fa-phone"></i> 818.788.2714</a></p>
                <p><a href="mailto:seanayates@mosscompany.com?Subject=16200 Ventura"><i className="fa fa-envelope"></i> seanayates@mosscompany.com</a></p>
              </div>
            </div>
          {/* <form method="post" action="mailto:neilgamb@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul> */}
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main