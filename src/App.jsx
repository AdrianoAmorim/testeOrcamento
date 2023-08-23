

import { PDFDownloadLink, PDFViewer, pdf } from '@react-pdf/renderer';
import DocumentPDF from './components/DocumentPDF';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { WhatsappShareButton } from 'react-share';


function App() {

  return (
    <div className="flex flex-col gap-2 m-2">
      <span className="text-[22px]">
        clique no botao para gerar pdf
      </span>

      <PDFDownloadLink document={<DocumentPDF />} fileName="Orçamento-Facil.pdf">
        {({ loading,  }) =>
          loading ? <button className='bg-blue-800 p-3' >Aguarde...</button>: <button className='bg-blue-800 p-3' >Download</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

export default App
