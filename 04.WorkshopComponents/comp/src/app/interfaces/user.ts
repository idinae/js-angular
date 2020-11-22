import { IBase } from './base';

export interface IUser extends IBase {
    themes: string[]; //масив от стрингове
    posts: string[];
    tel: string;
    email: string;
    username: string;
    password: string;
}