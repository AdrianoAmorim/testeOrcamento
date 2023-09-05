import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NewOrcamento from "../pages/NewOrcamento";
import PreviewPdf from "../pages/PreviewPdf";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <p>pagina de error</p>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/new-report',
                element: <NewOrcamento />
            },
        ]
    },
    {
        path: '/preview',
        element: <PreviewPdf/>,
        errorElement: <p>pagina de error</p>,
    }
])