import styled from 'styled-components';

const StyledSearchComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 15px 15px 15px;

  .serch-input {
    background-color: #282828;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    height: 50px;
    border-radius: 8px;
    width: 40%;
    padding: 10px;
    color: white;
  }

  @media (max-width: 640px) {
    justify-content: center;
    .serch-input {
      width: 80%;
    }
  }
`;

export default StyledSearchComponent;
