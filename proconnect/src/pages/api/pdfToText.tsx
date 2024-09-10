import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import PDFParser from 'pdf2json';
import { NextApiRequest } from 'next';

export default async function POST(req: NextApiRequest) {
    const { filepond } = await req.body.json();
    let fileName = '';
    let parsedText = '';

    if (filepond && filepond.length > 0) {
        const uploadedFile = filepond[1];
        console.log('Uploaded file:', uploadedFile);

        if (uploadedFile instanceof File) {
            fileName = uuidv4();

            const tempFilePath = `/tmp/${fileName}.pdf`;

            const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());

            await fs.writeFile(tempFilePath, fileBuffer);

            const pdfParser = new (PDFParser as any)(null, 1);

            pdfParser.on('pdfParser_dataError', (errData: any) =>
                console.log(errData.parserError)
            );
            pdfParser.on('pdfParser_dataReady', () => {
                console.log((pdfParser as any).getRawTextContent());
                parsedText = (pdfParser as any).getRawTextContent();
            });

            pdfParser.loadPDF(tempFilePath);
        } else {
            console.log('Uploaded file is not in the expected format.');
        }
    } else {
        console.log('No files found.');
    }

    const response = new NextResponse(parsedText);
    response.headers.set('FileName', fileName);
    return response;
}
