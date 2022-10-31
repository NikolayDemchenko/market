import * as React from "react";
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function UploadButtons({ fileType, setImage }) {
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log('URL.createObjectURL(event.target.files[0] :>> ', URL.createObjectURL(event.target.files[0]));
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <IconButton 
      color="primary" 
      aria-label="upload picture" 
      component="label" 
      onChange={onImageChange}
    >
      <input hidden accept={`${fileType}/*`} type="file" />
      <AddPhotoAlternateIcon sx={{ fontSize: 220 }} />
    </IconButton>
  );
}