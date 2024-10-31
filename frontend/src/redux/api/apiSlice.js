import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
import { BASR_URL } from '../constants'


const baseQuery = fetchBaseQuery({baseUrl:BASR_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['Product', 'Order', 'User', "Category"],
    endpoints:()=>({

    }),
})