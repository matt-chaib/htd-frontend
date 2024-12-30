export function Separator() {
    const hrStyle = {
      border: '0', // No border
      borderTop: '1px solid #ccc', // Thin, light gray line
      margin: '20px 40px', // Space around the line
    };
  
    return (
      <hr style={hrStyle} />
    );
  }