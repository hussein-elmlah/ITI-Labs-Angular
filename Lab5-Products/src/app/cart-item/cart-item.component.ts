import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item!: CartItem;
  @Output() emitIncrementItemQty: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitDecrementItemQty: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitItemDeletion: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.emitIncrementItemQty.emit(this.item.id)
  }

  decrement() {
    this.emitDecrementItemQty.emit(this.item.id);
  }

  delete() {
    this.emitItemDeletion.emit(this.item.id);
  }
}
