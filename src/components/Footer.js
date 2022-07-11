import React from "react";

import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__columns">
          <div className="footer__column footer__column_content_copyright">
            <p className="footer__author">&#169; 2022 Sergio Ferrer</p>
          </div> 
          <nav className="footer__column footer__column_content_social">
            <h3 className="footer__column-heading">Sergio Ferrer's Social</h3>
            <ul className="footer__list">
              <li className="footer__column-link">
                <a
                  className="footer__link page-link"
                  href="https://www.facebook.com/sergiofrrgs_pixels-105549538426922"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    className="footer__social-icons"
                    src={facebook}
                    alt="Facebook"
                  />
                  Facebook
                </a>
              </li>
              <li className="footer__column-link">
                <a
                  className="footer__link page-link"
                  href="https://instagram.com/sergiofrrgs_pixels"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    className="footer__social-icons"
                    src={instagram}
                    alt="Instagram"
                  />
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
  );
}

export default Footer;