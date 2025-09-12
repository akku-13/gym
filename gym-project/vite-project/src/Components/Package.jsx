import {Link} from 'react-router-dom'

function Package  () {
  return (
    <div>
 <div>

  
  {/* Start Price */}
  <section className="price-package" id="price">
    <div className="container">
      <h2>Choose Your Package</h2>
      <div className="abc">
        <p className="title-p">1. <b>Basic Membership:</b> Access to gym equipment and facilities during standard hours.
          <br />
          2. <b>Premium Membership:</b> Includes everything in basic, personal training sessions.
          <br />
          3. <b>Family Package:</b> Discounts for multiple family members, allowing everyone to join and work out together.
          <br />
          4. <b>Student or Senior Discounts:</b> Reduced rates for students or seniors, making fitness more accessible.</p>
        <p />	 
      </div> 
      <div className="content">
        <div className="box wow bounceInUp">
          <div className="inner">
            <div className="price-tag">
              ₹3000/Month
            </div>
            <div className="img">
              <img src="/price1.jpg" alt="price" />
            </div>
            <div className="text">
              <h3>Body Building Training</h3>
              <p>Get Free WiFi</p>
              <p>Month to Month</p>
              <p>No Time Restrictions</p>
              <p>Gym and Cardio</p>
              <p>            </p>
         <Link to='/gymjoiningform'  className="btn">Join Now</Link> 
       
            </div>
          </div>
        </div>
        <div className="box wow bounceInUp" data-wow-delay="0.2s">
          <div className="inner">
            <div className="price-tag">
              ₹4000/Month
            </div>
            <div className="img">
              <img src="/price2.jpg" alt="price" />
            </div>
            <div className="text">
              <h3>Weight Loss Training</h3>
              <p>Get Free WiFi</p>
              <p>Month to Month</p>
              <p>No Time Restrictions</p>
              <p>Gym and Cardio</p>
              <p />
              <Link to='/gymjoiningform'  className="btn">Join Now</Link>
            </div>
          </div>
        </div>
        <div className="box wow bounceInUp" data-wow-delay="0.4s">
          <div className="inner">
            <div className="price-tag">
              ₹5000/Month
            </div>
            <div className="img">
              <img src="/price3.jpg" alt="price" />
            </div>
            <div className="text">
              <h3>Strength Training</h3>
              <p>Get Free WiFi</p>
              <p>Month to Month</p>
              <p>No Time Restrictions</p>
              <p>Gym and Cardio</p>
              <p />
              <Link to='/gymjoiningform'  className="btn">Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}
export default Package