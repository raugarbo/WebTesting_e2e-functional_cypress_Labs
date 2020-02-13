# Teacher Sample


## SUT

- [e2e-ToDoList](https://github.com/LabsAdemy/ProtonTasks)

## Functional tests already done

- **FEATURE:** the app should have a well formed html
  - _As a_ user
  - _I want to_ view a recognizable web page
  - _In order to_ feel safe using it
  - **Scenario:** I am visiting the home page
    - _Given_ the url https://labsademy.github.io/ProtonTasks/
    - _When_ I visit it
    - _Then_ should have charset UTF-8
    - _And Then_ should have _Proton Tasks_ on Title
    - _And Then_ should have a header
    - _And Then_ should have an h1 on the header with text _Proton Tasks_

`cypress\integration\examples\proton\page.spec.js`

---

- **FEATURE:** the app should allow me to create new tasks
  - _As a_ user with tasks to do
  - _I want to_ create new tasks
  - _In order to_ follow up my work
  - **Scenario:** I am creating a new task
    - _Given_ the url 'https://labsademy.github.io/ProtonTasks/
    - _When_ I visit it
    - _Then_ should have an input text box
    - _And Then_ should have an add task button
    - _When_ I type a task description on input
    - _Then_ should be displayed
    - _When_ I type a description and click on _Add task_ button
    - _Then_ should clear the input box
    - _And Then_ should appear on Things to do

`cypress\integration\examples\proton\add-task.spec.js`

---

- **FEATURE:**  the app should allow me to mark tasks as completed
  - _As a_ user
  - _I want to_ mark a task as completed
  - _In order to_ focus on my uncompleted work
   - **Scenario:** I want to to mark a task as completed
    - _Given_ an uncompleted task
    - _When_ I want to mark the task as completed
    - _Then_ should have an input check box
    - _When_ I check the completed checkbox
    - _Then_ should be on completed tasks list
    - _And Then_ should not be on uncompleted tasks list

`cypress\integration\examples\proton\complete-task.spec.js`