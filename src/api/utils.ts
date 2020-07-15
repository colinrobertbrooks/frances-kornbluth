import axios from 'axios';

export const adapter = axios.create({
  baseURL: 'https://spreadsheets.google.com/feeds/',
});
