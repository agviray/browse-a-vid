import axios from 'axios';

const KEY = 'AIzaSyBex7MWkVJ3_mL7LsFGUPY1DOGTuqklA6k';
 
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});