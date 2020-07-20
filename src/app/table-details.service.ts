import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableDetailsService {
  tableDetails: Array<any>;
  individualDescription: Array<any>;
  constructor() {
    this.tableDetails = [
      {
        _id: 1,
        // date: new Date(new Date().setDate(12)),
        date: '',
        listName: 'Competitive Intelligence',
        entities: 0,
        details: '',
      },
      {
        _id: 2,
        // date: new Date(new Date().setDate(13)),
        date: '',
        listName: 'My Vendors',
        entities: 0,
        details: '',
      },
      {
        _id: 3,
        // date: new Date(new Date().setDate(14)),
        date: '',
        listName: 'My Customers',
        entities: 0,
        details: '',
      },
      {
        _id: 4,
        date: new Date(new Date().setDate(23)),
        listName: 'Test_30_results',
        entities: 28,
        details: '',
      },
      {
        _id: 5,
        date: new Date(new Date().setDate(25)),
        listName: 'to_index',
        entities: 100,
        details: '',
      },
      {
        _id: 6,
        date: new Date(new Date().setDate(1)),
        listName: 'KPMG requested Companines-Listed Set_Prasad Kumar',
        entities: 34,
        details: '',
      },
      {
        _id: 7,
        date: new Date(new Date().setDate(2)),
        listName: 'Error Case-LBT to EBITA Blank_Prasad kumar',
        entities: 20,
        details: '',
      },
      {
        _id: 8,
        date: new Date(new Date().setDate(4)),
        listName: 'two companies',
        entities: 28,
        details: '',
      },
      {
        _id: 9,
        date: new Date(new Date().setDate(10)),
        listName: 'Custom',
        entities: 2,
        details: '',
      },
      {
        _id: 10,
        date: new Date(new Date().setDate(26)),
        listName: 'Mumbai',
        entities: 3,
        details: '',
      },
      {
        _id: '1',
        date: new Date(new Date().setDate(27)),
        listName: 'DElhi',
        entities: 10,
        details: '',
      },
      {
        _id: 11,
        date: new Date(new Date().setDate(23)),
        listName: 'Infosys case',
        entities: 7,
        details: '',
      },
      {
        _id: 12,
        date: new Date(new Date().setMonth(1)),
        listName: 'Pune',
        entities: 9,
        details: '',
      },
      {
        _id: 13,
        date: new Date(new Date().setMonth(4)),
        listName: 'TCS error case',
        entities: 10,
        details: '',
      },
      {
        _id: 14,
        date: new Date(new Date().setMonth(6)),
        listName: 'Wipro',
        entities: 17,
        details: '',
      },
    ];
    this.individualDescription = [
      {
        _id: 'uniqueId',
        tableReference: '4',
        description: [
          'Bundle Technology private limited',
          'Hector Bevarages private ltd',
          'Puma Sports India Private Ltd',
          'Dewan housing Finance Corporation',
          'Infosys Limited',
          'Think and learn private Ltd',
          'Delhivery Private Ltd',
          'Wow Momo food private Ltd',
          'Rebel foods Private Ltd',
          'LendingKart Technologies Private Ltd',
          'ID Fresh Food (India) Private Ltd',
          'Bharathiasha TechnoLogies Private Ltd (PrivateCircle)',
          'Gala Precision Engineering Private Ltd',
          'Balaji Wafers Private Ltd',
          'Sangeetha Mobiles Private Ltd',
          'Vodafone idea Ltd',
          'Vakrangee Ltd',
        ],
        details: '',
      },
    ];
  }

  getAllTableDetails(): Observable<Array<any>> {
    return of(this.tableDetails);
  }
  getOneRow(id: String): Observable<any> {
    for (let i of this.individualDescription) {
      if (i.tableReference == id) {
        return of(i);
      }
    }
    return of({ succes: false, details: '' });
  }
}
