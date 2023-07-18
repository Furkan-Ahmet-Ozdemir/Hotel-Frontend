import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css'],
})
export class SpecsComponent {
  features = [
    { title: 'Wi-Fi', icon: 'wifi' },
    { title: 'Ücretsiz Kahvaltı', icon: 'restaurant' },
    { title: 'Fitness Merkezi', icon: 'fitness_center' },
    { title: 'Ücretsiz Otopark', icon: 'local_parking' },
    { title: 'Havuz', icon: 'pool' },
    { title: 'Park', icon: 'park' },
    { title: 'Çocuk Oyun Alanı', icon: 'child_care' },
    { title: 'Spa & Wellness Merkezi', icon: 'spa' },
    { title: 'Toplantı ve Konferans Salonu', icon: 'meeting_room' },
    { title: 'Klima', icon: 'ac_unit' },
    { title: 'Çamaşırhane Hizmeti', icon: 'local_laundry_service' },
    { title: 'Restoran', icon: 'restaurant_menu' },
    { title: '24 Saat Resepsiyon', icon: 'local_convenience_store' },
    { title: 'LCD TV', icon: 'tv' },
    { title: 'Balkon veya Teras', icon: 'balcony' },
  ];
}
