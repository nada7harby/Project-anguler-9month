// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// interface Product {
//   name: string;
//   description: string;
//   image: string;
//   stock: number;
//   category: string;
// }

// @Component({
//   selector: 'app-product-card',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './product-card.component.html',
//   styleUrls: ['./product-card.component.css']
// })
// export class ProductCardComponent {
//   @Input() products: Product[] = [];
//   @Input() categories: string[] = [];

//   searchTerm: string = '';
//   selectedCategory: string = 'All';
//   filteredProducts: Product[] = [];

//   ngOnInit() {
//     this.filteredProducts = this.products;
//   }

//   getButtonLabel(stock: number): string {
//     if (stock === 0) {
//       return 'Sold Out';
//     } else if (stock === 1) {
//       return 'Buy Now';
//     } else {
//       return 'Add to Cart';
//     }
//   }

//   getButtonClass(stock: number): string {
//     if (stock === 0) {
//       return 'sold-out';
//     } else if (stock === 1) {
//       return 'buy-now';
//     } else {
//       return 'in-stock';
//     }
//   }

//   filterByCategory(category: string): void {
//     this.selectedCategory = category;
//     this.filterProducts();
//   }

//   filterProducts(): void {
//     this.filteredProducts = this.products.filter(product => {
//       const matchesCategory = this.selectedCategory === 'All' || product.category === this.selectedCategory;
//       const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//                            product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }
// }

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  image: string;
  stock: number;
  category: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  getButtonLabel(stock: number): string {
    return stock === 0 ? 'Sold Out' :
           stock === 1 ? 'Buy Now' : 'Add to Cart';
  }

  getButtonClass(stock: number): string {
    return stock === 0 ? 'sold-out' :
           stock === 1 ? 'buy-now' : 'in-stock';
  }
}
