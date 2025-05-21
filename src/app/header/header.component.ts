import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() pageChange = new EventEmitter<string>();
  currentPage = 'home'; // أو 'profile' أو 'settings' مثلًا

  navigate(page: string) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
