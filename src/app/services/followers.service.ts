import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { User } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService<User> {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
