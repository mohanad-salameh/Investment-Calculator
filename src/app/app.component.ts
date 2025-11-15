import { Component, signal, Signal } from '@angular/core';

import { UserInputComponent } from "./user-input/user-input.component";
import { investmentInput } from './investment-input.model';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {


 

}
