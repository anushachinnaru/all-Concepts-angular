import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './childd/child.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';
import { DatePipe } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HostListnerComponent } from './host-listner/host-listner.component';
import { HostListnerDirective } from './host-listner.directive';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ForkjoinCombinelatestComponent } from './forkjoin-combinelatest/forkjoin-combinelatest.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { HttpInterceptorService } from './http-interceptor.service';
import { PerformanceHandlingComponent } from './performance-handling/performance-handling.component';
import { PerformanceHandlingPipePipe } from './performance-handling-pipe.pipe';
import { OnpushChangeetectionComponent } from './onpush-changeetection/onpush-changeetection.component';
import { SharereplayComponent } from './sharereplay/sharereplay.component';
import { Sharereplay2Component } from './sharereplay2/sharereplay2.component';
import { SampleModule } from './sample/sample.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    CustomDirectiveDirective,
    ParentComponent,
    ChildComponent,
    LifecycleHooksComponent,
    PipeComponent,
    FilterPipe,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    HostListnerComponent,
    HostListnerDirective,
    FormbuilderComponent,
    HttpclientComponent,
    ForkjoinCombinelatestComponent,
    ErrorHandlerComponent,
    PerformanceHandlingComponent,
    PerformanceHandlingPipePipe,
    OnpushChangeetectionComponent,
    SharereplayComponent,
    Sharereplay2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, SampleModule],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
