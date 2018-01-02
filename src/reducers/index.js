import { CLEAR_STORIES, LOAD_STORIES} from './../actions/index';

const stories = [
  {
    "id": "1233423423",
    "by": "Kaleigh",
    "username": "Kaleigh60",
    "url": "https://s3.amazonaws.com/uifaces/faces/twitter/mbilderbach/128.jpg",
    "email": "Kaleigh6047@gmail.com",
    "title": "1961-08-07T02:37:45.068Z",
  },
  {
    "id": "144423423",
    "by": "Khalu",
    "username": "Khaluh60",
    "url": "https://s3.amazonaws.com/uifaces/faces/twitter/mbilderbach/128.jpg",
    "email": "Kaleigh6047@gmail.com",
    "title": "1961-08-07T02:37:45.068Z",
  }
]
const initialState ={
  items:[]
}
export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STORIES:
      return {
        items:stories.slice(),
      }
    case CLEAR_STORIES:
      return {
        items:[]
      }
    default:
      return state
  }
}

export default storiesReducer;