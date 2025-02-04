import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  placeholder: InputSignal<string> = input<string>('First Name');
  type: InputSignal<string> = input<string>('text');
  classes: InputSignal<string> = input<string>('');
}
