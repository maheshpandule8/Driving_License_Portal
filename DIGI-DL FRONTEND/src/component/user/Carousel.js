import React from 'react'
import pic1 from '../images/12.jpg'
import pic2 from '../images/13.jpg'
import pic4 from '../images/14.jpg'
import { Link } from 'react-router-dom'
function Carousel() {
  return (
    <div className="">
        <div className='d-flex justify-content-left'>
  <Link to="/rtologin" className="btn btn-danger mr-3 col-md-1">RTO OFFICER</Link>
</div>
            <div id="id" className='carousel slide' data-bs-ride="true">

{/* <!-- Indicators --> */}
<ul className="carousel-indicators">
    <li data-target="#id" data-slide-to="0" className="active"></li>
    <li data-target="#id" data-slide-to="1"></li>
    <li data-target="#id" data-slide-to="2"></li>
    <li data-target="#id" data-slide-to="3"></li>
</ul>

{/* <!-- The slideshow --> */}
<div className="carousel-inner rounded">
    <div className="carousel-item active">
        <img 
        src={pic1}
        // src={"https://parivahan.gov.in/parivahan//sites/default/files/akam-saath-prayas.jpg"}
            alt="Signs" width="100%" height="500" />
            <div className="carousel-caption">
            </div>
    </div>
    
    <div className="carousel-item">
        <img 
        // src={pic3}
        src={"https://chittorgarh.org/wp-content/uploads/2022/07/Driving-Licence.jpg"}
            alt="Makelicense" width="100%" height="500" />
    </div>
    <div className="carousel-item">
        <img 
        src={pic2}
            alt="signal" width="100%" height="500" />
    </div>
    <div className="carousel-item">
        <img src={pic4}
            alt="roads" width="100%" height="500" />
    </div>
</div>

{/* <!-- Left and right controls --> */}
<a className="carousel-control-prev" href="#id" data-slide="prev"> <span
    className="carousel-control-prev-icon"></span>
</a> <a className="carousel-control-next" href="#id" data-slide="next"> <span
    className="carousel-control-next-icon"></span>
</a>
</div>
<div className='d-flex justify-content-center'>
  <Link to="/user/login" className="btn btn-success mr-3 col-md-3">Login</Link>
  <Link to="/user/register" className="btn btn-primary col-md-3">Register</Link>
</div>

    </div>
    
  )
}

export default Carousel