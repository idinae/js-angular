import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //this function will update our user object whenever the parameter change
    //use this approach only if you expect the params to be changed from whithin a component
    this.route.params //the event will fire when the params change
      .subscribe(
        (params: Params) => { //takes the new params
          this.user.id = params['id'];
          this.user.name = params['name'];
        } 
      );
  }

}
