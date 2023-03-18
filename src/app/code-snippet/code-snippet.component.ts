import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent {
  @Input() code: string;

  copyTooltip: string;

  copyToClipBoard(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => (this.copyTooltip = 'copied!'))
      .catch(() => (this.copyTooltip = 'error'));
  }
}
