
beforeEach(()=>{
    //runs once before all tests in this block
    cy.fixture('AcctCreateData').then(function(data)
    {
        this.data=data
  
    })

})