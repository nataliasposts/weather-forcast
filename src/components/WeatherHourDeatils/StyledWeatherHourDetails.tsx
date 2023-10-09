import styled from 'styled-components';

const StyledWeatherHourDetails = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  marginTop: '15px',
  width: '70%',
  '.weather-hour-details': {
    backgroundColor: '#282828',
    borderRadius: '8px',
    color: 'white',
    boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
    padding: '15px',
    height: '20%'
  }
});

export default StyledWeatherHourDetails;
