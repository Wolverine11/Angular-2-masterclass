import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer' 
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {EventBusArgs} from './EventBusArgs';

@Injectable()
export class EventBusService {

  private messages = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this.messages.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this.messages
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
