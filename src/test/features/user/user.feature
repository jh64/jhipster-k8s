Feature: REST API with mock - User management
    Scenario: Retrieve administrator user
        When I search user 'admin'
        Then the user is found
        And his last name is 'Administrator'
