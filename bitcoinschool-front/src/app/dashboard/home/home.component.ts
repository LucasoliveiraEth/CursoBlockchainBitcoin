import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardService } from 'src/app/services/dashboard.service';
import { PrecoBitcoin } from 'src/app/models/PrecoBitcoin';
import { TickerList } from 'src/app/models/TickerList';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface Student {
  name: string;
  subjects: string[];
  marks: number[];
  class: string;
  section: string;
}

const ELEMENT_DATA: Student[] = [
  {
    name: 'Tony',
    subjects: ['MATH', 'PHY', 'CHEM'],
    marks: [90, 95, 97],
    class: '12',
    section: 'A',
  },
  {
    name: 'Rita',
    subjects: ['MATH', 'PHY', 'BIO'],
    marks: [97, 92, 96],
    class: '12',
    section: 'A',
  },
  {
    name: 'Monty',
    subjects: ['MATH', 'PHY', 'BIO'],
    marks: [80, 99, 100],
    class: '12',
    section: 'B',
  },
  {
    name: 'Pintu',
    subjects: ['GEOLOGY', 'HISTORY'],
    marks: [90, 95],
    class: '12',
    section: 'C',
  },
  {
    name: 'Sarah',
    subjects: ['PAINTING', 'DANCE'],
    marks: [97, 100],
    class: '12',
    section: 'C',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public precoBitcoin : PrecoBitcoin = new PrecoBitcoin();
  public titulo: string = "preço Bitcoin: ";

  displayedColumns: string[] = [
    'name',
    'class',
    'section',
    'subjects',
    'marks',
  ];

  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Student) => `${element.name}`,
    },
    {
      columnDef: 'class',
      header: 'Class',
      cell: (element: Student) => `${element.class}`,
    },
    {
      columnDef: 'section',
      header: 'Section',
      cell: (element: Student) => `${element.section}`,
    },
    {
      columnDef: 'subjects',
      header: 'Subjects',
      cell: (element: Student) => `${element.subjects.join(', ')}`,
    },
    {
      columnDef: 'marks',
      header: 'Marks',
      cell: (element: Student) => `${element.marks.join(', ')}`,
    },
  ];

  dataSource = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Student>(ELEMENT_DATA);
    this.dataSource.filterPredicate = this.filterBySubject();
    this.dataSource.sortData = this.sortData();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toUpperCase();
  }

  filterBySubject() {
    let filterFunction = (data: Student, filter: any): boolean => {
      if (filter) {
        const subjects = data.subjects;
        for (let i = 0; i < subjects.length; i++) {
          if (subjects[i].indexOf(filter) != -1) {
            return true;
          }
        }
        return false;
      } else {
        return true;
      }
    };

    return filterFunction;
  }

  sortData() {
    let sortFunction = (items: Student[], sort: MatSort): Student[] => {
      if (!sort.active || sort.direction === '') {
        return items;
      }

      return items.sort((a: Student, b: Student) => {
        let comparatorResult = 0;
        switch (sort.active) {
          case 'name':
            comparatorResult = a.name.localeCompare(b.name);
            break;
          case 'class':
            comparatorResult = a.class.localeCompare(b.class);
            break;
          case 'section':
            comparatorResult = a.section.localeCompare(b.section);
            break;
          case 'subjects':
            comparatorResult = a.subjects.length - b.subjects.length;
            break;
          case 'marks':
            comparatorResult =
              a.marks.reduce((prev, curr) => prev + curr) / a.marks.length -
              b.marks.reduce((prev, curr) => prev + curr) / b.marks.length;
            break;
          default:
            comparatorResult = a.name.localeCompare(b.name);
            break;
        }
        return comparatorResult * (sort.direction == 'asc' ? 1 : -1);
      });
    };

    return sortFunction;
  }
}

