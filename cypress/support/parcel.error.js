export { ignoreParcelError };

function ignoreParcelError() {
  cy.on('uncaught:exception', (err, runnable) => {
    if (err.message.indexOf('Uncaught ReferenceError: parcelRequire is not defined')) {
      console.warn('Parcel related issue');
      return false;
    }
    return true;
  });
}
