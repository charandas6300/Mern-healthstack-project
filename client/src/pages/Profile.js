import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import profileImg from "../images/profile.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { hostURL } from "../URL";

const Profile = () => {
  const USER_KEY = "current user";
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem(USER_KEY))
  );
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem(USER_KEY, JSON.stringify(profile));
    axios
      .patch(`${hostURL}/users/${profile.id}`, profile)
      .then(() => {
        alert("Your Profile has been updated successfully");
        window.location.reload();
      })
      .catch(() => {
        alert("Something went wrong.Please try again.");
      });
    navigate("/profile");
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Center>
        <Logo>YOUR PROFILE</Logo>
      </Center>
      <Container>
        <Img src={profileImg} alt="Profile" />
        <FormDiv>
          <form onSubmit={submitHandler}>
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
                minlength="5"
                value={profile.username}
                onChange={(e) => {
                  setProfile({ ...profile, username: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
                value={profile.email}
                onChange={(e) => {
                  setProfile({ ...profile, email: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                minlength="5"
                value={profile.password}
                onChange={(e) => {
                  setProfile({ ...profile, password: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Re-Type Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                minlength="5"
                value={profile.confirmPassword}
                onChange={(e) => {
                  setProfile({ ...profile, confirmPassword: e.target.value });
                }}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share this information with anyone else.
              </small>
            </div>
            <button type="submit" class="btn btn-primary">
              UPDATE PROFILE
            </button>
          </form>
        </FormDiv>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 80px 30px 180px 80px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 30px;
`;

const Img = styled.img`
  flex: 0.6;
  height: 500px;
  width: 600px;
  padding: 20px;

  &:hover {
    box-shadow: 0px 0px 2.3px -5px rgba(0, 0, 0, 0.02),
      0px 0px 5.6px -5px rgba(0, 0, 0, 0.028),
      0px 0px 10.5px -5px rgba(0, 0, 0, 0.035),
      0px 0px 18.8px -5px rgba(0, 0, 0, 0.042),
      0px 0px 35.1px -5px rgba(0, 0, 0, 0.05),
      0px 0px 84px -5px rgba(0, 0, 0, 0.07);
  }
`;

const FormDiv = styled.div`
  flex: 1.2;
  form {
    padding: 15px;
    margin-left: 100px;
    width: 80%;
    &:hover {
      box-shadow: 0px 0px 2.3px -5px rgba(0, 0, 0, 0.02),
        0px 0px 5.6px -5px rgba(0, 0, 0, 0.028),
        0px 0px 10.5px -5px rgba(0, 0, 0, 0.035),
        0px 0px 18.8px -5px rgba(0, 0, 0, 0.042),
        0px 0px 35.1px -5px rgba(0, 0, 0, 0.05),
        0px 0px 84px -5px rgba(0, 0, 0, 0.07);
    }
  }
`;

export default Profile;
