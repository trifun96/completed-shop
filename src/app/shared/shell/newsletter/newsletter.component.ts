import { Component, OnInit } from '@angular/core';
import { Newsletter } from '../../models/newsletter.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  subscribeModelObj: Newsletter = new Newsletter();
  subscribers: any = [];
  constructor(private api: ApiService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getAllSubscribers()
  }

  subscribeForm = new FormGroup({
    email: new FormControl(this.subscribeModelObj.email),
  });

  postSubscribeData() {
    this.subscribeModelObj.email = this.subscribeForm.value.email;

    console.log('daj subscribe', this.subscribeModelObj);

    this.api.postNewsletter(this.subscribeModelObj).subscribe((res) => {
      this.toastr.success('Uspesno ste se prijavili na nas Newsletter')
    });

    this.subscribeForm.reset();
  }

  getAllSubscribers() {
    this.api.getNewsletter().subscribe((res) => {
      this.subscribers = res;
    });
  }
}
