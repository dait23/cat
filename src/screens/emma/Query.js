///////////Query String



export const allTicketCount = `query($id: ID!){

_allTicketsMeta(filter: {
     customer:{
      id : $id
    }
  }) {
       count
    }

}`
