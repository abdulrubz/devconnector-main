import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
var LoginPage = require('../../../pages/LoginPage');
var PostsPage = require('../../../pages/PostsPage');
var CommentsPage = require('../../../pages/CommentsPage');

Before(() => {
  LoginPage.visit();
  LoginPage.enterCredentials();
  LoginPage.submitLogin();
  PostsPage.visit();
});

When('I click on Comments button of a post', function () {
  PostsPage.clickCommentsBtn();
});

Then('I should see the comments to the post', function () {
  CommentsPage.viewComments();
});

When('I go to Comments section of a post', function () {
  PostsPage.goToComments();
});

When('I type {string} in the comment textarea', function (string) {
  CommentsPage.typeInForm();
});

Then('a new comment should be added', function () {
  CommentsPage.isCommentsLength(N);
});

When('I click on the delete button of the comment', function () {
  CommentsPage.clickDeleteBtn();
});

Then('the comment must be deleted', function () {
  CommentsPage.isCommentsLength(N - 1);
});
When(/^I go to comments section of a post$/, function () {

});
When(/^I see a comment made by other users$/, function () {

});
Then(/^I should not see a delete button$/, function () {

});