import React from 'react';

function MainContent() {
    return (
        <main style={{ padding: '20px', backgroundColor: '#f9f9f9', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: '#333' }}>Content</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{props.content}</p>
    </main>
    );
}

export default MainContent;
