function visit() {
  cy.visit('http://localhost:3000/posts');
}

function isPostLength(len) {
  cy.get('.post').should('have.length', len);
}

function typeInForm(string) {
  cy.get('textarea').type('This is a sample post');
}

function clickSubmitBtn() {
  cy.get('input[type="submit"]').click();
}

function deletePost() {
  cy.get('.deleteBtn').first().click();
}

function viewOthersPost() {
  cy.get('.post').find('h4').contains('Rayyan');
}

function deleteBtnMissing() {
  cy.get('.post');
  cy.get('.deleteBtn').should('have.length', 2);
}

function likePostBtn() {
  cy.get('.post').last().find('.likeBtn').click();
}

function isPostLikes(n) {
  cy.get('.totalLikes').last().contains('2');
}

function postsLength() {
  const len = cy.get('.post').its('length');
  return len;
}

export {
  visit,
  postsLength,
  isPostLength,
  typeInForm,
  clickSubmitBtn,
  deletePost,
  viewOthersPost,
  deleteBtnMissing,
  likePostBtn,
  isPostLikes
};
