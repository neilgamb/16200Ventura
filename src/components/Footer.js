import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      Design by <a href="https://www.neilsongamble.com">Neilson Gamble</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool,
}

export default Footer
