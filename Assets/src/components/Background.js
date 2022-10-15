import React from 'react';

function Background({ currentPage, handlePageChange }) {
    return (
        <>
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <h1>Portfolio</h1>
                    <div class="parent">
                        <img
                            src="Assets/images/image3.jpg"
                            alt="computer, pen, notepad and coffee"
                            class="backgroundimg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background;