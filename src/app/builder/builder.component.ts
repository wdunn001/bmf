import { Component, OnInit } from "@angular/core";
import { Character } from "../store/models/character";
import { select$, select } from "@angular-redux/store";
import { Observable } from "rxjs/Observable";
import { IBuilder, BuilderActions } from "../store/reducers/builder/reducer";
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { dispatch } from "@angular-redux/store/lib/src/decorators/dispatch";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"]
})
export class BuilderComponent implements OnInit, OnDestroy {
  @select(["builderState", "character", "name"])
  builderState$: Observable<Character>;
  selectedCharacter: Character;
  private subscriptions: Array<Subscription> = [];

  constructor() {}

  ngOnInit() {
    this.subscriptions = [
      this.builderState$.subscribe()
    ];
    this.selectedCharacter = new Character();
  }
  ngOnDestroy() {
    this.subscriptions.map((s: Subscription) => {
      s.unsubscribe();
    });
  }

  submit(e, v) {
    console.log(v);
    this.selectedCharacter.name = v;
    this.updateCharacter();
  }
  @dispatch() updateCharacter = () => ({ type: BuilderActions.LOAD_CHARACTER , payload: this.selectedCharacter });
}
