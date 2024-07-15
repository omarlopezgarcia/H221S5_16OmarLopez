import { Component, OnInit } from '@angular/core';
import { IpifyService } from '../../ipify.service';

@Component({
  selector: 'app-all-ip-info',
  standalone: true,
  imports: [],
  templateUrl: './all-ip-info.component.html',
  styleUrl: './all-ip-info.component.css'
})
export class AllIpInfoComponent implements OnInit {
  allIpInfo: any[] = [];
  newIp: string = '';

  constructor(private ipifyService: IpifyService) {}

  ngOnInit(): void {
    this.loadAllIpInfo();
  }

  loadAllIpInfo(): void {
    this.ipifyService.getAllIPInfo().subscribe(
      data => {
        this.allIpInfo = data;
      },
      error => {
        console.error('Error al recuperar toda la información de IP', error);
      }
    );
  }

  deleteIPInfo(id: number): void {
    this.ipifyService.deleteIPInfo(id).subscribe(
      () => {
        this.allIpInfo = this.allIpInfo.filter(ipify => ipify.id !== id);
      },
      error => {
        console.error('Error al eliminar la información de IP', error);
      }
    );
  }

  addIPInfo(): void {
    if (this.newIp.trim()) {
      this.ipifyService.addIPInfo(this.newIp).subscribe(
        data => {
          this.allIpInfo.push(data);
          this.newIp = '';
        },
        error => {
          console.error('Error al agregar información de IP', error);
        }
      );
    }
  }
}