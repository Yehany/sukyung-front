import axios, { AxiosInstance } from 'axios';
import AppConfig from '../constants';
import { useAppDispatch, useAppSelector } from '../store';
import { setLoading } from '../store/store';

let apiClient: AxiosInstance | undefined;
export function setApiToken(token: string): void {
  if (apiClient) apiClient.defaults.headers.common.Authorization = `${token}`;
}

export function setApiBaseUrl(url: string): void {
  if (apiClient) apiClient.defaults.baseURL = url;
}

const dispatch = useAppDispatch();

export function getApiClient(
  baseUrl: string = AppConfig.API_SERVER,
): AxiosInstance {
  if (!apiClient) {
    apiClient = axios.create({
      baseURL: '',
      headers: {
        'Content-type': 'application/json',
      },
    });
    apiClient.interceptors.request.use(
      (conf: any) => {
        if (conf.url !== '') dispatch(setLoading(true));
        return conf;
      },
      (error: any) => {
        dispatch(setLoading(false));
        return Promise.reject(error);
      },
    );
    apiClient.interceptors.response.use(
      (response: any) => {
        dispatch(setLoading(false));
        return response;
      },
      (error: any) => {
        dispatch(setLoading(false));
        return Promise.reject(error);
      },
    );
  }

  setApiBaseUrl(baseUrl);
  const token = useAppSelector((state) => state.stateStore.token);
  if (token) setApiToken(token);

  return apiClient;
}
