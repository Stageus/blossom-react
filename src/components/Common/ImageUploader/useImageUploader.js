import { useState, useRef, useEffect } from "react";

// ===== custom hook =====
const useImageUploader = (onSelectImage) => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    onSelectImage(preview);
  }, [preview]);

  const handleButtonClick = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      window.location.reload();
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    }
  };

  return {
    fileRef,
    handleButtonClick,
    handleFileChange,
  };
};

export default useImageUploader;
