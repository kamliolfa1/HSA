import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) {}

  getAllTopics()
    {
      let data = this.http.get<any>("https://healthsafetyarmy.jp.ngrok.io/topic");
      return data;
      console.log(data);
    }
}
