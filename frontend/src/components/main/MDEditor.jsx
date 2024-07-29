import MDEditor from '@uiw/react-md-editor';
import React, { useState } from 'react';
import styled from 'styled-components';
import { OutlineHeading } from '../../utils/OutLiner';
import rehypeSanitize from 'rehype-sanitize';

const MdEditorComponent = () => {
  const [value, setValue] = useState(
    '**나만의 README를 만들어보세요.**\n\n**기본 양식**'
  );

  return (
    <MdEditorContainer>
      <EditSection>
        <h2>Editor</h2>
        <MDEditor
          value={value}
          onChange={setValue}
          data-color-mode="dark"
          previewOptions={{ rehypePlugins: [[rehypeSanitize]] }} // 보안 문제를 위한 옵션
          height={'75vh'}
          preview="edit"
        />
      </EditSection>

      <PreviewSection>
        <h2>Preview</h2>
        <MDEditor.Markdown
          source={value}
          style={{
            whiteSpace: 'pre-wrap',
            height: 'calc(75vh - 20px)',
            padding: '10px',
          }}
        />
      </PreviewSection>
    </MdEditorContainer>
  );
};

const MdEditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

const EditSection = styled.section``;
const PreviewSection = styled.section``;

// const RightContainer = styled.div`
//   max-width: 450px;
//   height: 100%;
// `;

// const MarkdownSelectSection = styled.section`
//   display: flex;
// `;

// const MarkdownContentSection = styled.section`
//   height: 500px;
// `;

export default MdEditorComponent;
