import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  return (
    <div>
      <Navbar className="mynavbar py-3">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#e5c1e5" }}>
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            جمعية حقوق الطفل
          </Navbar.Brand>
          <div className="buttons d-flex  align-items-center justify-content-evenly col-3">
            <button className="login_btn">تسجيل الدخول</button>
            <button className="add_btn">اضافة +</button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
