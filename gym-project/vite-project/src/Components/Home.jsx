import React from 'react'
import Package from './Package'
import Schedule from './Schedule'
import Services from './Services'
import Contect from './Contect'
import About from './About'
function Home  () {
  return (
    <>

  <section className="home wow flash" id="home">
    <div className="container">
      <h1 className="wow slideInLeft" data-wow-delay="1s">It's <span>gym</span> time. Let's go</h1>
      <h1 className="wow slideInRight" data-wow-delay="1s">We are ready to <span>fit you</span></h1>
    </div>
    <a href="#about" className="go-down">
      <i className="fa fa-angle-down" aria-hidden="true" />
    </a>
  </section>
 <About></About>

<Package></Package>
<Schedule></Schedule>
<Services></Services>
<Contect></Contect>
 
    </>
    
  )
}
export default Home