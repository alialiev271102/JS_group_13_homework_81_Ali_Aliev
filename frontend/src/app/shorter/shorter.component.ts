import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LinkData} from "../models/link.model";
import {LinkService} from "../services/link.service";

@Component({
  selector: 'app-shorter',
  templateUrl: './shorter.component.html',
  styleUrls: ['./shorter.component.sass']
})
export class ShorterComponent {
  @ViewChild('f') form!: NgForm;
  shortLink: string = '';
  originalUrl: string = '';

  constructor(private linkService: LinkService) {
  }

  onSubmit() {
    const linkData: LinkData = this.form.value;
    this.linkService.createLink(linkData).subscribe((link: any) => {
      this.shortLink = link.shortUrl;
      this.originalUrl = link.Url;
    });
  }
}
