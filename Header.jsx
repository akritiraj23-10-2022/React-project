import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row,Col } from 'reactstrap'
import '../../styles/header.css'

const Header = () => {
  return (
    <header className="header">
    {/*========header top===========*/ }
   <div className="header__top">
    <Container>
      <Row>
        <Col lg='6' md='6' sm='6'>
        <div className="header__top__left">
            <span>Need Help?</span>
          <span className="header__top_help">
          <i class="ri-phone-fill"></i> +1-202-555-0149
            </span>
          </div>
        </Col>

        <Col lg='6' md='6' sm='6'>
          <div  className="header__top__right d-flex align-items-center justify-content-end gap-4">
          <Link to="#" className="d-flex align-items-center gap-1">
          <i class="ri-logout-circle-r-line"></i> Login 
          </Link>
          
          <Link to="#" className="d-flex align-items-center gap-1">
          <i class="ri-user-fill"></i>
          Register 
          </Link>
          </div>
        </Col>
      </Row>
    </Container>
   </div>


       {/*========header Middle===========*/ }
       <div className="header__middle">
        <Container>
          <Row>
            <Col lg='4' md ='3' sm='4'>
              <div className="logo">
                <h1><Link to='/home'>
                <i class="ri-car-fill"></i>
                <span>SRI OM SAI</span>
                </Link></h1>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header__location">
                <span><i class="ri-earth-fill"></i></span>
                <div className="header__location-content">
                  <h4>Bihar</h4>
                  <h6>Patna City, Gaya</h6>
                </div>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header__location">
                <span><i class="ri-time-line"></i></span>
                <div className="header__location-content">
                  <h4>Monday To Sunday</h4>
                  <h6>9:00Am-6:00Pm</h6>
                </div>
              </div>
            </Col>

            <Col lg='2' md='3' sm='0'>
              <button className="header__btn btn d-flex align-items-center justify-content-end text-end">
                <Link to='/contant'>
                <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
       </div>
    </header>
  );
};

export default Header;