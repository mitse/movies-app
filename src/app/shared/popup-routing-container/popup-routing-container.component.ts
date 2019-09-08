import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'popup-routing-container',
  templateUrl: './popup-routing-container.component.html',
  styleUrls: ['./popup-routing-container.component.scss']
})
export class PopupRoutingContainerComponent {
  currentDialog: MatDialogRef<any> = null;

  constructor(
    matDialog: MatDialog,
    route: ActivatedRoute,
    router: Router
  ) {


    route.params.pipe(take(1)).subscribe(params => {
      console.log(params, window.history.state)
      if (this.currentDialog) {
        this.currentDialog.close();
      }

      const component = route.snapshot.data['component'];
      const data = params && params.id ? { id: params.id } : null;
      console.log(component, params)
      // When router navigates on this component is takes the params and opens up the modal
      this.currentDialog = matDialog.open(component, { data });

      // Go back to search page after the popup is closed
      this.currentDialog.afterClosed().subscribe(res => {
        if (window.history.state['collections'])
          router.navigateByUrl('/collections');
        else
          router.navigateByUrl('/');
      });

    });
  }

}
