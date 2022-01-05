export const initialState ={
    basket:[],
    user:null,
};
// making selector
export const getBasketTotal=basket=>
    basket?.reduce((amount,item)=>item.price+amount,0);

const reducer=(state,action)=>{
// console.log(action);
// console.log(state);

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
           /* return {
                ...state,
                basket:state.basket.filter(item=>item.id!==action.id),
            };
            // this will remove all the similar items together , because we are matching with id so all the similar element will have same ids so that why all the elements will be deleted .
            for caution we use index , we delete the itmes by index
            */
           const index= state.basket.findIndex(
               (basketItem)=>basketItem.id==action.id
              );

              let newBasket= [...state.basket];
              if(index>=0)
              {
                    newBasket.splice(index,1);
              }
              else
              {
                    console.warn(`can't remove product (id:${action.id}) as its not in the basket`);
              }
              return {
                  ...state,
                    basket:newBasket,
              }

        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            };
            
        default:
            return state;
    }
}
export default reducer;
