import MDEditor from '@uiw/react-md-editor';
import React, { useState } from 'react';
import styled from 'styled-components';
import { OutlineHeading } from '../../utils/OutLiner';
import rehypeSanitize from 'rehype-sanitize';

const RightMarkdown = () => {
  const [value, setValue] = useState('**Hello world!!!**');
  const [isEdit, setIsEdit] = useState(true);
  var md;

  const handleClickMenu = () => {
    setIsEdit((prevState) => !prevState);
  };

  if (isEdit) {
    md = (
      <MDEditor
        value={value}
        onChange={setValue}
        data-color-mode="dark"
        previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
        height={'100%'}
      />
    );
  } else {
    md = value ? (
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    ) : (
      <p>Edit 을 클릭하여 입력해주세요.</p>
    );
  }

  return (
    <RightContainer>
      <OutlineHeading tag="h2">Markdown</OutlineHeading>
      <MarkdownSelectSection>
        <h2 onClick={handleClickMenu}>Edit</h2>
        <h2 onClick={handleClickMenu}>Preview</h2>
      </MarkdownSelectSection>

      <MarkdownContentSection>{md}</MarkdownContentSection>
      {/* <div
          className="markdownDiv"
          data-color-mode="light"
          style={{ padding: 15 }}
        >
          <MDEditor.Markdown
            style={{ padding: 10 }}
            // source={mkdStr}
          />
        </div> */}
    </RightContainer>
  );
};

const RightContainer = styled.div`
  max-width: 450px;
  height: 100%;
`;

const MarkdownSelectSection = styled.section`
  display: flex;
`;

const MarkdownContentSection = styled.section`
  height: 500px;
`;

export default RightMarkdown;
