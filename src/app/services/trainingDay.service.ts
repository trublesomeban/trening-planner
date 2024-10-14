import { Injectable } from '@angular/core';
import { TrainingDay } from '../models/trainingDay';

@Injectable({
  providedIn: 'root'
})
export class TrainingDayService {
  days = [
    {
      name: "Workout A",
      excercises: [{ name: "Pull ups", sets: 3, reps: 3 }]
    },
    {
      name: "Workout B",
      excercises: [{ name: "Dips", sets: 3, reps: 3 }]
    }
  ]
  getDays(): TrainingDay[] {
    return this.days
  }
  addDay(): void {
    this.days.push({ name: "Training Day", excercises: [{ name: "", sets: 0, reps: 0 }] })
  }
  constructor() { }
}
