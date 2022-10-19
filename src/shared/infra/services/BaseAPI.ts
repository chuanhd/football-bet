import axios, { AxiosInstance, AxiosRequestHeaders, AxiosResponse } from 'axios';
import apiConfig from '../../../config/api';

export default abstract class BaseAPI {
  protected baseUrl: string;

  private axiosInstance: AxiosInstance;

  constructor() {
    this.baseUrl = apiConfig.baseUrl;
    this.axiosInstance = axios.create({});
    this.enableInterceptors();
  }

  private enableInterceptors(): void {
    this.axiosInstance.interceptors.response.use(this.getSuccessResponseHandler(), this.getErrorResponseHandler());
  }

  /* eslint-disable class-methods-use-this */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  private getSuccessResponseHandler() {
    return (response: any) => response;
  }

  private getErrorResponseHandler() {
    // eslint-disable-next-line prefer-promise-reject-errors
    return (error: any) => Promise.reject({ ...error });
  }
  /* eslint-enable class-methods-use-this */
  /* eslint-enable @typescript-eslint/no-explicit-any */

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected get<T>(url: string, params?: any, headers?: AxiosRequestHeaders): Promise<AxiosResponse<T, any>> {
    return this.axiosInstance.get<T>(`${this.baseUrl}${url}`, { params, headers });
    // return this.axiosInstance({
    //   method: 'GET',
    //   url: `${this.baseUrl}${url}`,
    //   params,
    //   headers,
    // });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected post(url: string, data?: any, params?: any, headers?: AxiosRequestHeaders): Promise<any> {
    return this.axiosInstance({
      method: 'POST',
      url: `${this.baseUrl}${url}`,
      data,
      params,
      headers,
    });
  }
}
