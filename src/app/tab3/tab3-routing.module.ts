import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { TestComponent } from './testreactpage/test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [TestComponent]
})
export class Tab3PageRoutingModule {}
