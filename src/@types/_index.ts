export interface SuccessResponse {
  message: string;
}

export interface BookDemoSuccessResponse {
  message: string;
  statusCode: number;
}

export interface ErrorResponse {
  status: number;
  data: {
    title: string;
    name: string;
    status: number;
    detail: string;
    message: string;
    Message: string;
  };
}

export interface PublicUser {
  userId: string;
  colorCode: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface BasicListParams {
  searchText?: string;
  sortBy?: number | string;
  sortOrder?: number | string;
  pageNumber?: number;
  pageSize?: number;
}

export interface PaginationParams {
  pageNumber: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export enum HttpMethod {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface SearchParams {
  query?: string;
}

export type VoidCallback<T = undefined> = (cb?: T) => void;

export type ArgCallback<T> = (cb: T) => void;

export type PromiseVoidCallback<T = undefined> = (cb?: T) => Promise<void>;

export interface BaseIdParams {
  clientId?: string;
  projectId?: string;
  workItemId?: string;
  contactId?: string;
}

export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Urgent = "Urgent",
}

export enum UserOnlineStatus {
  Online = "Online",
  Away = "Away",
  Offline = "Offline",
}
