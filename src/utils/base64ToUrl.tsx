export const base64ToUrl = (base64String: string | undefined, mimeType: string = 'image/jpeg'): string | undefined => {
    if (!base64String) {
      console.error("Base64 string is undefined or empty");
      return undefined;
    }
  
    // Check if the base64 string already includes the MIME type prefix
    const base64Pattern = /^data:(.+);base64,(.+)$/;
    const matches = base64String.match(base64Pattern);
  
    let base64Data = base64String;
    if (matches) {
      base64Data = matches[2]; // Extract base64 data if MIME type is present
    } else {
      // Prepend the MIME type if not present
      base64Data = base64String; // Assuming base64String is just base64 data without the prefix
    }
  
    try {
      // Create a blob from the base64 data
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeType });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error converting base64 to URL:", error);
      return undefined;
    }
  };
  