import { DatePipe, NgClass } from '@angular/common';
import { Component,Input,Output ,EventEmitter} from '@angular/core';
import { OlderPipe } from '../older.pipe';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [NgClass,DatePipe,OlderPipe],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input() user:any;
  @Output() sendToparent=new EventEmitter<number>();

  deleteuser(id:number){
    // console.log(id);
    this.sendToparent.emit(id);
  }

}
