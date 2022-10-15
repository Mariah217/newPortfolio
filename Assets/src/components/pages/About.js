import React from 'react';

function About() {
  return (
    <>
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <h1>Mariah Johnston</h1>
          <div class="parent">
            <img
              src="Assets/images/image3.jpg"
              alt="computer, pen, notepad and coffee"
            />
            <img
              id="me"
              src="Assets/images/Me.png"
              alt="picture of me"
              class="responsive center"
            />
          </div>
        </div>
      </div>

      <div class="row" id="about-me">
        <div class="col-sm-12 col-md-12">
          <div class="card" style="width: 30rem">
            <div class="card-body">
              <h5 class="card-title">About Me:</h5>
              <p class="card-text">
                Hello, my name is Mariah! I am based out of Cincinnati, Ohio and I have a passion for front-end developing. I love using CSS and other frameworks such as Bootstrap and Bulma.
                <br />
                <br />
                I received my certificate of completion for Full Stack Web Development
                through Ohio State University on October 24th, 2022. My interest
                in web development (especially front-end) started back in 2009
                when I started creating layouts for MySpace.
                <br />
                <br />
                Some of the technologies I have been working with recently are:
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About;