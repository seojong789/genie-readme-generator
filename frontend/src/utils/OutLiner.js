import styled from 'styled-components';

export const OutlineHeading = ({ tag, children, ...props }) => {
  const Tag = styled(tag)`
    display: none;
    /* font-size: ${({ fontSize }) => fontSize || '10m'}; */
  `;

  return <Tag {...props}>{children}</Tag>;
};
