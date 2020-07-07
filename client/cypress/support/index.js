import 'cypress-file-upload';

it('Can sign up.', function () {
    cy.visit('/#/sign-up');
    cy.get('input#username').type('gary.cole@example.com');
    cy.get('input#firstName').type('Gary');
    cy.get('input#lastName').type('Cole');
    cy.get('input#password').type('pAssw0rd', { log: false });
    cy.get('select#group').select('driver');
    cy.fixture('images/photo.jpg').then(photo => {
        cy.get('input#photo').attachFile({
          fileContent: photo,
          fileName: 'photo.jpg',
          mimeType: 'application/json'
        });
      });
    cy.get('button').contains('Sign up').click();
    cy.hash().should('eq', '#/log-in');
  });