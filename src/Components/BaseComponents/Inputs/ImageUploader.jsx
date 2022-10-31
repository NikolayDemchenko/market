import * as React from "react";
import Stack from '@mui/material/Stack';
import FileUpload from './FileUpload';
import UploadImageView from './UploadImageView';

export default function ImageUploader() {
  const [image, setImage] = React.useState(null);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <FileUpload { ...{fileType: 'image', setImage} }></FileUpload>
      <UploadImageView { ...{image} } ></UploadImageView>
    </Stack>
  );
}