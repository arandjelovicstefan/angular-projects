import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errorMessage!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data['message']; //message smo postavili app-routing module, primer sa statickim podacima, samo ukoliko se ne menja, za druge mora subscribe
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message']; //static data
    });
  }
}
