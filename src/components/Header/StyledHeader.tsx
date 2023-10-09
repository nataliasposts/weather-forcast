import styled from 'styled-components';

const StyledHeader = styled.div`
  max-width: 100%;
  z-index: 11;
  position: relative;

  .container {
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
  }

  .header-text {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
`;

export default StyledHeader;
