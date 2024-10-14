import { Component, ComponentRef, inject, ViewContainerRef } from '@angular/core';
import { ExcerciseComponent } from "../excercise/excercise.component";
import { CommonModule, NgComponentOutlet, NgFor } from '@angular/common';

@Component({
  selector: 'editor-training-day',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule],
  templateUrl: './training-day.component.html',
  styleUrl: './training-day.component.scss'
})
export class TrainingDayComponent {
  vcr = inject(ViewContainerRef)
  #componentRef?: ComponentRef<ExcerciseComponent>
  excersises = [this.createComponent("Pull up", 3, 6)]
  createComponent(name: string, sets: number, reps: number) {
    this.#componentRef = this.vcr.createComponent(ExcerciseComponent)
    this.#componentRef?.setInput("name", name)
    this.#componentRef?.setInput("sets", sets)
    this.#componentRef?.setInput("reps", reps)
  }
  destroyComponent() {
    this.#componentRef?.destroy
  }
}
