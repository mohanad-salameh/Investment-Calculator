import { Component, computed, input, Input } from '@angular/core';
import { investmentInput } from '../investment-input.model';
import { pipe } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

 constructor (private InvestmentService :InvestmentService)
 {

 }
    results = computed(()=>this.InvestmentService.resultsData());


}
