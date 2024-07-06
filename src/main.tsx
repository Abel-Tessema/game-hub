import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from "./theme.ts";
import './index.css'
import {Analytics} from "@vercel/analytics/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <RouterProvider router={router}/>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </ChakraProvider>
        <Analytics/>
    </React.StrictMode>,
)
