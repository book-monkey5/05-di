import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  standalone: false,
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() book?: Book;
  @Output() leave = new EventEmitter<void>();

  doLeave() {
    this.leave.emit();
  }
}
