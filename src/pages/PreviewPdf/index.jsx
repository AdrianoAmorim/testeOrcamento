
import { PDFViewer } from '@react-pdf/renderer';

import DocumentPDF from "../../components/DocumentPDF";
const PreviewPdf = () => {

    return (

        <div className='w-full h-full'>
            <PDFViewer style={{ height: "100%" }} width="100%" showToolbar>
                <DocumentPDF />
            </PDFViewer>
        </div>
    )

}
export default PreviewPdf;