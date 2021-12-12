import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }


  updateCharacter(playerId: string, character: any) {
    return this.http.put(`http://localhost:4000/v1/players/${playerId}/character`, character);
  }
  findPlayersByCampaign(campaignId: number, textToSearch: string) {
    return this.http.get(`http://localhost:4000/v1/players/${campaignId}?textToSearch=${textToSearch}`);
  }

  removePlayer(playerId: string) { 
    return this.http.delete(`http://localhost:4000/v1/players/${playerId}`);
  }

  leaveCampaign(playerId: string) {
    return this.http.delete(`http://localhost:4000/v1/players/${playerId}/leave`);
  }

  getCharacter(playerId: string) { 
    return this.http.get(`http://localhost:4000/v1/players/${playerId}/character`);
  }
}
