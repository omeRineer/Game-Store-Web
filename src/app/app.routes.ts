import { Routes } from '@angular/router';
import { ProductList } from './components/store/product-list/product-list';
import { Home } from './components/home/home';
import { ProductDetail } from './components/store/product-detail/product-detail';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "home", redirectTo: "" },

    { path: "store", component: ProductList },
    { path: "store/:id", component: ProductDetail }
];
