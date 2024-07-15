import { Component, OnInit } from '@angular/core';
import { IpifyService } from '../../ipify.service';

@Component({
  selector: 'app-my-ip-info',
  standalone: true,
  imports: [],
  templateUrl: './my-ip-info.component.html',
  styleUrl: './my-ip-info.component.css'
})
export class MyIpInfoComponent implements OnInit {
  myIpInfo: any;

  constructor(private ipifyService: IpifyService) {}

  ngOnInit(): void {
    this.ipifyService.getMyIPInfo().subscribe(
      data => {
        this.myIpInfo = data;
      },
      error => {
        console.error('Error al recuperar mi información IP', error);
      }
    );
  }
}