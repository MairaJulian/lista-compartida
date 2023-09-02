import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiKey } from '../api/Authentication'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://identitytoolkit.googleapis.com/v1`}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (auth) => ({
                url: `/accounts:signUp?key=${apiKey}`,
                method: `POST`,
                body: auth
            })
        })
    })
})

export const { useSignUpMutation } = authApi