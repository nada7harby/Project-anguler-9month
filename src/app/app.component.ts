import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // ضيفي ده
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SecondComponent } from './second/second.component';
import { CategoriesComponent } from './categories/categories.component';
import { HotCollectionsComponent } from './hot-collections/hot-collections.component';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgIf } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    ProductListComponent,
    HeroComponent,
    SecondComponent,
    CategoriesComponent,
    HotCollectionsComponent,
    CreateNftComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'liberty_market';
  currentPage = 'home'; // أو 'profile' أو 'settings' مثلًا

  onPageChange(page: string) {
    this.currentPage = page;
  }
}
