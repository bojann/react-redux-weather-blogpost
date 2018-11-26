import { combineReducers } from 'redux';
import fetchWeather from './ReducerWeather';
import blogPosts from './ReducerPosts';

const rootReducer = combineReducers({
  weather: fetchWeather,
  posts: blogPosts
});

export default rootReducer;
