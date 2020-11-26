import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: any;

  constructor(
    private userService: UserService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.router.params.subscribe(({id}) => {
      this.userService.loadUser(id).subscribe(user => {
      this.user = user;
    })
    // const userId = this.router.snapshot.params.id;
    // this.userService.loadUser(userId).subscribe(user => {
    //   this.user = user;
    });
  }

}
