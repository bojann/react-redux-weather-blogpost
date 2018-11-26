import { BLOG_POSTS_API } from '../components/enums.js';
import { mapKeys, omit } from 'lodash';

export default function blogPosts(state={}, action) {
  switch (action.type) {
    case BLOG_POSTS_API.TYPE.FETCH_POSTS:
      console.log('GET all xhr:  ', action.payload)
      const newPosts = mapKeys(action.payload.data, 'id');
      return { ...state, ...newPosts }

    case BLOG_POSTS_API.TYPE.DELETE_POST:
      console.log('DELETE xhr:  ', action.payload)
      return omit(state, action.payload);

    case BLOG_POSTS_API.TYPE.FETCH_A_POST:
      console.log('GET One xhr:  ', action.payload)
      return {...state, [action.payload.data.id]: action.payload.data};

    default:
      return state;
  }
}
