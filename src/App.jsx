

import { PDFViewer, pdf } from '@react-pdf/renderer';
import DocumentPDF from './components/DocumentPDF';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import { WhatsappShareButton } from 'react-share';


function App() {
  const [pdfImg, setPdfImg] = useState(null);
  const containerPDF = useRef(null);

  const convertToImg = () => {
    html2canvas(containerPDF.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png'); // Altere para 'image/png' se preferir PNG
      setPdfImg(imgData);
    });
  }

  const blobToShared = async () => {
    const blobPDF = await pdf(<DocumentPDF />).toBlob();
    const blobUrl = window.URL.createObjectURL(blobPDF).replace('blob:', '');
    console.log(blobUrl)
    window.open(`https://api.whatsapp.com/send?text=Confira&media=${blobUrl}`);
  

  }
  return (
    <div className="flex flex-col gap-2 m-2">
      <span className="text-[22px]">
        clique no botao para gerar pdf
      </span>

      <button className='bg-blue-600 p-2' onClick={blobToShared}>Gerar Imagem PDF</button>


      <div ref={containerPDF}>
        <PDFViewer>
          <DocumentPDF />
        </PDFViewer>
      </div>

    </div>
  )
}

export default App
