import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationFilterComponent } from './table-pagination-filter.component';

describe('TablePaginationFilterComponent', () => {
  let component: TablePaginationFilterComponent;
  let fixture: ComponentFixture<TablePaginationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePaginationFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
