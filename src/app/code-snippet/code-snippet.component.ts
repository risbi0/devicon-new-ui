import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit {
  @Input() additionalClass: string;
  @Input() code: string;

  copyTooltip: string;

  ngOnInit() {
    console.log(this.additionalClass);
    console.log(this.code);
  }

  copyToClipBoard(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => (this.copyTooltip = 'copied!'))
      .catch(() => (this.copyTooltip = 'error'));
  }
}
