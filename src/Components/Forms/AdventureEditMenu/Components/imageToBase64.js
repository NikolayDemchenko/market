export const toBase64 = (event) => {
    const imgPathElements = event.target.value.split('.');
    const imgExtension = imgPathElements.pop();

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = function() {
      console.log('RESULT', reader.result.split(',')[1]);
      // console.log('dsadsa');
      // console.log('imgExtension :>> ', imgExtension);  
      // console.log('blobObj :>> ', URL.createObjectURL(event.target.files[0]));            
      // Корректный формат строки Base64:
      // const imgBase64Res = reader.result;
      // const row = '' + imgBase64Res;
      // // const imgBase64 = row.replace(/^data:image\/[a-z]+;base64,/, "");
      // const arr = row.split(',');
      // console.log(row.substr(22));
      // const rightBase64 = arr.pop();
      // console.log('base64data :>> ', rightBase64);
    }
}