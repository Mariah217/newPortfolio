import React from 'react';

function Footer({ currentPage, handlePagechange }) {
    return (
        <>
        <footer class="icons">
        <div class="row" id="icons">
          <div class="col-sm-1 col-md-1">
            <div class="d-flex justify-content-center">
              <a href="https://github.com/Mariah217">
                <figure class="font-awesome">
                  <i class="fa-brands fa-github fa-2x"></i>
                </figure>
              </a>
            </div>
          </div>
          <div class="col-sm-1 col-md-1">
            <div class="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/mariah-johnston-5b2a9212b/">
                <figure class="font-awesome">
                  <i class="fa-brands fa-linkedin fa-2x"></i>
                </figure>
              </a>
            </div>
          </div>
          <div class="col-sm-1 col-md-1">
            <div class="d-flex justify-content-center">
              <a href="https://twitter.com/Riah_17">
                <figure class="font-awesome">
                  <i class="fa-brands fa-twitter fa-2x"></i>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;