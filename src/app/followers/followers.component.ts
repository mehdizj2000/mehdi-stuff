import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../dto/user.dto';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: User[];

  constructor(private followersService: FollowersService) { }

  ngOnInit(): void {
    this.followersService.getAll().subscribe(res => {
      this.followers = res;
    })
  }


}
