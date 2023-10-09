import styled from 'styled-components';

const StyledWeatherWeekDetails = styled.div`
  margin-top: 15px;

  .weather-week-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .weather-week-details {
    background-color: #282828;
    border-radius: 8px;
    color: white;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    padding: 15px;
    width: 13%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .week-details-text {
    margin: 0;
    text-align: center;
  }

  .icon {
    align-self: center;
    width: 50px;
    height: 50px;
  }

  .text {
    color: #7cb9e8;
  }

  @media (max-width: 640px) {
    .weather-week-wrapper {
      justify-content: center;
    }
    .weather-week-details {
      align-self: center;
      width: 30%;
      margin: 0 5px 10px 0;
    }
  }
`;

export default StyledWeatherWeekDetails;
