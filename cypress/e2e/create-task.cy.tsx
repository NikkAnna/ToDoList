describe('Тестирование функционала добавления и редактирования задачи', () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);

    cy.visit('http://localhost:4000/');
  });

  it('дело добавляется в список задач', () => {
    cy.get('[data-cy=input]').type('Погладить кошку');
    cy.get('[data-cy=addButton]').click({ force: true });

    const task = cy.get('[data-cy=taskCard]');
    task.contains('Погладить кошку').should('exist');
  });

  it('задача отмечается как выполненная', () => {
    cy.get('[data-cy=input]').type('Погладить кошку');
    cy.get('[data-cy=addButton]').click({ force: true });

    cy.get('[data-cy=checkbox]').click({ force: true });

    cy.get('[data-cy=done]').click({ force: true });
    cy.get('[data-cy=taskCard]').contains('Погладить кошку').should('exist');
  });
});
