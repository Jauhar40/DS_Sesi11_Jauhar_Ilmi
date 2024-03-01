@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given I am on the login page
    When I login with standard_user and secret_sauce
    Then I should see home page
