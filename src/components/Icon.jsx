import React from 'react'

const Icon = () => {
  return (
    <div className="fab-container">
      <div className="fab fab-icon-holder fab1">
        <i class="fa-solid fa-plus"></i>
      </div>
      <ul className="fab-options">
        <li>
          <div className="fab-icon-holder">
            <a href="tel:+91 9898989898">
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
        </li>
        <li>
          <div className="fab-icon-holder">
            <a href="mailto:email@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </li>
        <li>
          <div className="fab-icon-holder">
            <a href="https://wa.me/1XXXXXXXXXX">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Icon