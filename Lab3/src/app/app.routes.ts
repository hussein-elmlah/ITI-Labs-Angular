import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnderConstructionComponent } from './page-under-construction/page-under-construction.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'login',
        component: PageUnderConstructionComponent
    },
    {
        path: 'register',
        component: PageUnderConstructionComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
