import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  findPlayersByCampaign(campaignId: number, textToSearch: string) {
    return this.http.get(`http://localhost:4000/v1/players/${campaignId}?textToSearch=${textToSearch}`);
  }
}
