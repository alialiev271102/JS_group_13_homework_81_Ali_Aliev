import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LinkData} from "../models/link.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) {
  }

  createLink(linkData: LinkData) {
    return this.http.post(environment.apiUrl + '/links', linkData);
  }
}
