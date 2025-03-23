
// Function to generate a custom og-image on the client side
export const generateOgImage = () => {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return;
  
  // Set background
  ctx.fillStyle = '#0f172a'; // Dark background to match theme
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Mario Savi', canvas.width / 2, canvas.height / 2 - 40);
  
  ctx.fillStyle = '#3b82f6'; // Blue accent
  ctx.font = '48px Arial';
  ctx.fillText('Product Leader', canvas.width / 2, canvas.height / 2 + 40);
  
  ctx.fillStyle = '#ffffff';
  ctx.font = '36px Arial';
  ctx.fillText('Passionate about product', canvas.width / 2, canvas.height / 2 + 120);
  
  // Convert canvas to blob and create a URL
  return new Promise<string>((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        resolve(url);
      }
    }, 'image/png');
  });
};
