import React from 'react';
import styled from 'styled-components';
// import { OutlineHeading } from '../../utils/OutLiner'; /* 페이지 구조화 */

const LeftAutoComponent = () => {
  return (
    <AutoContainer>
      {/* <h2>Manual</h2> */}
      {/* <h2>Auto</h2>
        <EditSection>
          <OutlineHeading tag="h3">Edit</OutlineHeading>
        </EditSection>
        <SelectSection>
          <OutlineHeading tag="h3">Select</OutlineHeading>
        </SelectSection> */}
      <h2>Auto</h2>

      <ContentInputSection>
        <DescriptionBox>
          <h2>Auto Easyme</h2>
          <p>아래 필수 정보를 입력하세요.</p>
          <p>AI가 이쁜 Readme를 대신 써드립니다!</p>
        </DescriptionBox>

        {/* tbd Gemini에 필수로 학습시켜야 할 입력 값들 재정의 */}
        <AutoForm>
          <Items>
            <Item>
              <label htmlFor="git">GitHub *</label>
              <input type="email" id="git" name="git" required />
            </Item>
            <Item>
              <label htmlFor="gkey">Gemini Key *</label>
              <input type="text" id="gkey" name="gkey" required />
            </Item>
            <Item>
              <label htmlFor="description">프로젝트 설명</label>
              <input type="text" id="description" name="description" required />
            </Item>
            <Item>
              <label htmlFor="tech">기술스택 *</label>
              <input type="text" id="tech" name="tech" required />
            </Item>
            <Item>
              <label htmlFor="package">Package Manager</label>
              <input type="text" id="package" name="package" required />
            </Item>
          </Items>

          {/* tbd 추가로 학습시키거나 Readme에 추가하고 싶은 내용 (필수x) */}
          <AutoFormActionBox>
            <button>+</button>
            <input type="reset" />
            <button>생성</button>
          </AutoFormActionBox>
        </AutoForm>
      </ContentInputSection>
    </AutoContainer>
  );
};

const AutoContainer = styled.div`
  max-width: 100%;

  h2 {
    /* color: #a9c1e3; */
    /* color: #e6edf3; */
  }
`;

const ContentInputSection = styled.section`
  /* background-color: #e6edf3; */
  background-color: white;
  border-radius: 8px;
  max-height: 75vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const DescriptionBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;

  h2 {
    color: #2c2c2c;
    margin: 1rem;
  }
`;
const AutoForm = styled.form`
  /* height: 100vh; */
`;
const Items = styled.ul`
  list-style: none;
  padding: 1rem;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 0.5rem;
  label {
    margin-bottom: 0.5rem;
  }
  input {
    border-radius: 8px;
    padding: 0.5rem;
  }
`;
const AutoFormActionBox = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  position: sticky;
  bottom: 0;
  z-index: 1;

  button,
  input {
    padding: 0.5rem;
    border: none;
    background-color: white;
  }
`;
export default LeftAutoComponent;
