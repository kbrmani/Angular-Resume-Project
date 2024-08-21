import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async generatePDF() {
    if (this.isBrowser) {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('resume');
      if (element) {
        html2pdf().from(element).save('ManishResume.pdf');
      }
    }
  }
}
