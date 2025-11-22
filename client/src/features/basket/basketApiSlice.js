import apiSlice from '../../app/apiSlice';

const basketlApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getBasket: build.query({
            query: () => ({
                url: '/api/basket',
                method:"GET"
                }),
                 providesTags:["basket"]
        }),
        getJewelOnBasket:build.query({
            query:(id)=>({
              url: `/api/basket/${id}`,
                method:"GET"
            }),
        }),
        addToBasket:build.mutation({
            query:(id)=>({
                url: `/api/basket/${id}`,
                method:"POST",
            }),
            invalidatesTags:["basket"]
        }),
        deleteJewelOnBasket:build.mutation({
            query:(id)=>({
                url: `/api/basket/${id}`,
                method:"PUT",
               
            }),
            invalidatesTags:["basket"]
        }),
        deleteBasket:build.mutation({
            query:(id)=>({
               url: `/api/basket/deleteFromBasket/${id}`,
                method:"PUT",
                body:id
            }),
            invalidatesTags:["basket"]
        })

        
        

    }),
    
});

export const { useGetBasketQuery,useGetJewelOnBasketQuery,useAddToBasketMutation,useDeleteJewelOnBasketMutation,useDeleteBasketMutation } = basketlApiSlice;
