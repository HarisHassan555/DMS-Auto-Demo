import { Component, OnInit } from '@angular/core';

interface Country {
  id: number;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  showModal = false;
  searchText = '';
  newCountry: Country = {
    id: 0,
    name: '',
    isActive: true
  };
  isEditing = false;
  editingIndex: number = -1;

  ngOnInit() {
    const savedCountries = localStorage.getItem('countries');
    if (savedCountries) {
      this.countries = JSON.parse(savedCountries);
    }
  }

  addCountry() {
    if (this.isEditing) {
      this.countries[this.editingIndex] = {...this.newCountry};
      this.isEditing = false;
    } else {
      this.newCountry.id = this.countries.length > 0 ? 
        Math.max(...this.countries.map(c => c.id)) + 1 : 1;
      this.countries.push({...this.newCountry});
    }
    localStorage.setItem('countries', JSON.stringify(this.countries));
    this.resetForm();
    this.showModal = false;
  }

  openModal(country?: Country, index?: number) {
    if (country && index !== undefined) {
      this.isEditing = true;
      this.editingIndex = index;
      this.newCountry = {...country};
    } else {
      this.isEditing = false;
      this.newCountry = {
        id: 0,
        name: '',
        isActive: true
      };
    }
    this.showModal = true;
  }

  resetForm() {
    this.newCountry = {
      id: 0,
      name: '',
      isActive: true
    };
    this.isEditing = false;
    this.editingIndex = -1;
  }

  get filteredCountries() {
    return this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get activeCountries() {
    return this.countries.filter(country => country.isActive);
  }
} 