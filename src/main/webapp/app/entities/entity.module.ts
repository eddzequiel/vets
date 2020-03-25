import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.VetsClientModule)
      },
      {
        path: 'pet',
        loadChildren: () => import('./pet/pet.module').then(m => m.VetsPetModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class VetsEntityModule {}
