import React from "react";

function Footer() {
  return (
    <footer class="footer">
        <div class="footer__columns">
          <div class="footer__column footer__column_content_copyright">
            <p class="footer__author">&#169; 2022 Sergio Ferrer</p>
          </div> 
          <nav class="footer__column footer__column_content_social">
            <h3 class="footer__column-heading">Sergio Ferrer's Social</h3>
            <ul class="footer__list">
              <li class="footer__column-link">
                <a
                  class="footer__link page-link"
                  href="https://m.me/YPracticum"
                >
                  <img
                    class="footer__social-icons"
                    src="images/facebook_white.svg"
                    alt="Facebook"
                  />
                  Facebook
                </a>
              </li>
              <li class="footer__column-link">
                <a
                  class="footer__link page-link"
                  href="https://instagram.com/y_practicum"
                >
                  <img
                    class="footer__social-icons"
                    src="images/instagram_white.svg"
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