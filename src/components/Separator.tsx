export function Separator() {
    const hrStyle = {
      border: '0', // No border
      borderTop: '1px solid #ccc', // Thin, light gray line
      margin: '20px 0', // Space around the line
    };
  
    return (
      <hr style={hrStyle} />
    );
  }