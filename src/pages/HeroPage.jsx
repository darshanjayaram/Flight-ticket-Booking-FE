import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const HeroPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo ? (
        <div>
          <Container className="d-flex justify-content-center">
            <Card className="mt-4 p-4 d-flex flex-column align-items-center">
              <h1 className="text-center mb-4">
              Flight Booking and Reservation System
              </h1>
              <p className="text-center mb-4 fs-5">
                GUVI Capstone Project
              </p>
              <strong>
                Kindly Signin or SignUp for any search and booking flights
              </strong>
              <i>
                *** for admin login use this credentials{" "}
                <strong>email: </strong>
                admin@gmail.com <strong>password: </strong>123456789 ***
              </i>
              <i>
                *** for user login use this credentials{" "}
                <strong>email: </strong>
                user@gmail.com <strong>password: </strong>123456789 ***
              </i>
            </Card>
          </Container>
        </div>
      ) : (
        <div>
          <Container className="d-flex justify-content-center">
            <Card className="mt-4 p-4 d-flex flex-column align-items-center">
              <h1 className="text-center mb-4">
              Flight Booking and Reservation System
              </h1>
              <p className="text-center mb-4 fs-5">
                GUVI Capstone Project
              </p>
              
              <strong>
                Kindly Signin or SignUp for any search and booking flights
              </strong>
              <i>
                *** for admin signin use this credentials{" "}
                <strong>email: </strong>
                admin@gmail.com <strong>password: </strong>123456789 ***
              </i>
              <i>
                *** for user login use this credentials{" "}
                <strong>email: </strong>
                user@gmail.com <strong>password: </strong>123456789 ***
              </i>
            </Card>
          </Container>
        </div>
      )}
    </>
  );
};

export default HeroPage;
