import {Directive, Input, ElementRef, Renderer2, HostListener} from '@angular/core';
import {DragDropService} from '../drag-drop.service';

/**
 * DOM的操作应该通过Renderer2进行，angular4+中后推荐使用Renderer2，之前是Renderer
 * ElementRef是指向DOM元素的引用
 */

@Directive({
  selector: '[app-draggable][dragTag][draggedClass][dragData]',
})
export class DragDirective {

  private _isDraggable = false;

  @Input() dragTag: string;
  @Input() draggedClass: string;
  @Input() dragData: any;
  /**
   * [app-draggable]向类似属性一样使用
   */
  @Input('app-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${draggable}`);
  }

  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService) {
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
