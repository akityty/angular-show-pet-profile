import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'pupie';
  image = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  updatePetName(petName) {
    this.petName = petName;
  }
  updateImage(image) {
    this.image = image;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
