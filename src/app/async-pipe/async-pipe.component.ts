import { Component, OnInit } from '@angular/core';
import { concatMap, delay, map, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
})
export class AsyncPipeComponent implements OnInit {
  Data3: string = '';
  Data4: Observable<string> = of('');
  constructor() {}

  ngOnInit(): void {
    this.getData3();
    this.Data4 = this.getData4();
  }

  get Data1() {
    return of('Data1').pipe(delay(1500));
  }

  get Data2() {
    return of('Data2').pipe(
      map(() => 'Data2_Map'),
      concatMap(() => of('Data2_ConcatMap')),
    );
  }

  getData3() {
    of('Data3')
      .pipe(delay(1500))
      .subscribe((data) => (this.Data3 = data));
  }

  getData4() {
    return of('Data4').pipe(delay(1500));
  }

  getData5() {
    return of('Data5').pipe(
      delay(1500),
      concatMap(() => of('Data5_ConcatMap')),
    );
  }
}
