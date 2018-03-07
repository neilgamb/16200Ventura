import React from 'react';
import Link from 'gatsby-link';
import Map from './Map';

import building from '../images/building.jpg';

import pic01 from '../images/01_outside_street.jpg';
import pic02 from '../images/02_outside_street.jpg'
import pic03 from '../images/03_outside_street.jpg'
import pic04 from '../images/04_outside_street.jpg'
import pic05 from '../images/05_outside_street.jpg'
import pic06 from '../images/06_outside_street.jpg'
import pic07 from '../images/07_inside_elevators.jpg'
import pic08 from '../images/08_inside.jpg'
import pic09 from '../images/09_inside.jpg'
import pic10 from '../images/10_inside.jpg'
import pic11 from '../images/11_inside.jpg'
import pic12 from '../images/12_inside.jpg'
import pic13 from '../images/13_inside.jpg'
import pic14 from '../images/14_inside.jpg'
import pic15 from '../images/15_inside.jpg'
import pic16 from '../images/16_inside.jpg'
import pic17 from '../images/17_inside.jpg'
import pic18 from '../images/18_inside.jpg'
import pic19 from '../images/19_inside.jpg'
import pic20 from '../images/20_inside.jpg'
import pic21 from '../images/21_inside.jpg'
import pic22 from '../images/22_inside.jpg'
import pic23 from '../images/23_outside_roof.jpg'
import pic24 from '../images/24_outside_roof.jpg'

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
          <p>Located in the heart of Encino on the historic <a href="https://goo.gl/maps/U8Qxu1QWPQL2" target="_blank">Ventura Boulevard, 16200 Ventura</a> is a fresh take on the traditional office experience. Fully remodeled in 2017, the property offers a tenant amenity lounge and kitchen, individual work cubbies, private conference room, renovated bathrooms and upgraded building systems. All with one goal in mind: to improve your work experience.</p>
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
              { src: pic15 }, { src: pic16 }, { src: pic17 }, { src: pic18 }, { src: pic19 }, { src: pic20 }, { src: pic21 },
              { src: pic22 }, { src: pic23 }, { src: pic24 }         
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
                <h3>PROPERTY OWNER</h3>
                <p>PETER HORN | <a href="www.soma-capital" className="contact-type">Soma Capital Partners</a></p>
                <p><a href="tel:1-415-233-9978"><i className="fa fa-phone"></i> 415.233.9978</a></p>
                <p><a href="mailto:phorn@soma-capital.com?Subject=16200 Ventura"><i className="fa fa-envelope"></i> phorn@soma-capital.com</a></p>
              </div>
              <div className="contact contact-2">
                <h3>PROPERTY MANAGER</h3>
                <p>SEANA YATES | <a href="www.mosscompany.com" className="contact-type">Moss & Company</a></p>
                <p><a href="tel:1-818-788-2714"><i className="fa fa-phone"></i> 415.233.9978</a></p>
                <p><a href="mailto:phorn@seanayates@mosscompany.com?Subject=16200 Ventura"><i className="fa fa-envelope"></i> seanayates@mosscompany.com</a></p>
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