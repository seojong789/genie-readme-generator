import React from 'react';
import styled from 'styled-components';
import { OutlineHeading } from '../../utils/OutLiner'; /* 페이지 구조화 */

const LeftManualComponent = () => {
  return (
    <>
      <SelectMenuBox>
        {/* <h2>Manual</h2> */}
        <h2>Auto</h2>
        <EditSection>
          <OutlineHeading tag="h3">Edit</OutlineHeading>
        </EditSection>
        <SelectSection>
          <OutlineHeading tag="h3">Select</OutlineHeading>
        </SelectSection>
      </SelectMenuBox>
    </>
  );
};

const SelectMenuBox = styled.div`
  h2 {
    /* color: #a9c1e3; */
    /* color: #e6edf3; */
  }
`;

const EditSection = styled.section``;
const SelectSection = styled.section``;

export default LeftManualComponent;
