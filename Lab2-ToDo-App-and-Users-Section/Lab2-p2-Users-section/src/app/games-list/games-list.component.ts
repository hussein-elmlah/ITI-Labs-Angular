import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import {GameCardComponent} from '../game-card/game-card.component';
import users from '../../assets/users.json';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [CommonModule,GameCardComponent,FormsModule,FilterPipe],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})

export class GamesListComponent{
  users: any;
  // user:any;
  email:any;

  ngOnInit() {
    this.users = users;
    // console.log(this.users);
  }

  recievedFromchild(id:number){
    // console.log(`recievedFromchild: ${id}`);
    this.users=this.users.filter((user: { id: number; }) => user.id!==id);
  }

}
