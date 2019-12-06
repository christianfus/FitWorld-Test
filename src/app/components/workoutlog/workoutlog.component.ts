import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workoutlog',
  templateUrl: './workoutlog.component.html',
  styleUrls: ['./workoutlog.component.scss']
})
export class WorkoutlogComponent implements OnInit {

  data: any;
  currentUser = JSON.parse(localStorage.getItem('user'));
  lifts = this.currentUser.lifts;
  n:number=0;
  bench:number[]=[];
  squat:number[]=[];
  deadlift:number[]=[];
  ohp:number[]=[];
  bbrow:number[]=[];
  pullup:number[]=[];
  insertions:number[]=[];

  constructor() {
     this.adaptDataToTable();
      this.data = {
          labels: this.insertions,
          datasets: [
              {
                  label: 'Bench',
                  data: this.bench,
                  fill: false,
                  borderColor: '#16f5df'
              },
              {
                  label: 'Squat',
                  data: this.squat,
                  fill: false,
                  borderColor: '#169df7'
              },
              {
                label: 'Deadlift',
                data: this.deadlift,
                fill: false,
                borderColor: '#16f56c'
              },
              {
                label: 'Overhead Press',
                data: this.ohp,
                fill: false,
                borderColor: '#20b9f5'
              },
              {
                label: 'Barbell Row',
                data: this.bbrow,
                fill: false,
                borderColor: '#2050fa'
              },
              {
                label: 'Pull Ups',
                data: this.pullup,
                fill: false,
                borderColor: '#20f5c3'
              },
          ]
      }
  }
  
  ngOnInit() {
  }

  public addEntryToLog(user){
    let bench = user.value.bench;
    let squat = user.value.squat;
    let deadlift = user.value.deadlift;
    let ohp = user.value.ohp;
    let bbrow = user.value.bbrow;
    let pullup = user.value.pullup;
    let newLifts = {bench, squat, deadlift, ohp, bbrow, pullup};

    this.currentUser.lifts.push(newLifts);
    console.log(this.currentUser);
    localStorage.setItem('user', JSON.stringify(this.currentUser));
    
    this.adaptDataToTable();
    this.data = {
      labels: this.insertions,
      datasets: [
          {
              label: 'Bench',
              data: this.bench,
              fill: false,
              borderColor: '#16f5df'
          },
          {
              label: 'Squat',
              data: this.squat,
              fill: false,
              borderColor: '#169df7'
          },
          {
            label: 'Deadlift',
            data: this.deadlift,
            fill: false,
            borderColor: '#16f56c'
          },
          {
            label: 'Overhead Press',
            data: this.ohp,
            fill: false,
            borderColor: '#20b9f5'
          },
          {
            label: 'Barbell Row',
            data: this.bbrow,
            fill: false,
            borderColor: '#2050fa'
          },
          {
            label: 'Pull Ups',
            data: this.pullup,
            fill: false,
            borderColor: '#20f5c3'
          },
      ]
  }
  
  }

  public adaptDataToTable(){
    
    this.currentUser.lifts.forEach(entry => {
      
      this.bench.push(entry.bench);
      this.squat.push(entry.squat);
      this.deadlift.push(entry.deadlift);
      this.ohp.push(entry.ohp);
      this.bbrow.push(entry.bbrow);
      this.pullup.push(entry.pullup);
      this.insertions.push(this.n);
    });
    
    this.n=this.n+1;
  }
  
}
