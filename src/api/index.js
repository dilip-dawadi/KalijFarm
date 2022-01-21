import axios from 'axios';

const API = axios.create({ baseURL: 'https://kalijfarm.herokuapp.com/' });
// helping auth middleware
// this function is happen before all of the fetch req
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
export const fetchKalijs = () => API.get(`/kalijs`);
export const fetchKalij = (id) => API.get(`/kalijs/${id}`);
export const fetchAbouts = () => API.get(`/about`);

export const createKalijs = (newKalij) => API.post(`/kalijs`, newKalij);
export const createAbout = (newAbout) => API.post(`/about`, newAbout);
export const updateKalij = (id, updatedKalij) => API.patch(`/kalijs/${id}`, updatedKalij);
export const updateAbout = (id, updatedAbout) => API.patch(`/about/${id}`, updatedAbout);

export const deleteKalijs = (id) => API.delete(`/kalijs/${id}`)
export const deleteAbouts = (id) => API.delete(`/about/${id}`)

export const likeKalijs = (id) => API.patch(`/kalijs/${id}/likeKalij`);

export const signIn = (formData) => API.post(`/user/signin`, formData);

export const signUp = (formData) => API.post(`/user/signup`, formData);