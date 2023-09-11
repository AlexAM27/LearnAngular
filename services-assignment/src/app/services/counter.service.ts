
export class CounterService {
  activeInactiveActionsCounter = 0;
  inactiveActiveActionsCounter = 0;

  addActiveInactiveAction() {
    this.activeInactiveActionsCounter++;
    console.log('active->inactive: ' + this.activeInactiveActionsCounter);
  }

  addInactiveActiveAction() {
    this.inactiveActiveActionsCounter++;
    console.log('inactive->active: ' + this.inactiveActiveActionsCounter);
  }
}