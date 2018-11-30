import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import SelectedBookReducer from './SelectedBookReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBookReducer
});

export default rootReducer;
