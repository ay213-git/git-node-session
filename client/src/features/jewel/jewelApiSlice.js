
import apiSlice from '../../app/apiSlice';

const jewelApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllJewels: build.query({
            query: () => ({
                url: '/api/jewel',
                method:"GET"
                }),
                 providesTags:["products"]
        }),
        getJewel:build.query({
            query:(id)=>({
              url: `/api/jewel/${id}`,
                method:"GET"
            })
        }),
        addNewJewel:build.mutation({
            query:(data)=>({
                url: '/api/jewel',
                method:"POST",
                body:data
            }),
            invalidatesTags:["products"]
        }),
        deleteJewel:build.mutation({
            query:(id)=>({
                url: `/api/jewel/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["products"]
        }),
        updateJewel:build.mutation({
            query:(data)=>({
               url: `/api/jewel/${data._id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["products"]
        })

        
        

    }),
    
});

export const { useGetAllJewelsQuery,useGetJewelQuery,useAddNewJewelMutation,useDeleteJewelMutation,useUpdateJewelMutation } = jewelApiSlice;
