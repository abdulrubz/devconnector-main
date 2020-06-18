Feature: Posts feature

    A user should be able to add and delete Posts

    Scenario: Add a post
        Given there are N posts
        When I type "This is my first post" in the textarea
        And click on the Submit button
        Then a new post should be added, ie total N+1 posts

    Scenario: Delete a post
        Given there are N posts
        When I click on the Delete button of a post
        Then a post should be deleted, ie total N-1 posts

    Scenario: Like a Post
        When I click on Like button of a post
        Then the post should be liked i.e. add 1 to post likes 

    Scenario: Can't add an empty post
        When I type "" in the textarea 
        And click on the Submit button
        Then the post should not be added

    Scenario: Can't delete post written by others
        When I see a post made by others 
        Then I should not see a delete button in that post