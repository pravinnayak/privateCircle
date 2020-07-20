import {
  Component,
  OnInit,
  Input,
  DoCheck,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { TableDetailsService } from '../table-details.service';
import PerfectScrollbar from 'perfect-scrollbar';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit, DoCheck, AfterViewInit {
  @Input('id') id: string;
  individualDetail: any;
  config: PerfectScrollbarConfigInterface;
  scrollDistance = 1;
  constructor(
    private tableDetailsService: TableDetailsService,
    private element: ElementRef
  ) {}

  @ViewChild(DescriptionComponent) demo;

  ngAfterViewInit(): void {
    console.log(this.demo);
    new PerfectScrollbar(this.element.nativeElement);
  }
  ngDoCheck(): void {
    if (this.id) {
      this.tableDetailsService.getOneRow(this.id).subscribe((row) => {
        console.log(row);
        this.individualDetail = row;
      });
    }
    // throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    this.tableDetailsService.getOneRow(this.id).subscribe((row) => {
      console.log(row);
      this.individualDetail = row;
    });

    // const ps = new PerfectScrollbar();
    // ps.
  }
}
