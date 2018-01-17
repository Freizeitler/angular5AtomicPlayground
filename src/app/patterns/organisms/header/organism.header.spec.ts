import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { OrganismHeader } from './organism.header';
import { AtomButton } from '../../atoms/button/atom.button';


describe('OrganismHeader', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrganismHeader,
        AtomButton
      ],
      imports:[HttpClientModule, HttpModule],
      providers:[HttpClientModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(OrganismHeader);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
