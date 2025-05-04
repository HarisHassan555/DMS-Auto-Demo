import { Component, OnInit } from '@angular/core';

interface CustomerCategory {
  id: number;
  code: string;
  name: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-customer-category',
  templateUrl: './customer-category.component.html',
  styleUrls: ['./customer-category.component.css']
})
export class CustomerCategoryComponent implements OnInit {
  customerCategories: CustomerCategory[] = [];
  showModal = false;
  searchText = '';
  newCustomerCategory: CustomerCategory = {
    id: 0,
    code: '',
    name: '',
    description: '',
    isActive: true
  };
  isEditing = false;
  editingIndex: number = -1;

  ngOnInit() {
    const savedCategories = localStorage.getItem('customerCategories');
    if (savedCategories) {
      this.customerCategories = JSON.parse(savedCategories);
    }
  }

  addCustomerCategory() {
    if (this.isEditing) {
      this.customerCategories[this.editingIndex] = {...this.newCustomerCategory};
      this.isEditing = false;
    } else {
      this.newCustomerCategory.id = this.customerCategories.length > 0 ? 
        Math.max(...this.customerCategories.map(c => c.id)) + 1 : 1;
      this.customerCategories.push({...this.newCustomerCategory});
    }
    localStorage.setItem('customerCategories', JSON.stringify(this.customerCategories));
    this.resetForm();
    this.showModal = false;
  }

  openModal(category?: CustomerCategory, index?: number) {
    if (category && index !== undefined) {
      this.isEditing = true;
      this.editingIndex = index;
      this.newCustomerCategory = {...category};
    } else {
      this.isEditing = false;
      this.newCustomerCategory = {
        id: 0,
        code: '',
        name: '',
        description: '',
        isActive: true
      };
    }
    this.showModal = true;
  }

  resetForm() {
    this.newCustomerCategory = {
      id: 0,
      code: '',
      name: '',
      description: '',
      isActive: true
    };
    this.isEditing = false;
    this.editingIndex = -1;
  }

  get filteredCategories() {
    return this.customerCategories.filter(category =>
      category.code.toLowerCase().includes(this.searchText.toLowerCase()) ||
      category.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      category.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
} 