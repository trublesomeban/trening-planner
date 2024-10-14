import { Component, ComponentRef, inject, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule, NgComponentOutlet, NgFor } from '@angular/common';
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
  }
  addDay(): void {
    this.excerciseService.addDay()
    this.trainingDays = this.excerciseService.getDays();
  };
  updateExcercise(day: number, excercise: number, id: string, value: string): void {
    this.excerciseService.updateExcercise(day, excercise, id as ("name" | "sets" | "reps"), value)
    console.log(this.excerciseService.getDays())
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}

