import React, { useEffect, useState } from 'react';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const navigate = useNavigate();
  const token = useRouteLoaderData('root');

  useEffect(() => {
    setActiveMenuIndex(0);
  }, [token]);

  const handleClickHome = () => {
    navigate('/');
  };

  // const handleMenuClick = (index) => {
  //   setActiveMenuIndex(index);
  //   navigate(`${menuData[0].links[index]}`);
  // };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <SidebarContainer>
      <SidebarHeader onClick={handleClickHome}>GenieRE</SidebarHeader>
      <SidebarCenter>
        <hr />
      </SidebarCenter>
      <SidebarWrapper>
        <SidebarMenu>
          {/* <SidebarTitle>{menuData[0].title}</SidebarTitle> */}
          <SidebarTitle>Menu</SidebarTitle>
          {/* <SidebarList>
            {token ? (
              menuData[0].items.map((item, itemIndex) => (
                <SidebarListItem
                  key={itemIndex}
                  active={itemIndex === activeMenuIndex}
                  onClick={() => handleMenuClick(itemIndex)}
                >
                  {item}
                </SidebarListItem>
              ))
            ) : (
              <>
                <SidebarListItem onClick={handleLoginClick}>
                  로그인
                </SidebarListItem>
                <SidebarListItem onClick={handleLoginClick}>
                  temp
                </SidebarListItem>
              </>
            )}
          </SidebarList> */}

          {/* nav>ul>li 형식으로 바꿔. */}
          <SidebarList>
            <SidebarListItem onClick={handleLoginClick}>temp</SidebarListItem>
            <SidebarListItem onClick={handleLoginClick}>temp</SidebarListItem>
            <SidebarListItem onClick={handleLoginClick}>temp</SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 280px;
  background-color: white;
  position: sticky;
  /* top: 50px; */
  /* height: 100vh; */
  border-right: 1px solid #e2e8f0;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'om';
  font-weight: bold;
  font-size: 50px;
  color: #a9c1e3;
  cursor: pointer;
`;

const SidebarCenter = styled.div`
  display: flex;
  justify-content: center;

  hr {
    height: 1px;
    border: none;
    border-top: 1px solid lightgray;
    width: 90%;
  }
`;

const SidebarWrapper = styled.div`
  padding: 20px;
  padding-top: 2rem;
  color: #8c8c8c;
`;

const SidebarMenu = styled.div`
  margin-bottom: 2rem;
  font-family: 'sunB';
`;

const SidebarTitle = styled.h3`
  font-size: 0.9rem;
  color: rgb(197, 197, 197);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0.5rem;
  font-family: 'sunB';
`;

const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 4%;
  background-color: ${(props) => (props.active ? '#e2e8f0' : 'transparent')};

  &:hover {
    background-color: #e2e8f0;
  }
`;

export default Sidebar;
