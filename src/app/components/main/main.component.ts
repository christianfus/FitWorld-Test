import { Component, OnInit } from '@angular/core';
import { Lifts } from 'src/app/models/lifts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  //USER RANKS
  novice:boolean=false;
  intermediate:boolean=false;
  advanced:boolean=false;
  elite:boolean=false;

  //DATA
  data: any;
  data2: any;
  currentLifts:Lifts;
  currentUser = JSON.parse(localStorage.getItem('user'));
  kcal = ((this.currentUser.ph_entry[0].weight * 10) + (this.currentUser.ph_entry[0].height*625)-(5*this.currentUser.ph_entry[0].age)+5)*1.55;

  

  constructor() {
    this.getLiftsFromUser();
    this.passDataToGraph();
  }
  ngOnInit() {
    this.rankUser();
    
  }

  public getLiftsFromUser(){
    this.currentUser.lifts.forEach((element) => {
      this.currentLifts = element;
      
    });
    
  }

  public passDataToGraph(){
    this.data = {
      labels: ['Protein','Fats','Carbohidrates'],
      datasets: [
          {
              data: [30, 30, 40],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6789",
                  "#36A7EB",
                  "#FFC756"
              ]
          }]    
      };
      this.data2 = {
        labels: ['Bench Press', 'Back Squat', 'Deadlift', 'Overhead Press', 'Barbell Row', 'Pull up'],
        datasets: [
            {
                label: 'You',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [
                  this.currentLifts.bench, 
                  this.currentLifts.squat, 
                  this.currentLifts.deadlift, 
                  this.currentLifts.ohp, 
                  this.currentLifts.bbrow, 
                  this.currentLifts.pullup,
                 ]
            },
            {
                label: 'Average Lifter',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [45, 60, 69, 29, 36, 0]
            }
        ]
    }
  }

  public rankUser(){
    let arrayLength = (this.currentUser.lifts.length-1);
    let currentStats = this.currentUser.lifts[arrayLength];
    let totalkg = currentStats.bench+currentStats.squat+currentStats.deadlift+currentStats.ohp+currentStats.bbrow+(currentStats.pullup*5);
    if(totalkg<500){
      this.novice = true;
    }
    if(totalkg>500&&totalkg<750){
      this.intermediate = true;
    }
    if(totalkg>750&&totalkg<1000){
      this.advanced = true;
    }
    if(totalkg>1000){
      this.elite = true;
    }
    console.log(totalkg);
    
  }

}
