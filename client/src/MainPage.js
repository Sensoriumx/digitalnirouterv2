import React from 'react';
import { useNavigate } from 'react-router-dom';



const MainPage = () => {

  const navigate = useNavigate();

  const createDocumentTemplate = () => {

    navigate('/template-builder');
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Creating a new document template...' }) // Replace with actual data later
    };

    fetch('http://localhost:8000/api/templates', requestOptions)
      .then(response => response.json())
      .then(data => alert(data.message)); // Display the server's response in an alert
  }

  const getInProcessFiles = () => {
    fetch('http://localhost:8000/api/inprocess-files')
      .then(response => response.json())
      .then(data => {
        console.log('InProcess Files:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const archiveDocument = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Archiving a completed document...' }) // Replace with actual data later
    };

    fetch('http://localhost:8000/api/archive', requestOptions)
      .then(response => response.json())
      .then(data => alert(data.message)); // Display the server's response in an alert
  };

  return (
    <div>
      <button onClick={createDocumentTemplate}>Create Document Template</button>
      <button onClick={getInProcessFiles}>View In-Process Documents</button>
      <button onClick={archiveDocument}>Archive Completed Document</button>
    </div>
  );
}

export default MainPage;
