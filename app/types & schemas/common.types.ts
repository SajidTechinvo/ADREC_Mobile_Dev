import { AxiosResponse, AxiosError } from "axios";

export type AxiosApiResponse<T> = AxiosResponse<ApiResponse<T>>;
export type AxiosApiPagedResponse<T> = AxiosResponse<ApiPagedResponse<T>>;
export type AxiosErrorResponse = AxiosError<ErrorResponse>;
export type AxiosApiSuccessErrorResponse<T, E> = AxiosResponse<
  ApiSuccessErrorResponse<T, E>
>;

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiSuccessErrorResponse<T, E> {
  success: boolean;
  message: string;
  error: E;
  data: T;
}

export interface ApiPagedResponse<T> {
  success: boolean;
  message: string;
  data: T;
  page_number: number;
  page_size: number;
  total_pages: number;
  total_records: number;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  error?: {
    error_code: string | null;
    error_message?: string | null;
  };
}

export type ISelectOption = {
  value: number | string;
  label: string;
};

export type IEnumApiType = {
  id: number;
  name: string;
};
