/**
 * Core
 */
import { exportToViewModel } from 'occ-components/widget-core/decorators';
import { BaseWidget } from 'occ-components/widget-core';

/**
 * Libraries, Helpers
 */
import ko from 'knockout';

/**
 * Models
 */
import SampleModel from '../models/sample';

export class Sample extends BaseWidget {
  /**
   * On load view model
   */
  @exportToViewModel
  companyName = ko.observableArray();

  @exportToViewModel
  btnStatus = ko.observableArray([false, false, false, false]);

  @exportToViewModel
  changeToggle(dn) {
    const updatedBtnStatus = this.btnStatus();

    this.companyName().map((e, index) => {
      if (e.displayName === dn) {
        console.log(dn, this.btnStatus()[index]);
        if (this.btnStatus()[index] === true) {
          updatedBtnStatus[index] = false;
        } else {
          updatedBtnStatus[index] = true;
        }
      }
    });

    this.btnStatus(updatedBtnStatus);
  }

  constructor() {
    //Constructing the BaseWidget
    super();
    new SampleModel().importData(this);
  }

  beforeAppear() {
    console.log('[BEFORE APPEAR] Sample');
  }
}
