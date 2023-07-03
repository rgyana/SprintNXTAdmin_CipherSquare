import { Observable, map } from 'rxjs';
import { KycService } from './../../../shared/services/kyc.service';
import { Component, OnInit } from '@angular/core';
import { kycListPayloadObj } from 'src/app/core/interfaces/kycListPayloadObj';

@Component({
  selector: 'app-kyc-home',
  templateUrl: './kyc-home.component.html',
  styleUrls: ['./kyc-home.component.scss']
})
export class KycHomeComponent implements OnInit {

  kycListData: any;
  filteredKycListData: any;
  kycDetailsById: any;

  constructor(private kycService: KycService) { }

  ngOnInit(): void {
    // this.getKycListData();
    // this.getFilteredKycListData({ search: '9714771414' });
    this.getKycDetailsById('36');
  }

  getKycListData() {
    this.kycService.getKycList().subscribe({
      next: (res: any) => {
        if ((res?.statuscode == 200) && res?.status) {
          this.kycListData = res?.data
        }
      }
    })
  }

  getFilteredKycListData(payloadObj: kycListPayloadObj) {
    this.kycService.getKycList(payloadObj).subscribe({
      next: (res: any) => {
        if ((res?.statuscode == 200) && res?.status) {
          this.filteredKycListData = res?.data
        }
      }
    })
  }

  getKycDetailsById(kycId: string) {
    this.kycService.getKycDetails(kycId).subscribe({
      next: (res: any) => {
        if ((res?.statuscode == 200) && res?.status) {
          this.kycDetailsById = res?.data
        }
      }
    })
  }

}
