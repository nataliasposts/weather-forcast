import styled from 'styled-components';

const StyledWeatherDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .weather-name {
    border-radius: 8px;
    background-color: #282828;
    color: white;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    padding: 15px;
    width: 20%;
    height: 20%;
  }

  .weather-now {
    margin: 0 0 5px 0;
  }

  .weather-temp-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .weather-temp {
    font-size: 35px;
    margin: 0 20px 15px 0;
    color: #7cb9e8;
  }

  .weather-info {
    border-top: 1px solid;
  }

  .weather-info-row {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }

  .city-name {
    font-size: 14px;
    margin: 0 0 0 10px;
  }

  .weather-date {
    font-size: 14px;
    margin: 0 0 0 10px;
  }

  .weather-sun-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
  }

  .weather-sun-row {
    display: flex;
    flex-direction: row;
    margin: 15px 5px 0 0;
  }

  .text {
    margin-right: 5px;
  }

  .weather-text {
    margin: 0 0 0 10px;
  }

  .weather-sun {
    background-color: #181818;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 15px;
  }

  .weather-details-wrapper {
    background-color: #282828;
    color: white;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border-radius: 8px;
    width: 70%;
    padding: 15px;
    margin-left: 5px;
  }

  .weather-details-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .weather-details {
    background-color: #181818;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 15px;
    width: 20%;
  }

  .weather-details-text {
    font-size: 25px;
    margin: 0 20px 0 0;
    color: #7cb9e8;
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    .weather-details {
      width: 15%;
    }
    .icon {
      width: 30px;
      height: 30px;
      align-self: center;
      margin-top: 5px;
    }
    .weather-details-text {
      font-size: 18px;
      text-align: center;
      margin: 0;
    }
    .weather-sun {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .weather-sun-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .weather-sun-wrapper {
      align-self: center;
      width: 100%;
      justify-content: space-evenly;
    }
    .sun-icon {
      align-self: center;
      margin-bottom: 5px;
    }
    .weather-details {
      align-content: center;
    }
    .weather-name {
      align-self: center;
      margin-bottom: 15px;
      width: 30%;
    }
    .weather-now {
      text-align: center;
    }
    .weather-details-wrapper {
      align-self: center;
    }
    .weather-temp-row {
      justify-content: center;
    }
    .text-enum {
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    .weather-name {
      width: 40%;
    }
    .weather-details-row {
      justify-content: space-around;
    }
    .weather-details {
      width: 30%;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 480px) {
    .weather-name {
      width: 50%;
    }
  }

  @media (max-width: 380px) {
    .weather-name {
      width: 60%;
    }
  }
`;

export default StyledWeatherDetails;
