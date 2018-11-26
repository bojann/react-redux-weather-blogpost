import { WEATHER_API, BLOG_POSTS_API } from '../components/enums';
import axios from 'axios';

export function fetchWeather(city) {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},pl&appid=${WEATHER_API.KEY}&units=metric`;
  const weatherData = axios.get(URL);

  return {
    type: WEATHER_API.TYPE,
    payload: weatherData
  }
}

export function fetchBlogPosts() {
  const URL = `http://reduxblog.herokuapp.com/api/posts?key=${BLOG_POSTS_API.KEY}`;
  const request = axios.get(URL);

  return {
    type: BLOG_POSTS_API.TYPE.FETCH_POSTS,
    payload: request
  }
}

export function postBlogPost(inputValues, cb) {
  const URL = `http://reduxblog.herokuapp.com/api/posts?key=${BLOG_POSTS_API.KEY}`;
  const request = axios.post(URL, inputValues).then((post) => {
    cb();
    return post;
  });

  return {
    type: BLOG_POSTS_API.TYPE.CREATE_POST,
    payload: request
  }
}

export function fetchBlogPost(id) {
  const URL = `http://reduxblog.herokuapp.com/api/posts/${id}?key=${BLOG_POSTS_API.KEY}`;
  const request = axios.get(URL);

  return {
    type: BLOG_POSTS_API.TYPE.FETCH_A_POST,
    payload: request
  }
}

export function deleteBlogPost(id, cb) {
  const URL = `http://reduxblog.herokuapp.com/api/posts/${id}?key=${BLOG_POSTS_API.KEY}`;
  const request = axios.delete(URL).then((post) => {
    cb();
    return post;
  });

  return {
    type: BLOG_POSTS_API.TYPE.DELETE_POST,
    payload: request
  }
}




export function fetchComments(ev) {
  const fetchCommentsSuccess = (data) => ({
    type: GET_COMMENTS_TYPE,
    payload: {
      ...data
    }
  });

  const fetchCommentsFailure = (error) => ({
    type: ERROR_ACTION_TYPE,
    payload: {
      error
    }
  });
console.log('********************************')
  return (dispatch) => {
console.log('+++++++++++++++++++')
    axios.get('http://jsonplaceholder.typicode.com/comments')
      .then( ({res}) => {
        console.log('===============================>')
        dispatch(fetchCommentsSuccess(res.data));
      })
      .catch(err => {
        console.error('===============================>')
        dispatch(fetchCommentsFailure(err.message))
      });
  };
}
