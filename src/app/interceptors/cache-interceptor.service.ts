import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  cache = new Map<string, HttpResponse<any>>()

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.method !== 'GET') {
      return next.handle(req)
    }

    const cachedResponse = this.cache.get(req.url)

    if(cachedResponse) {
      return of(cachedResponse)
    }

    return next.handle(req).pipe(
      tap((event) => {
        if(event instanceof HttpResponse) {
          this.cache.set(req.url, event)
        }
      })
    )
  }
}
