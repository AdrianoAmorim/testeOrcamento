/* eslint-disable react/prop-types */
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocumentPDF from "./DocumentPDF";
import IconDownloadPdf from "../assets/img/icons/IconDownloadPdf";


const ButtonPdf = ({ dataCliente,dataProduto,dataPagamento }) => {

  return (
    <PDFDownloadLink document={<DocumentPDF dataCl={dataCliente} dataProd={dataProduto} dataPag={dataPagamento} />} fileName={`${dataCliente.nome}.pdf`}>
      {({ loading, }) =>
        loading ?
          <button className='p-3 text-[18px] font-semibold rounded bg-green-600 text-white shadow-md' >Aguarde..</button> :
          <button className='p-3 text-[18px] font-semibold rounded bg-green-600 text-white shadow-md' >
            <IconDownloadPdf width="32px" height="32px" />
          </button>
      }
    </PDFDownloadLink>
  )
}

export default ButtonPdf;