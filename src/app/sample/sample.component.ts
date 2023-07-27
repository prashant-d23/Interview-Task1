import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  circles: Circle[] = [];
  commonCounter: number = 0;

  addCircle() {
    this.circles.push({ isActive: false }); // initially pushed with color blue
  }

  toggleCircleState(circle: Circle) {
    circle.isActive = !circle.isActive;
    if (circle.isActive) {
      this.commonCounter++;
    } else {
      this.commonCounter--;
    }
  }

}

interface Circle {
  isActive: boolean;
}
