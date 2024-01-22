import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItAbstractComponent } from '../../../../abstracts/abstract.component';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ItIconComponent } from '../../../utils/icon/icon.component';
import { ItButtonDirective } from '../../../core/button/button.directive';
import { inputToBoolean } from '../../../../utils/coercion';

import { NavBarCollapsible } from 'bootstrap-italia';

@Component({
  standalone: true,
  selector: 'it-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, ItIconComponent, ItButtonDirective],
})
export class ItNavBarComponent implements AfterViewInit {
  @Input({ transform: inputToBoolean }) megamenu?: boolean;
  @Input({ transform: inputToBoolean }) expand?: boolean = true;

  @ViewChild('collapseButton') private collapseButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('collapseView') private collapseView?: ElementRef<HTMLButtonElement>;

  private navbar?: NavBarCollapsible;

  ngAfterViewInit() {
    if (this.collapseButton && this.collapseView) {
      this.navbar = NavBarCollapsible.getOrCreateInstance(this.collapseView.nativeElement);
    }
  }

  toggleCollapse() {
    this.navbar?.toggle(this.collapseButton?.nativeElement);
  }
}
