import React from 'react';
import styled from 'styled-components';
import LeftAutoComponent from '../../components/main/LeftAuto';
// import CenterComponent from '../../components/main/Center';
// import RightMarkdown from '../../components/main/RightMarkdown';
import MdEditorComponent from '../../components/main/MDEditor';

const Main = () => {
  return (
    <MainContainer>
      {/* 페이지 구조화를 위한 작업 (Outliner) */}
      <AutoInputSection>
        <LeftAutoComponent />
      </AutoInputSection>

      <MdEditSection>
        <MdEditorComponent />
      </MdEditSection>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 0.5fr 1.3fr;
  gap: 50px;
`;

const AutoInputSection = styled.section`
  /* display: flex; */
  max-width: 350px;
  /* width: 350px; */
`;
const MdEditSection = styled.section``;
// const CenterSection = styled.section``;
// const RightSection = styled.section``;
