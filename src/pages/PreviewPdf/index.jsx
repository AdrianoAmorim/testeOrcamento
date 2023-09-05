
import { PDFViewer } from '@react-pdf/renderer';

import DocumentPDF from "../../components/DocumentPDF";
const PreviewPdf = () => {

    return (

        <div className='w-full h-full'>
            <PDFViewer showToolbar width={"100%"} height={1000}>
                <DocumentPDF />
            </PDFViewer>
        </div>
    )

}
export default PreviewPdf;