import { Component, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barcode-reader-angular';
  @ViewChild('scanner', { static: false }) scanner!: BarcodeScannerLivestreamComponent;
  barcode!: string;

  ngAfterViewInit() {
    this.scanner.start();
  }

  onValueChanges(result: any) {
    this.barcode = result.codeResult.code;
  }
}
