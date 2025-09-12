import React from 'react'

function About() {
  return (
    <>
       <section className="about" id="about">
    <div className="container">
      <div className="content">
        <div className="box wow bounceInUp">
          <div className="inner">
            <div className="img">
              <img src="\Abhi about.jpg" alt="about" />
            </div>
            <div className="text">
              <h4>Free Consultation</h4>
              <p>It seems like you're looking for gyms that offer free consultations.
                <br /><br /> From what I've gathered, many gyms and personal trainers offer free consultations to discuss your fitness goals and create a personalized plan. Some popular options include Ferrafitness, Anytime Fitness</p>
            </div>
          </div>
        </div>
        <div className="box wow bounceInUp" data-wow-delay="0.2s">
          <div className="inner">
            <div className="img">
              <img src="/abhi about 2.jpg" alt="about" />
            </div>
            <div className="text">
              <h4>Best Training</h4>
              <p>It seems like you're looking for the best training programs for a gym.
              <br />
              <br />There are various training programs that can help you achieve your fitness <br />goals.
              <br /><br /> Depending on your preferences and goals.</p>
            </div>
          </div>
        </div>
        <div className="box wow bounceInUp" data-wow-delay="0.4s">
          <div className="inner">
            <div className="img">
              <img src="/abhi about 3.jpg" alt="about" />
            </div>
            <div className="text">
              <h4>Build Perfect Body</h4>
              <p>Building the perfect body for the gym takes time, patience, and consistency.
                <br /><br /> Stick to your workout plan, eat a balanced diet, and get enough rest.
                <br /><br /> With dedication and hard work, you can achieve your fitness goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="gallery mb-5" id="gallery">
    <h2>Workout Gallery</h2>
    <div className="content">
      <div className="box wow slideInLeft">
        <img src="/gallery1.jpg" alt="gallery" />
      </div>
      <div className="box wow slideInRight">
        <img src="/gallery2.jpg" alt="gallery" />
      </div>
      <div className="box wow slideInLeft">
        <img src="/gallery3.jpg" alt="gallery" />
      </div>
      <div className="box wow slideInRight">
        <img src="/gallery4.jpg" alt="gallery" />
      </div>
    </div>
  </section>
    </>
  )
}

export default About
