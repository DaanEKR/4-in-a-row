import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'game';
  isplayerWin : boolean;
  isOpponentWin : boolean;
  previousSteps = [];
  x : number;
  y: number;

  form = new FormGroup({
    x: new FormControl(this.x,[Validators.required]),
  });


  ngOnInit(){
    this.getData();
    console.log(this.previousSteps)

  }

  getData(){
    const data = JSON.parse(localStorage.getItem('previousSteps'));
    if(!data){
      this.previousSteps = [];
    } else {
      this.previousSteps = data;
    }
  }

  turn(){
    let x =  this.form.get('x').value;
    let y =  this.form.get('y').value;
    console.log(y)
    let coordinates = x + ',' + y;
    if(this.previousSteps.includes(coordinates)) {
      coordinates = '';
    }

    if(x < 7 && y < 6 && coordinates != ''){
      this.previousSteps.push(coordinates);
      localStorage.setItem("previousSteps", JSON.stringify(this.previousSteps));
    }

    for(let i = 0; i < this.previousSteps.length; i++) {
      let firstNumber = this.previousSteps[i].charAt(0);
      let SecondNumber = this.previousSteps[i].charAt(2);
      let SecondNumberInt = parseInt(SecondNumber, 10)
      let test = firstNumber+','+SecondNumber;

      if(this.previousSteps.includes(test)){
        // console.log(SecondNumberInt+1)
      }
    }
    console.log(this.previousSteps)
    this.form.reset();
  }
}
