import {Component, inject, Input, OnDestroy, OnInit} from "@angular/core";
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle, IonToolbar, NavController
} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'lib-debug-big',
    template: `
        <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                  <ion-back-button></ion-back-button>
              </ion-buttons>
              <ion-title>Debug</ion-title>
              <ion-buttons slot="end">
                  <ion-button (click)="next()">next</ion-button>
              </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div [id]='"leaky" + index' *ngFor='let i of elements; let index = index;'>{{ index }}</div>
        </ion-content>
    `,
  standalone: true,
  imports: [CommonModule, IonBackButton, IonHeader, IonButtons, IonContent, IonTitle, IonToolbar, IonButton]
})
export class DebugBigComponent implements OnInit, OnDestroy {
    private angularIonicNavigation = inject(NavController);
    @Input() count = 5000;
    elements: any[] = [];

    ngOnInit() {
        console.log(`debugBig::: ngOnInit:: `);
        this.elements = new Array(this.count).fill(0);
    }

    next() {
        this.angularIonicNavigation.navigateForward(`debug/${+new Date()}`);

    }

    ngOnDestroy() {
        console.log(`debugBig::: ngOnDestroy:: `);

    }
}
