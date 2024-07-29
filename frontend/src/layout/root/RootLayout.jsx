import React from 'react';
// import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom/dist';
import styled from 'styled-components';
import Topbar from '../topbar/Topbar';

export default function RootLayout() {
  // const [containerHeight, setContainerHeight] = useState('calc(100vh - 50px)');
  // const location = useLocation();
  // const token = useLoaderData();

  return (
    <>
      {/* <Container style={{ height: containerHeight }}> */}
      <Container>
        <Topbar />
        <ContentBox>
          {/* <Sidebar /> */}
          <Main>
            <Outlet />
          </Main>
        </ContentBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(100vw - 16px); */
  width: 100vw;
  height: 100vh;
`;

const ContentBox = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Main = styled.main`
  flex-grow: 1;
  /* background-color: #e2e8f0; */
  background-color: #1b1e22;
  overflow-y: auto;
  padding: 16px;
`;
