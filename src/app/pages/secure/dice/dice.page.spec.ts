import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DicePage } from './dice.page';
import { IonicModule } from '@ionic/angular';

describe('DicePage', () => {
  let component: DicePage;
  let fixture: ComponentFixture<DicePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
