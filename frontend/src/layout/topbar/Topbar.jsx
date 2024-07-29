import React from 'react';
import styled from 'styled-components';

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopLeftBox>
        <TopButton>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-three-bars Button-visual"
          >
            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
          </svg>
        </TopButton>
      </TopLeftBox>
      <TopRightBox>
        <button>게시판?</button>
        <button>깃헙</button>
        <button>모드변경</button>
        <button>프로필</button>
      </TopRightBox>
    </TopbarContainer>
  );
};

const TopbarContainer = styled.header`
  /* border-bottom: 1px solid #e2e8f0; */
  border-bottom: 1px solid #565656;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #010409;
`;

const TopLeftBox = styled.div``;
const TopRightBox = styled.div``;

const TopButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Topbar;
