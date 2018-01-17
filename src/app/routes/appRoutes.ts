export class AppRoutes {
  appRoutes = [];
  OrganismHeader: any;
  constructor() {
    this.appRoutes = [
      { path: 'index', component: this.OrganismHeader },
    ];
  }
}
