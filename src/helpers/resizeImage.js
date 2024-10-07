import Pica from "pica";

// Function to resize and crop the image with adjustable quality
export async function resizeImage(file, targetWidth = 1920, targetRatio = 3 / 2, quality = 0.8) {
  const pica = Pica();
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);

  // Wait for the image to load
  await new Promise((resolve) => {
    img.onload = resolve;
  });

  const aspectRatio = img.width / img.height;

  let targetHeight;
  if (aspectRatio > targetRatio) {
    // Image is wider than target ratio, crop width
    targetHeight = targetWidth / targetRatio;
  } else {
    // Image is taller than target ratio, crop height
    targetHeight = targetWidth / aspectRatio;
  }

  // Create a canvas to resize the image
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  // Resize the image using pica
  await pica.resize(img, canvas, {
    unsharpAmount: 80,
    unsharpRadius: 0.6,
    unsharpThreshold: 2,
  });

  // Crop to the 3:2 ratio
  const croppedCanvas = document.createElement("canvas");
  croppedCanvas.width = targetWidth;
  croppedCanvas.height = targetWidth / targetRatio;

  const ctx = croppedCanvas.getContext("2d");
  ctx.drawImage(
    canvas,
    0,
    (targetHeight - croppedCanvas.height) / 2, // Center the cropped area
    targetWidth,
    croppedCanvas.height,
    0,
    0,
    targetWidth,
    croppedCanvas.height
  );

  // Convert the canvas to a blob with specified quality
  return new Promise((resolve) => {
    croppedCanvas.toBlob(
      (blob) => resolve(blob),
      "image/jpeg",  // You can change this to "image/png" or other formats
      quality        // Compression level (between 0 and 1)
    );
  });
}