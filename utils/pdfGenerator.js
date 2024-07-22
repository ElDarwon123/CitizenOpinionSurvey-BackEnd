const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');

const generateCertificatePDF = async (certificate) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const filePath = path.join(__dirname, '..', 'certificados', `${certificate.identificator}.pdf`);

        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

        doc.fontSize(25).text('Certificado de Participación', { align: 'center' });
        doc.moveDown();
        doc.fontSize(16).text(`Participación ID: ${certificate.participationId}`);
        doc.text(`Fecha de Emisión: ${certificate.emitionDate}`);
        doc.fontSize(16).text(`Identificador: ${certificate.identificator}`);

        doc.end();

        writeStream.on('finish', () => {
            resolve(filePath);
        });

        writeStream.on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = { generateCertificatePDF };
