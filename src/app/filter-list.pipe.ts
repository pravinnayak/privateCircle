import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
})
export class FilterListPipe implements PipeTransform {
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
  transform(items: Array<any>, search: String): Array<any> {
    // console.log(items);

    //   let newArray: Array<JSON>;
    if (items && items.length > 0 && search) {
      return items.filter((e) => {
        let copyObj = {};
        for (let i of Object.keys(e)) {
          copyObj[i] = e[i];
        }
        return JSON.stringify(copyObj)
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      //     newArray = items.filter((e) => {
      //       delete e._id;
      //       let tempDate = new Date(e.date);
      //       e.date = this.month[tempDate.getMonth()] + ' ' + tempDate.getDate();
      //       // console.log(JSON.stringify(e));
      //       return JSON.stringify(e).toLowerCase().includes(search.toLowerCase());
      //     });
      //   } else {
      //     newArray = items;
    } else {
      return items;
    }
  }
}
