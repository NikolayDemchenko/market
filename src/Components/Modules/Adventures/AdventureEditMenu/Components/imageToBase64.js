export const toBase64 = (event, callback) => {
  const imgName = event.target.files[0].name;
  const imgPathElements = event.target.files[0].name.split('.');
  const imgExtension = imgPathElements.pop();

  const reader = new FileReader();

  reader.readAsDataURL(event.target.files[0]);
  reader.onloadend = function() {
    const imgBase64 = reader.result.split(',')[1];

    console.log('imgBase64 :>> ', imgBase64);
    console.log('imgName :>> ', imgName);
    console.log('imgExtension :>> ', imgExtension);

    callback({
      imgBase64,
      imgName,
      imgExtension
    });
  }
}