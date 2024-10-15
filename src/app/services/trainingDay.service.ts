import { EventEmitter, Injectable, Output, output } from '@angular/core';
import { TrainingDay } from '../models/trainingDay';
import { Excercise } from '../models/excercise';

@Injectable({
  providedIn: 'root'
})
export class TrainingDayService {
  @Output() updated = new EventEmitter<void>();
  days: TrainingDay[] = []
  updatePlan(days: TrainingDay[]): void {
    this.days = days;
  }
  getDays(): TrainingDay[] {
    return this.days;
  }
  addDay(): void {
    this.days.push({ name: "Training Day", excercises: [{ name: "", sets: 0, reps: 0 }] })
  }
  addExcercise(day: number): void {
    this.days[day].excercises.push({ name: "", sets: 0, reps: 0 });
  }
  updateExcercise(day: number, excercise: number, name: "name" | "sets" | "reps", value: string): void {
    (this.days[day].excercises[excercise] as Excercise)[name] = value;
  }
  removeExcercise(day: number, excercise: number) {
    const before = this.days[day].excercises.slice(0, excercise);
    const after = this.days[day].excercises.slice(excercise + 1);
    this.days[day].excercises = before.concat(after);
  }
  removeDay(day: number) {
    const before = this.days.slice(0, day);
    const after = this.days.slice(day + 1);
    this.days = before.concat(after);
  }
  updateDay(day: number, value: string): void {
    this.days[day].name = value;
  }
  constructor() { }
}
