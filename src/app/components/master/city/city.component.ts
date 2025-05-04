import { Component, OnInit } from '@angular/core';

interface Country {
  id: number;
  name: string;
  isActive: boolean;
}

interface City {
  id: number;
  countryId: number;
  countryName: string;
  code: string;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: City[] = [];
  countries: Country[] = [];
  showModal = false;
  searchText = '';
  newCity: City = {
    id: 0,
    countryId: 0,
    countryName: '',
    code: '',
    name: '',
    isActive: true
  };
  isEditing = false;
  editingIndex: number = -1;

  ngOnInit() {
    // Load countries
    const savedCountries = localStorage.getItem('countries');
    if (savedCountries) {
      this.countries = JSON.parse(savedCountries);
    }

    // Load cities
    const savedCities = localStorage.getItem('cities');
    if (savedCities) {
      this.cities = JSON.parse(savedCities);
    }
  }

  addCity() {
    // Convert countryId to number and find the selected country
    this.newCity.countryId = Number(this.newCity.countryId);
    const selectedCountry = this.countries.find(c => c.id === this.newCity.countryId);
    
    if (!selectedCountry) {
      console.error('No country found for ID:', this.newCity.countryId);
      return;
    }

    // Set the country name
    this.newCity.countryName = selectedCountry.name;
    console.log('Selected Country:', selectedCountry);
    console.log('New City Data Before Save:', this.newCity);

    if (this.isEditing) {
      this.cities[this.editingIndex] = {...this.newCity};
      console.log('Editing City - Updated Data:', this.cities[this.editingIndex]);
    } else {
      this.newCity.id = this.cities.length > 0 ? 
        Math.max(...this.cities.map(c => c.id)) + 1 : 1;
      this.cities.push({...this.newCity});
      console.log('Adding New City - Data:', this.cities[this.cities.length - 1]);
    }

    // Save to localStorage and log the entire cities array
    localStorage.setItem('cities', JSON.stringify(this.cities));
    console.log('All Cities After Save:', this.cities);

    this.resetForm();
    this.showModal = false;
  }

  onCountryChange() {
    // Update country name whenever country selection changes
    const selectedCountry = this.countries.find(c => c.id === Number(this.newCity.countryId));
    if (selectedCountry) {
      this.newCity.countryName = selectedCountry.name;
      console.log('Country Selection Changed:', {
        countryId: this.newCity.countryId,
        countryName: this.newCity.countryName
      });
    }
  }

  openModal(city?: City, index?: number) {
    if (city && index !== undefined) {
      this.isEditing = true;
      this.editingIndex = index;
      this.newCity = {...city};
      console.log('Opening Modal for Edit - City Data:', city);
    } else {
      this.isEditing = false;
      this.newCity = {
        id: 0,
        countryId: 0,
        countryName: '',
        code: '',
        name: '',
        isActive: true
      };
      console.log('Opening Modal for New City');
    }
    this.showModal = true;
  }

  resetForm() {
    this.newCity = {
      id: 0,
      countryId: 0,
      countryName: '',
      code: '',
      name: '',
      isActive: true
    };
    this.isEditing = false;
    this.editingIndex = -1;
  }

  get filteredCities() {
    return this.cities.filter(city =>
      city.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      city.code.toLowerCase().includes(this.searchText.toLowerCase()) ||
      city.countryName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get activeCountries() {
    return this.countries.filter(country => country.isActive);
  }
} 