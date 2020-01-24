import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor(private router: Router) { }

  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      localStorage.setItem('splashScreen', JSON.stringify({isLoaded: this.isLoading}));
      this.router.navigate(['/today']);
    }, 4000);
  }

}
