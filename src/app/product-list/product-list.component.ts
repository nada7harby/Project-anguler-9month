import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      name: 'Wireless Headphones',
      description: 'High quality sound with noise cancellation.',
      image:
        'https://demo.web3canvas.com/themeforest/proland/images/collection-3.jpg',
      stock: 0,
      category: 'Electronics',
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Crystal clear sound with deep bass.',
      image:
        'https://demo.web3canvas.com/themeforest/proland/images/collection-1.jpg',
      stock: 1,
      category: 'Electronics',
    },
    {
      name: 'Smart Watch',
      description: 'Track your fitness and notifications.',
      image:
        'https://demo.web3canvas.com/themeforest/proland/images/collection-2.jpg',
      stock: 5,
      category: 'Electronics',
    },
    {
      name: 'iPhone 13',
      description: 'Latest smartphone with advanced camera.',
      image:
        'https://www.zdnet.com/a/img/resize/9f3fcf92f17d47c88823e7f2c0f1454ecd3e5140/2024/09/19/8da68e24-08b1-467a-9062-a90a96c1d879/dsc02198.jpg?auto=webp&fit=crop&height=900&width=1200',
      stock: 3,
      category: 'Phones',
    },
    {
      name: 'Tesla Model 3',
      description: 'Electric car with autopilot.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wYYjBJhL8d06T7MHOG32xewiS9cSAcL5gQ&usqp=CAU',
      stock: 2,
      category: 'Cars',
    },
  ];

  categories = ['All', 'Phones', 'Cars', 'Electronics'];
  searchTerm = '';
  selectedCategory = 'All';
  filteredProducts = this.products;

  ngOnInit() {
    this.filterProducts();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}
