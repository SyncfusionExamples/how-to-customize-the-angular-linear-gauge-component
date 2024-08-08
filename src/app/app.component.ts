import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinearGaugeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public line?:Object;
  public lineOne?:Object;
  public labelStyle:Object = {
    font: { color: '#098c77' },
    position: 'Inside',
    offset: 10,
    useRangeColor: true
  };
  public majorTicks:Object = {
    color: 'green',
    interval: 10,
    position: 'Cross'
  };
  public minorTicks:Object = {
    color: 'red',
    interval: 5,
    position: 'Cross'
  };
  public majorTicksOne: Object = {
    color: '#ffc93e'
  };
  public minorTicksOne:Object = {
    color: '#ff66b3'
  };
  ngOnInit() {
    this.line = {
      height: 400,
      width: 4,
      color: '#4286f4'
    };
    this.lineOne = {
      height: 400,
      color: '#4286f4',
    };
  }
  title = 'myangularapp';
}
