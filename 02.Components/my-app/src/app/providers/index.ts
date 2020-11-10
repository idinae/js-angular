import { InjectionToken } from '@angular/core';

export const API_URL_TOKEN =  new InjectionToken('API_URL');

export const apiURLProvider = {
    provide: API_URL_TOKEN,
    useValue: 'http://localhost:4200/api/'
}