import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from './trip-data.service';
import e from 'express';



@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  private authResp: AuthResponse = {} as AuthResponse;

  constructor(
    @Inject (BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService  
  ) { }

  public getToken(): string {
    let out: any;
    out = this.storage.getItem('travlr-token');

    if (!out){
      return '';
    }
    return out;
  }

  //Save token
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }
  //Loug out of application remove token from storage
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }
  //check is still logged in and token is valid
  public isLoggedin(): boolean {
    const token: string = this.getToken();
    if (token){
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  //Retrieve user details from token
  public getCurrentUser(): User{
    const token: string = this.getToken();
    const {email, name } = JSON.parse(atob(token.split('.')[1]));
    return {email, name } as User;
  }

  //Login method that leverages the login method in the tripDataService 

  public login(user: User, passwd: string) : void {
    this.tripDataService.login(user, passwd)
    .subscribe ({
      next:  (value: any) => {
        if(value){
          console.log(value);
          this.authResp = value;
          this.saveToken(this.authResp.token);
        }
      },
      error: (error: any ) => {
        console.log('Error: ' + error);
      }
    })
  }
  //regsiter method that leverages the register method in the tripDataService

  public register(user: User, passwd: string): void {
    this.tripDataService.register(user,passwd)
    .subscribe({
      next: (value: any) => {
        if(value){
          console.log(value);
          this.authResp = value;
          this.saveToken(this.authResp.token);
        }
      },
      error: (error: any) => {
        console.log( 'Error: ' + error);
      }
    })
  }
}
