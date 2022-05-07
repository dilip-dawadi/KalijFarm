import axios from 'axios';

const API = axios.create({ baseURL: `https://rhinospotnkalijfarm.herokuapp.com/` });

// const API = axios.create({ baseURL: 'http://localhost:5000/' });
// helping auth middleware
// this function is happen before all of the fetch req
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
// fetch food
export const fetchKalijs = (up) => API.get(`/kalijs?up=${up}`);
export const fetchKal = (page) => API.get(`/kalijs/all?page=${page}`);
export const fetchKalBySearch = (searchKals) => API.get(`/kalijs/all/search?searchKals=${searchKals.search || 'none'}&tags=${searchKals.tags}`);
export const fetchKalij = (id) => API.get(`/kalijs/${id}`);
export const deleteKalijs = (id) => API.delete(`/kalijs/${id}`)
export const updateKalij = (id, updatedKalij) => API.patch(`/kalijs/${id}`, updatedKalij);
export const createKalijs = (formData) => API.post(`/kalijs`, formData);
export const foodLike = (id) => API.patch(`/kalijs/${id}/foodlike`);
// export const createKalijs = (formData) => API.post(`/kalijs`, formData,
// {headers: {
//   'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
// }},);
// export const updateKalij = (id, updatedKalij) => API.patch(`/kalijs/${id}`, updatedKalij, {headers: {
//   'Content-Type': `multipart/form-data; boundary=${updatedKalij._boundary}`,
// }});
// end Food

// fetch Room
export const fetchRooms = (rp) => API.get(`/room?rp=${rp}`);
export const fetchRoomBySearch = (roomSearchD) => API.get(`/room/search?book=${roomSearchD.book}&ps=${roomSearchD.ps}&pe=${roomSearchD.pe}&tags=${roomSearchD.tags}`);
export const fetchaRoom = (id) => API.get(`/room/${id}`);
export const deleteaRoom = (id) => API.delete(`/room/${id}`)
export const updateaRoom = (id, updateaRoom) => API.patch(`/room/${id}`, updateaRoom);
export const createaRoom = (createaRoom) => API.post(`/room`, createaRoom);
export const roomBook = (booked) => API.post(`/room/booked`, booked);
export const roomLike = (id) => API.patch(`/room/${id}/roomlike`);
// End Room

// fetch About
export const fetchAbouts = () => API.get(`/about`);
export const createAbout = (newAbout) => API.post(`/about`, newAbout);
export const updateAbout = (id, updatedAbout) => API.patch(`/about/${id}`, updatedAbout);
export const deleteAbouts = (id) => API.delete(`/about/${id}`)

// fetch Gallery
export const fetchGalleries = () => API.get(`/gallery`);
export const createaGallery = (newGallery) => API.post(`/gallery`, newGallery);
export const updateaGallery = (id, gallery) => API.patch(`/gallery/${id}`, gallery);
export const deleteaGallery = (id) => API.delete(`/gallery/${id}`)
// fetch auth
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const fetchVerified = (id, token) => API.get(`/user/${id}/verify/${token}`);
export const signUp = (formData) => API.post(`/user/signup`, formData);
export const play = (play) => API.post(`/user/play`, play);