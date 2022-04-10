import axios from 'axios';

// const API = axios.create({ baseURL: `https://rhinospotnkalijfarm.herokuapp.com/` });

const API = axios.create({ baseURL: 'http://localhost:5000/' });
// helping auth middleware
// this function is happen before all of the fetch req
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
export const fetchKalijs = (userPage) => API.get(`/kalijs?userPage=${userPage}`);
export const fetchKal = (page) => API.get(`/kalijs/all?page=${page}`);
export const fetchKalBySearch = (searchKals) => API.get(`/kalijs/all/search?searchKals=${searchKals.search || 'none'}&tags=${searchKals.tags}`);
export const fetchKalij = (id) => API.get(`/kalijs/${id}`);
export const fetchAbouts = () => API.get(`/about`);

// export const createKalijs = (formData) => API.post(`/kalijs`, formData,
// {headers: {
//   'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
// }},);
export const createKalijs = (formData) => API.post(`/kalijs`, formData);
export const createAbout = (newAbout) => API.post(`/about`, newAbout);

// export const updateKalij = (id, updatedKalij) => API.patch(`/kalijs/${id}`, updatedKalij, {headers: {
//   'Content-Type': `multipart/form-data; boundary=${updatedKalij._boundary}`,
// }});
export const updateKalij = (id, updatedKalij) => API.patch(`/kalijs/${id}`, updatedKalij);
export const updateAbout = (id, updatedAbout) => API.patch(`/about/${id}`, updatedAbout);

export const deleteKalijs = (id) => API.delete(`/kalijs/${id}`)
export const deleteAbouts = (id) => API.delete(`/about/${id}`)

export const likeKalijs = (id) => API.patch(`/kalijs/${id}/likeKalij`);

export const signIn = (formData) => API.post(`/user/signin`, formData);

export const fetchVerified = (id, token) => API.get(`/user/${id}/verify/${token}`);

export const signUp = (formData) => API.post(`/user/signup`, formData);
export const play = (play) => API.post(`/user/play`, play);