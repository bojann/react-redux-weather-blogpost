import { combineReducers } from 'redux';
<<<<<<< HEAD
import BooksReducer from './BooksReducer';
import SelectedBookReducer from './SelectedBookReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBookReducer
=======
import fetchWeather from './ReducerWeather';
import blogPosts from './ReducerPosts';

const rootReducer = combineReducers({
  weather: fetchWeather,
  posts: blogPosts
>>>>>>> b841e3d181201e03efe996273622e81d9b8ea501
});

export default rootReducer;
