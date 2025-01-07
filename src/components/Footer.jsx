import React from 'react'
import "../style/components/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <ul className="footer-left footer-icon">
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/footer-left-icon-01.png`} />
          <span>master</span>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/footer-left-icon-02.png`} />
          <span>0</span>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/footer-left-icon-03.png`} />
          <span>0</span>
        </li>
      </ul>
      <ul className="footer-right footer-icon">
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/footer-right-icon-01.png`} />
          <span>Go live</span>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/footer-right-icon-02.png`} />
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/footer-right-icon-03.png`} />
        </li>
      </ul>
    </div>
  )
}

export default Footer
