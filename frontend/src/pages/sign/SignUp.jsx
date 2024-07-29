// src/components/SignInPage.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SignInPage = () => {
  return (
    // jsx
    <SignContainer>
      <SignUpSection>
        <LogoBox>
          <svg
            height="48"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="48"
            data-view-component="true"
            class="octicon octicon-mark-github"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </LogoBox>

        <h1>Welcome to GitHub!</h1>

        <Form>
          <Input type="text" placeholder="Enter your name*" />
          <Input type="text" placeholder="Enter your email" />
          <Input type="password" placeholder="Create a password*" />
          <Input type="password" placeholder="Input your confirm password" />

          <CreateBox>
            <Button className="" type="submit">
              Sign up
            </Button>
          </CreateBox>
        </Form>
      </SignUpSection>
    </SignContainer>
  );
};

const SignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 80%;
  max-width: 330px;
  max-height: 530px;
  padding: 50px;
  background-color: #f6f8fa;
  /* border: 1px solid #d8dee2; */
  border-radius: 6px;
  /* box-shadow: 5px 5px 5px #c3c4c4; */
  box-shadow: inset 0px 0px 5px black;
  /* box-shadow: 5px 5px 3px white; */

  h1 {
    font-size: 28px;
    margin: 1.5% 1.5% 16px 1.5%;
    /* margin-bottom: 16px; */
  }
`;

const LogoBox = styled.div`
  /* background-color: #d8dee2; */
`;

const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  padding: 24px;
  background: #fff;
  border: 1px solid #d8dee2;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  min-width: 250px;
  min-height: 150px; */
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #d8dee2;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  /* min-width: 250px;
  min-height: 150px; */
  width: 100%;
  margin-bottom: 16px;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #d8dee2;
  border-radius: 4px;
`;

const CreateBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px;
  min-width: 10vw;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const IconSpan = styled.span`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-right: 5px;
`;

export default SignInPage;
