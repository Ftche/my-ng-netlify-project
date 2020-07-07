import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
//\``
@Component({
  selector: 'app-user-single',
  template: `
  <section class="section">
    <div class="container">

      <div class="card" *ngIf="user">
        <img [src]="user.avatar_url">
        <h2>{{ user.login }}</h2>
      </div>

    </div>
  </section>
  `,
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  user;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
    });
  }

}
