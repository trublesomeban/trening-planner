import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { TrainingDay } from '../../models/trainingDay';
import { TrainingDayService } from '../../services/trainingDay.service';



@Component({
  selector: 'editor-training-day',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule],
  templateUrl: './training-day.component.html',
  styleUrl: './training-day.component.scss'
})
export class TrainingDayComponent implements OnInit {
  excerciseService = inject(TrainingDayService);
  trainingDays: TrainingDay[] = [];
  tDay = 0;
  tExcercise = 0;
  ngOnInit(): void {
    this.trainingDays = this.excerciseService.getDays();
    this.excerciseService.updated.subscribe(() => {
      this.updateDays();
    })
  }
  updateDays(): void {
    this.trainingDays = this.excerciseService.getDays();
  }
  addDay(): void {
    this.excerciseService.addDay();
    this.updateDays();
  };
  updateDay(day: number, value: string): void {
    this.excerciseService.updateDay(day, value);
    this.updateDays();
  }
  addExcercise(day: number): void {
    this.excerciseService.addExcercise(day);
    this.updateDays();
  };
  updateExcercise(day: number, excercise: number, id: string, value: string): void {
    this.excerciseService.updateExcercise(day, excercise, id as ("name" | "sets" | "reps"), value);
    this.updateDays();
  }
  removeExcercise(day: number, excercise: number): void {
    this.excerciseService.removeExcercise(day, excercise);
    this.updateDays();
  }
  removeDay(day: number): void {
    this.excerciseService.removeDay(day);
    this.updateDays();
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}

