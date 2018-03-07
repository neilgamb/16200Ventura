import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      isGalleryVisible: false,
      currentImage: 0
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.handleOpenGallery = this.handleOpenGallery.bind(this)
    this.handleCloseGallery = this.handleCloseGallery.bind(this)
    this.handleGoToNext = this.handleGoToNext.bind(this)
    this.handleGoToPrev = this.handleGoToPrev.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleOpenGallery(){
    this.setState({
      isGalleryVisible: true
    })
  }

  handleCloseGallery(){
    this.setState({
      isGalleryVisible: false
    })
  }

  handleGoToNext(){
    this.setState({
			currentImage: this.state.currentImage + 1,
		});
  }

  handleGoToPrev(){
    this.setState({
			currentImage: this.state.currentImage - 1,
		});
  }

  initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <script src="https://use.fontawesome.com/9be3235021.js"></script>
        </Helmet>

        <div id="wrapper">

          <Header openGallery={this.handleOpenGallery} onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
          <Main
            isGalleryVisible={this.state.isGalleryVisible}
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
            closeLightbox={this.handleCloseGallery}
            currentImage={this.state.currentImage}
            gotoNext={this.handleGoToNext}
            gotoPrev={this.handleGoToPrev}
          />
          <Footer timeout={this.state.timeout} />

        </div>
        <div id="bg"></div>
      </div>
    )
  }
}

Template.propTypes = {
  route: React.PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`