import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <>
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <containter class="d-flex flex-row-reverse bd-highlight">
                        <nav>
                            <ul class="nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#about"
                                        onClick={() => handlePageChange('About')}
                                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                                        About
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio"
                                        onClick={() => handlePageChange('Portfolio')}
                                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                                        Portfolio
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact"
                                        onClick={() => handlePageChange('Contact')}
                                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                        Contact
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#resume"
                                        onClick={() => handlePageChange('Resume')}
                                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </containter>
                </div>
            </div>
        </>
    )
}

export default NavTabs;