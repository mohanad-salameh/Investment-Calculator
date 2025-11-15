import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {



  enteredInitialInvestment=signal('0');
  enteredAnnualInvestment=signal('0');
  enteredExpectedInvestment=signal('5');
  enteredDuration=signal('10');
  
  constructor(private investmentService:InvestmentService)
  {

  }

  onSubmit(){

    this.investmentService.onCalculateInvestmentResults({
    
initialInvestment:+this.enteredAnnualInvestment(),
duration:+this.enteredDuration(),
expectedReturn:+this.enteredExpectedInvestment(),
annualInvestment:+this.enteredAnnualInvestment()
    });
   

  }

}
