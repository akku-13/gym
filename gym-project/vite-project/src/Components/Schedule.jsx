function Schedule  () {
  return (
 
<>
  <section className="start-today">
    <div className="container">
      <div className="content">
        <div className="box text wow slideInLeft">
          <h2>Start Your Training Today</h2>
          <p>"Start your training today and take the first step towards a healthier, stronger you. Our expert trainers, state-of-the-art equipment, and supportive community are here to guide you every step of the way. Don’t wait—transform your fitness journey now!"</p>
          <a href className="btn">Start Now</a>
        </div>
        <div className="box img wow slideInRight">
          <img src="/abhi class day.jpg" alt="start today" height={500} width={100} />
        </div>
      </div>
    </div>
  </section>
 
  {/* Start Schedule */}
  <section className="schedule" id="schedule">
    <div className="container">
      <div className="content">
        <div className="box text wow slideInLeft">
          <h2>Classes Schedule</h2>
          <p>
          "Check out our flexible class schedule designed to fit your fitness goals and lifestyle. From intense cardio sessions to strength training and yoga, we offer a variety of classes throughout the week. Join us today and find the perfect time to start your fitness journey!"
          </p>
          <img src="/abhi sudela.png" alt="schedule" height={500} width={100} />
        </div>
        <div className="box timing wow slideInRight">
          <table className="table">
            <tbody>
              <tr>
                <td className="day">Monday</td>
                <td><strong>6:00 AM - 10:00 PM</strong></td>
                <td>Body Building <br /> 9:00 to 10:00 AM</td>
              </tr>
              <tr>
                <td className="day">Tuesday</td>
                <td><strong>6:00 AM - 10:00 PM</strong></td>
                <td>Body Building <br /> 9:00 to 10:00 AM</td>
              </tr>
              <tr>
                <td className="day">Wednesday</td>
                <td><strong>6:00 AM - 10:00 PM</strong></td>
                <td>Body Building <br /> 9:00 to 10:00 AM</td>
              </tr>
              <tr>
                <td className="day">Thursday</td>
                <td><strong>6:00 AM - 10:00 PM</strong></td>
                <td>Body Building <br /> 9:00 to 10:00 AM</td>
              </tr>
              <tr>
                <td className="day">Friday</td>
                <td><strong>6:00 AM - 10:00 PM</strong></td>
                <td>Body Building <br /> 9:00 to 10:00 AM</td>
              </tr>
              <tr>
                <td className="day">Saturday</td>
                <td><strong>6:00 AM - 10:00 PM</strong></td>
                <td>Body Building <br /> 9:00 to 10:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>


    </>
  )
}
export default Schedule