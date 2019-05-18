import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment";

@Injectable()
export class UserRestrationService {

  baseUrl: string = environment.profileServiceUrl;

  constructor(private httpClient: HttpClient) { }

  registerUser(userInfo, endPopint) {
    return this.httpClient.post(this.baseUrl + endPopint, userInfo);
  }

}
