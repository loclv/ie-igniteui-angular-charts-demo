import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ie-igniteui-angular-charts-demo';

  data = [
    { MarketShare: 30, Company: 'Google' },
    { MarketShare: 30, Company: 'Apple' },
    { MarketShare: 15, Company: 'Microsoft' },
    { MarketShare: 15, Company: 'Samsung' },
    { MarketShare: 10, Company: 'Other' },
  ];
}
