import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
var LoginPage = require('../../../pages/LoginPage');
var PostsPage = require('../../../pages/PostsPage');

Before(() => {
  LoginPage.visit();
  LoginPage.enterCredentials();
  LoginPage.submitLogin();
  PostsPage.visit();
});

Given('there are N posts', function () {
  PostsPage.isPostLength(2);
});

When('I type {string} in the textarea', function (string) {
  PostsPage.typeInForm(string);
});

When('click on the Submit button', function () {
  PostsPage.clickSubmitBtn();
});

Then('a new post should be added, ie total N+1 posts', function () {
  PostsPage.isPostLength(3);
});

Given('there are N posts before deleting', () => {
  PostsPage.isPostLength(3);
});

When('I click on the Delete button of a post', function () {
  PostsPage.deletePost();
});

Then('a post should be deleted, ie total N-{int} posts', function (int) {
  PostsPage.isPostLength(2);
});

When('I click on Like button of a post', function () {
  PostsPage.likePostBtn();
});

Then('the post should be liked i.e. add {int} to post likes', function (int) {
  PostsPage.isPostLikes(2);
});

Then('the post should not be added', function () {
  PostsPage.isPostLength(2);
});

When('I see a post made by others', function () {
  PostsPage.viewOthersPost();
});

Then('I should not see a delete button in that post', function () {
  PostsPage.deleteBtnMissing();
});
