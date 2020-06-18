Feature: Comments feature

    Comments can be added to posts

    Scenario: View comments on a post
        When I click on Comments button of a post
        Then I should see the comments to the post 

    Scenario: Add a comments
        When I go to Comments section of a post
        And I type "This is a comment" in the comment textarea
        Then a new comment should be added 

    Scenario: Delete a comment
        When I go to Comments section of a post
        And I click on the delete button of the comment
        Then the comment must be deleted 

    Scenario: Can't delete comment made by others
        When I go to comments section of a post
        And I see a comment made by other users
        Then I should not see a delete button