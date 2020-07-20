import { Component, OnInit, Input } from '@angular/core';

import { TableDetailsService } from '../table-details.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css'],
})
export class ListTableComponent implements OnInit {
  @Input('searchParam') searchParam: String;
  selected: any;
  selectedRow: any;
  tempSearch: String;
  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor(private tableDetailsService: TableDetailsService) {
    // this.searchParam
    // console.log(this.searchParam);
    // setTimeout(() => {
    //   this.tableDetails = [
    //     {
    //       _id: 1,
    //       date: new Date(new Date().setDate(12)),
    //       listName: 'Competitive Intelligence',
    //       entities: 0,
    //       details: '',
    //     },
    //   ];
    // }, 10000);
    // setTimeout(() => {
    //   this.tableDetails = [
    //     {
    //       _id: 4,
    //       date: new Date(new Date().setDate(12)),
    //       listName: 'Competitive Intelligence',
    //       entities: 0,
    //       details: '',
    //     },
    //   ];
    // }, 20000);
  }

  getTableDetails() {
    return this.tableDetails;
  }
  select(item) {
    this.selected = item;
  }
  isActive(item) {
    return this.selected === item;
  }
  selectRow(item) {
    // console.log(item);
    if (item != this.selected) {
      this.selected = null;
    }
    this.selectedRow = item;
  }
  isActiveRow(item) {
    return item && this.selectedRow === item;
  }

  tableDetails: any[];

  ngOnInit() {
    this.tableDetailsService.getAllTableDetails().subscribe((table: any[]) => {
      this.tableDetails = table;
    });
    // this.tableDetailsService.getOneRow('1').subscribe((row) => {
    //   console.log(row);
    // });
  }

  // ngOnInit(): void {}
}
