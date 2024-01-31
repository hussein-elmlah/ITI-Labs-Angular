
import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { BehaviorSubject, Observable, map, reduce } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>([]);
  private itemsCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getCart() {
    return this.cart.asObservable();
  }

  getItemsCount() {
    return this.itemsCount.asObservable();
  }

  getCartTotalPrice(): Observable<number> {
    return this.cart.pipe(
      map(cart => cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0))
    );
  }

  private updateItemsCount() {
    const cart = this.cart.value;
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    this.itemsCount.next(totalCount);
  }

  addItem(product: Product) {
    const cart: Array<CartItem> = this.cart.value;
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex === -1) {
      cart.push({ id: product.id, product, quantity: 1 });
    } else {
      cart[existingItemIndex].quantity++;
    }

    this.cart.next([...cart]);
    this.updateItemsCount();
  }

  incItemQty(id: number) {
    const cart: Array<CartItem> = this.cart.value;
    const item: CartItem | undefined = cart.find(item => item.id === id);
    if (item == undefined) {
      return;
    }

    ++item.quantity;
    this.cart.next([...cart]);
    this.updateItemsCount()
  }

  decrementItemQty(id: number) {
    const cart: Array<CartItem> = this.cart.value;
    const item: CartItem | undefined = cart.find(item => item.id === id);
    if (item == undefined) {
      return;
    }

    if (item.quantity < 2) {
      this.deleteItem(id);
      return;
    }

    --item.quantity;
    this.cart.next([...cart]);
    this.updateItemsCount()
  }

  deleteItem(id: number) {
    const cart: Array<CartItem> = this.cart.value;
    const updatedCart = cart.filter(item => item.id !== id);

    this.cart.next([...updatedCart]);
    this.updateItemsCount();
  }
}
