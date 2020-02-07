# Student Practice

> Use this template as a starting project:

- [Detector](https://github.com/AtomicBuilders/detector)

## SUT

- [Projects CRUD](https://angularbuilders.github.io/angular-begins/projects)

---

## Functional tests to de done

### Beginner

- **Feature:** a programmer can create a project
  - _As a_ programmer
  - _I want to_ create projects
  - _In order to_ see a list of my work
  - **Scenario:** I am on the project registration page
    - _Given_ I have a form
    - _When_ I fill it in and press save
    - _Then_ the list should contain the new project

---

### Boss

- **Feature:** a programmer can delete a project
  - _As a_ programmer
  - _I want to_ delete projects
  - _In order to_ see a list of my current real work
  - **Scenario:** I am on the project list page
    - _Given_ I have a list of projects
    - _When_ I click on one of them
    - _Then_ I should navigate to this project page
  - **Scenario:** I am on the page of an project
    - _Given_ I have a delete button
    - _When_ I click the delete button
    - _Then_ I should navigate to the main projects page
    - _And Then_ I should not found the deleted project