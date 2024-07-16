import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Ipify {
  id: number;
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}

@Injectable({
  providedIn: 'root'
})
export class IpifyService {
  
  private baseUrl = 'https://fictional-space-sniffle-wrgp4j4q54h9xg4-8080.app.github.dev/api/ipinfo';

  constructor(private http: HttpClient) {}

  getMyIPInfo(): Observable<Ipify> {
    return this.http.get<Ipify>(`${this.baseUrl}/myip`);
  }

  getIPInfo(ip: string): Observable<Ipify> {
    return this.http.get<Ipify>(`${this.baseUrl}/${ip}`);
  }

  getAllIPInfo(): Observable<Ipify[]> {
    return this.http.get<Ipify[]>(`${this.baseUrl}/all`);
  }

  deleteIPInfo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  addIPInfo(ip: string): Observable<Ipify> {
    return this.http.get<Ipify>(`${this.baseUrl}/${ip}`);
  }
}