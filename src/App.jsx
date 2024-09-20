import { useState, useRef } from "react";
import GeneralInfo from "./generalInfo";
import Education from "./education";
import Experience from "./experience";
import './styles/App.css';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

  const [isEditing, setIsEditing] = useState(true);
  const pdfRef = useRef(null);  // Create a ref for the element you want to capture

  const handleEdit = () => { setIsEditing(true); };
  const handleSubmit = () => { setIsEditing(false); };
  
  const handleSaveAsPDF = () => {
    const input = pdfRef.current;  // Get the element to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('cv.pdf');
    });
  };

  return (
    <div className="cv-App" ref={pdfRef}> {/* Attach the ref here */}
      <h1>CV-Builder</h1>
      <GeneralInfo isEditing={isEditing} />
      <Education isEditing={isEditing} />
      <Experience isEditing={isEditing} />

      <div className="cv-Controls">
        {isEditing ? <button onClick={handleSubmit}>Submit</button> : (<button onClick={handleEdit}>Edit</button>)}
        <button onClick={handleSaveAsPDF}>Save as PDF</button>
      </div>
    </div>
  );
}

export default App;
