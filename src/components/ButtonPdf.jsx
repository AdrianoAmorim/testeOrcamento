import { PDFDownloadLink } from "@react-pdf/renderer";
import DocumentPDF from "./DocumentPDF";

const ButtonPdf = ()=>{
    return(
        <PDFDownloadLink document={<DocumentPDF />} fileName="Orçamento-Facil.pdf">
        {({ loading,  }) =>
          loading ? <button className='bg-blue-800 p-3' >Aguarde...</button>: <button className='bg-blue-800 p-3' >Download</button>
        }
      </PDFDownloadLink>
    )
}

export default ButtonPdf;