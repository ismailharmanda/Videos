import axios from "axios";

const KEY = "AIzaSyBw-xxvhVkCVKIdfcNGIPIXGIGvWEgDZzA";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
