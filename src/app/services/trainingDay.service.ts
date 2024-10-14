import { Injectable } from '@angular/core';
import { TrainingDay } from '../models/trainingDay';
import { Excercise } from '../models/excercise';

@Injectable({
  providedIn: 'root'
})
export class TrainingDayService {
  days: TrainingDay[] = [
    {
      name: "Workout A",
      excercises: [{ name: "Pull ups", sets: 3, reps: 3 }, { name: "Bent rows", sets: 3, reps: 6 }],
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
  updateExcercise(id: number, ie: number, name: "name" | "sets" | "reps", value: string): void {
    (this.days[id].excercises[ie] as Excercise)[name] = value
  }
  constructor() { }
}
