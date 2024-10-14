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
  $index1 = 0
  excerciseService = inject(TrainingDayService);
  trainingDays: TrainingDay[] = [];
  ngOnInit(): void {
    this.trainingDays = this.excerciseService.getDays();
  }
  addDay(): void {
    this.excerciseService.addDay()
    this.trainingDays = this.excerciseService.getDays();
  }
  changeExecuted(dayIdx: number, excercisesIdx: number) {
    return
  }
}

