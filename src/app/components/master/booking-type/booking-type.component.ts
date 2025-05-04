import { Component, OnInit } from '@angular/core';

interface BookingType {
  id: number;
  code: string;
  type: string;
  isActive: boolean;
}

@Component({
  selector: 'app-booking-type',
  templateUrl: './booking-type.component.html',
  styleUrls: ['./booking-type.component.css']
})
export class BookingTypeComponent implements OnInit {
  bookingTypes: BookingType[] = [];
  showModal = false;
  searchText = '';
  newBookingType: BookingType = {
    id: 0,
    code: '',
    type: '',
    isActive: true
  };
  isEditing = false;
  editingIndex: number = -1;

  ngOnInit() {
    const savedBookingTypes = localStorage.getItem('bookingTypes');
    if (savedBookingTypes) {
      this.bookingTypes = JSON.parse(savedBookingTypes);
    }
  }

  addBookingType() {
    if (this.isEditing) {
      this.bookingTypes[this.editingIndex] = {...this.newBookingType};
      this.isEditing = false;
    } else {
      this.newBookingType.id = this.bookingTypes.length > 0 ? 
        Math.max(...this.bookingTypes.map(b => b.id)) + 1 : 1;
      this.bookingTypes.push({...this.newBookingType});
    }
    localStorage.setItem('bookingTypes', JSON.stringify(this.bookingTypes));
    this.resetForm();
    this.showModal = false;
  }

  openModal(bookingType?: BookingType, index?: number) {
    if (bookingType && index !== undefined) {
      this.isEditing = true;
      this.editingIndex = index;
      this.newBookingType = {...bookingType};
    } else {
      this.isEditing = false;
      this.newBookingType = {
        id: 0,
        code: '',
        type: '',
        isActive: true
      };
    }
    this.showModal = true;
  }

  resetForm() {
    this.newBookingType = {
      id: 0,
      code: '',
      type: '',
      isActive: true
    };
    this.isEditing = false;
    this.editingIndex = -1;
  }

  get filteredBookingTypes() {
    return this.bookingTypes.filter(bookingType =>
      bookingType.code.toLowerCase().includes(this.searchText.toLowerCase()) ||
      bookingType.type.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
} 