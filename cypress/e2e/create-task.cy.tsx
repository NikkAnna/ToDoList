describe('Тестирование функционала добавления и редактирования задачи', () => {
    beforeEach(() => {
      cy.viewport(1400, 1000);
  
      cy.visit('http://localhost:4000/');
    });
  
    it('дело добавляется в список задач', () => {
        
        cy.get('[data-cy=input]').type('Погладить кошку')
        cy.get('[data-cy=addButton]').click({ force: true });

        const task = cy.get('[data-cy=taskCard]');
        task.contains('Погладить кошку').should('exist')

    //   const buns = cy.get('[data-cy=buns-category]');
    //   buns.contains('Добавить').click();
    //   const mains = cy.get('[data-cy=mains-category]');
    //   mains.contains('Добавить').click();
  
    //   const orderButton = cy.get('[data-cy=order-button]');
    //   orderButton.contains('Оформить заказ').click();
  
    //   const modal = cy.get('[data-cy=modal]');
    //   modal.should('exist');
  
    //   const orderNumber = cy.get('[data-cy=order-number]');
    //   orderNumber.contains('111').should('exist');
  
    //   const modalCloseButton = cy.get('[data-cy=modal-button]');
    //   modalCloseButton.click();
    //   modal.should('not.exist');
  
    //   cy.get('[data-cy=no-top-bun]').should('exist');
    //   cy.get('[data-cy=no-bottom-bun]').should('exist');
    //   cy.get('[data-cy=no-ingredients]').should('exist');
    });

    it('задача отмечается как выполненная', () => {
        // cy.get('[data-cy=checkbox]').check();
        

    });
  });
  