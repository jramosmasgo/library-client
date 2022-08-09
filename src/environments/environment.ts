// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   urlServiceBack: 'https://localhost:9001/api/backoffice',
//   urlServicePublic: 'https://localhost:9001/api/publicoffice',
//   urlAuth: 'https://localhost:9001/api/Account',
// };

export const environment = {
  production: false,
  urlServiceBack: 'http://booksapp.somee.com/api/backoffice',
  urlServicePublic: 'http://booksapp.somee.com/api/publicoffice',
  urlAuth: 'http://booksapp.somee.com/api/Account',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
