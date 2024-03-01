@digital-skola @login
Feature: Swag Labs  - Login - Negative

  @negative
  Scenario: As a locked_out_user, I should get error message
    Given I am on the login page
    When I login with locked_out_user and secret_sauce
    Then I should see error "Epic sadface: Sorry, this user has been locked out."