import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default function FileUpload() {
  return (
    <FilePond
      server={{
        process: '../api/pdfToText',
        fetch: null,
        revert: null,
      }}
    />
  );
}
