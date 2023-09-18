import axios from 'axios';
import queryString from 'query-string';
import { DfdfweInterface, DfdfweGetQueryInterface } from 'interfaces/dfdfwe';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDfdfwes = async (query?: DfdfweGetQueryInterface): Promise<PaginatedInterface<DfdfweInterface>> => {
  const response = await axios.get('/api/dfdfwes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDfdfwe = async (dfdfwe: DfdfweInterface) => {
  const response = await axios.post('/api/dfdfwes', dfdfwe);
  return response.data;
};

export const updateDfdfweById = async (id: string, dfdfwe: DfdfweInterface) => {
  const response = await axios.put(`/api/dfdfwes/${id}`, dfdfwe);
  return response.data;
};

export const getDfdfweById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/dfdfwes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDfdfweById = async (id: string) => {
  const response = await axios.delete(`/api/dfdfwes/${id}`);
  return response.data;
};
