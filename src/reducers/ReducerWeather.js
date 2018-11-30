import { WEATHER_API } from '../components/enums';

export default function fetchWeather(state=[], action) {
  switch (action.type) {
    case WEATHER_API.TYPE:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
