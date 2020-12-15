import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!!!';
  takeOffEnabled: boolean = true;

  handleTakeoff(rocketImage) {
    let result = window.confirm('Are you sure?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 125000;
      this.message = 'Shuttle in flight'
      rocketImage.style.bottom = '175px';
      rocketImage.style.left = '125px'
      this.takeOffEnabled = false;
    }
  }

  land(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed'
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  abortMission(rocketImage) {
    let result = window.confirm('Are you sure?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted'
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  checkBounds(){
    this.color = (this.width < 40000 || this.width > 220000 || this.height < 2500 || this.height > 18000) ? 'orange' : 'blue'
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width += 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width -= 10000;
    } 
    if (direction === 'up') {
      if (this.height + 150 < 20000){
        this.height += 1250;
        let movement = parseInt(rocketImage.style.bottom) + 20 + 'px';
        rocketImage.style.bottom = movement;
      }
    } 
    if (direction === 'down') {
      if (this.height - 150 > 0){
        this.height -= 1250;
        let movement = parseInt(rocketImage.style.bottom) - 20 + 'px';
        rocketImage.style.bottom = movement;
      }
    } 
    this.checkBounds()
  }

}

