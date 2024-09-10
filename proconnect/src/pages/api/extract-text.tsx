import pdfParse from 'pdf-parse';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing to handle file upload
  },
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing file' });
    }

    const file = files.pdfFile;
    const dataBuffer = fs.readFileSync(file.filepath);

    try {
      const data = await pdfParse(dataBuffer);
      res.status(200).json({ text: data.text });
    } catch (error) {
      res.status(500).json({ error: 'Error extracting text from PDF' });
    }
  });
};

export default handler;
