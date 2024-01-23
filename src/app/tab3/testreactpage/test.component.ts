import {
    Component,
    AfterViewInit,
    OnDestroy,
    OnInit,
    ElementRef,
    NgZone
  } from '@angular/core';
import ReactDOM from 'react-dom';
import TestReactComponent from './test.component.template';
import React from 'react';
  
  @Component({
    selector: 'test-comp',
    template: '',
    styleUrls: []
  })
  export class TestComponent implements OnInit, AfterViewInit, OnDestroy {

  
    constructor(
      private elementRef: ElementRef
    ) {}
  
    ngOnInit() {
    }
  
    ngAfterViewInit() {
      this.renderReactComp();
    }
  
  
    ngOnDestroy() {
      ReactDOM.unmountComponentAtNode(this.elementRef.nativeElement)
    }
  
  
  
    ngAfterViewChecked() {
      
    }
  
    renderReactComp() {
      if (this.elementRef && this.elementRef.nativeElement) {
        
        ReactDOM.render(React.createElement(TestReactComponent,{}), this.elementRef.nativeElement)

      }
    }
  }
  