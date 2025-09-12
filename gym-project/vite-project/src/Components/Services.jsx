

function Services () {
  return (
    <div>

  
  {/* Start Service */}
  <section className="service" id="service">
    <div className="container">
      <div className="content">
        <div className="text box wow slideInLeft">
          <h2>Gym Services</h2>
          <p>
          <ul className="lis">
            <li><b>Personal Training:</b> One-on-one training with a certified personal trainer who can create a customized workout plan tailored to your specific goals and needs.</li>
            <br />
            <li><b>Cardio Equipment: </b>Treadmills, ellipticals, stationary bikes, and other cardio machines to help you improve your cardiovascular health.</li>
            <br />
            <li><b>Massage and Recovery:</b> Services that offer massage therapy, physical therapy, and recovery techniques, such as cryotherapy and compression therapy.</li>
            <br />
            <li><b>Weightlifting and Strength Training:</b> Access to a range of weightlifting equipment, including free weights, machines, and strength training machines.</li>
            </ul>
          </p>
          
          <br /><br />
          <a href className="btn">Join Now</a>
        </div>
        <div className="accordian box wow slideInRight">
          <div className="accordian-container active">
            <div className="head">
              <h4>Cardiovascular Equipment</h4>
              <span className="fa fa-angle-down" />
            </div>
            <div className="body">
              <p><ul className="lis"> <li><b>Treadmills:</b> Allow users to walk, jog, or run on a continuous belt, with adjustable incline and speed settings.</li>
              <li> <b>Exercise Bikes or Spin Bikes:</b> Provide a low-impact, cardiovascular workout for the legs, with adjustable resistance and pre-set programs.
              </li>
              <li><b>Elliptical Trainers:</b> Combine elements of running and cycling, with a low-impact, elliptical motion, and adjustable resistance and incline settings.</li>
              </ul>
              </p>
            </div>
          </div>
          <div className="accordian-container">
            <div className="head">
              <h4>Strength Training Equipment</h4>
              <span className="fa fa-angle-up" />
            </div>
            <div className="body">
              <p><ul className="lis">
                <li><b>Dumbbells:</b> Adjustable or fixed weights that can be used for a variety of exercises, such as bicep curls, shoulder presses, and chest presses.</li>
                <li><b>Barbells:</b> Long, weighted bars that can be used for exercises like squats, deadlifts, and bench presses.</li>
                <li><b>Kettlebells:</b> Weighted balls with a handle, used for swings, squats, and presses.</li>
                <li><b>Weight Plates:</b> Used to add weight to barbells and other equipment.</li>
              </ul>


</p>
            </div>
          </div>
          <div className="accordian-container">
            <div className="head">
              <h4>Group Fitness Class</h4>
              <span className="fa fa-angle-up" />
            </div>
            <div className="body">
              <p><ul className="lis">
                <li><b>Zumba:</b> A high-energy dance fitness class that combines Latin and international music with aerobic exercise.</li>
                <li><b>BodyPump:</b> A weight-based group fitness class that combines strength training with aerobic exercise.</li>
              <li><b>Pilates:</b> A low-impact, bodyweight-based class that focuses on core strength, flexibility, and body control.</li>
              <li><b>Yoga:</b> A low-impact, bodyweight-based class that combines physical postures, breathing techniques, and meditation.</li>

                </ul></p>
            </div>
          </div>
          <div className="accordian-container">
            <div className="head">
              <h4>Other Services</h4>
              <span className="fa fa-angle-up" />
            </div>
            <div className="body">
              <p><ul className="lis"><li><b>Personal Training:</b> One-on-one training with a certified personal trainer who can create a customized workout plan tailored to your specific goals and needs.</li>
              <li><b>Fitness Assessments:</b> Comprehensive fitness assessments to help you track your progress and set goals.</li>
              <li><b>Nutrition Planning:</b> Personalized nutrition planning to help you achieve your fitness goals.</li>
              <li><b>Wellness Coaching:</b> Coaching services to help you achieve overall wellness and balance in your life.</li>
              </ul>


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="classes" id="classes">
	<div class="container">
		 <div class="content">
		 	  <div class="box img wow slideInLeft">
		 	  	 <img src="/abhi class 1.png" alt="classes" />
		 	  </div>
		 	  <div class="box text wow slideInRight">
		 	  	 <h2>Our Classes</h2>
		 	  	 <p>Our gym offers a diverse range of classes to cater to different fitness goals and preferences. We have cardio-based classes such as Zumba, Spinning, Boot Camp, and HIIT, which are designed to get your heart rate up and burn calories. Our strength training classes include BodyPump, Pilates, and Yoga, which focus on building muscle and improving overall strength.</p>
		 	  	<div class="class-items">
		 	  	 <div class="item wow bounceInUp">
                     <div class="item-img">
                     	 <img src="/abhi day 1.jpg" alt="classes" />
                     	 <div class="price">
							₹2000
                     	 </div>
                     </div>
                     <div class="item-text">
                     	  <h4>Stretching Training</h4>
                     	  <p> <ul className="lis">
                          <li>Dumbbells</li>
                          <li>Barbells</li>
                          <li>Kettlebells</li>
                          <li>Weight Plates</li>
                         </ul></p>
                     	  
                     </div>
		 	  	 </div>
		 	  	 <div class="item wow bounceInUp">
                     <div class="item-text">
                     	  <h4>Group Fitness Class</h4>
                     	  <p><ul className="lis"><li>BodyPump</li>
                          <li>Pilates</li>
                          <li>Yoga</li>
                          <li>Zumba</li></ul></p>
                     	  
                     </div>
                     <div class="item-img">
                     	 <img src="/abhi day 2.jpg" alt="classes" />
                     	 <div class="price">
							₹2000
                     	 </div>
                     </div>
		 	  	 </div>
		 	  	</div>
		 	  </div>
		 </div>
	</div>
</section>
</div>

  )
}
export default Services