import axios from 'axios';

export const adapter = axios.create({
  baseURL: 'https://sheets.googleapis.com/v4/spreadsheets',
});
