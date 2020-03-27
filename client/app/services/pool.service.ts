import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pool } from '../shared/models/pool.model';

@Injectable()
export class PoolService {

  constructor(private http: HttpClient) { }

  getPools(): Observable<Pool[]> {
    return this.http.get<Pool[]>('http://173.193.92.5:30837/api/pools');
  }

  countPools(): Observable<number> {
    return this.http.get<number>('http://173.193.92.5:30837/api/pools/count');
  }

  addPool(pool: Pool): Observable<Pool> {
    return this.http.post<Pool>('http://173.193.92.5:30837/api/pool', pool);
  }

  getPool(pool: Pool): Observable<Pool> {
    return this.http.get<Pool>(`http://173.193.92.5:30837/api/pool/${pool._id}`);
  }

  editPool(pool: Pool): Observable<any> {
    return this.http.put(`http://173.193.92.5:30837/api/pool/${pool._id}`, pool, { responseType: 'text' });
  }

  deletePool(pool: Pool): Observable<any> {
    return this.http.delete(`http://173.193.92.5:30837/api/pool/${pool._id}`, { responseType: 'text' });
  }

}
