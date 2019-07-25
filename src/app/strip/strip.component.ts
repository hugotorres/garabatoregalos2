import { Component, OnInit , Input, Renderer2, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.css']
})
export class StripComponent implements OnInit {
  @ViewChild ('strip') strip: ElementRef;
  @ViewChild ('stripClose') stripClose: ElementRef;
  @Input() titulo;
  @Input() contenido;
  expanded = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  open(): void {
    if (!this.expanded) {
      this.renderer.addClass(this.strip.nativeElement.parentNode, 'strips__strip--expanded');
      this.renderer.addClass(this.stripClose.nativeElement, 'strip__close--show');
      console.log('abriendo');
      this.expanded = true;
    }
  }

  close(): void {
    if (this.expanded) {
      this.renderer.removeClass(this.strip.nativeElement.parentNode, 'strips__strip--expanded');
      this.renderer.removeClass(this.stripClose.nativeElement, 'strip__close--show');
      this.expanded = false;
    }
    console.log('cerrando');
  }



}
