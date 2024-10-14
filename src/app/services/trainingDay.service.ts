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
  addExcercise(day: number): void {
    this.days[day].excercises.push({ name: "", sets: 0, reps: 0 })
  }
  updateExcercise(day: number, excercise: number, name: "name" | "sets" | "reps", value: string): void {
    (this.days[day].excercises[excercise] as Excercise)[name] = value
  }
  removeExcercise(day: number, excercise: number) {
    const before = this.days[day].excercises.slice(0, excercise)
    const after = this.days[day].excercises.slice(excercise + 1)
    this.days[day].excercises = before.concat(after)
  }
  updateDay(day: number, value: string): void {
    this.days[day].name = value
  }
  constructor() { }
}
