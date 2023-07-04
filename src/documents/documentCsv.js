import { parse } from 'csv-parse';
import fs from 'node:fs';

// Coletando os dados do banco, utilizando o CSV

export function importarArquivoCsv(req, res) {
  const csvImport = new URL('src/documents/documentCsv.js');

  const csv = fs.createReadStream(csvImport);

  const csvParse = parse({
    delimiter: ',',
    skipEmptyLines: true,
    fromLine: 2
  });

  async function run() {
    const linesParse = csv.pipe(csvParse);

    for await (const line of linesParse) {
      const [title, description] = line;

      await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        })
      })
    }
  }

  run()

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
