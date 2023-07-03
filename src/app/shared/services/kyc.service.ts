import { kycListPayloadObj } from './../../core/interfaces/kycListPayloadObj';
import { config } from 'src/app/core/interfaces/api_endpoints';
import { WebrequestService } from './webrequest.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KycService {

  constructor(private webrequestService: WebrequestService) { }

  getKycList(payloadObj: kycListPayloadObj | null = null): Observable<any> {

    if (payloadObj) {
      const formData = new FormData();
      for (const [key, value] of Object.entries(payloadObj)) {
        formData.append(key, value);
      }
      return this.webrequestService.postdata(formData, config.kyc.kycList)
    }
    else {
      return this.webrequestService.postHeaderwithoutpayload(config.kyc.kycList)
    }

  }

  getKycDetails(kycId: string) {
    const formData = new FormData();
    formData.append('kycid', kycId);
    return this.webrequestService.postdata(formData, config.kyc.kycDetails);
  }

}
