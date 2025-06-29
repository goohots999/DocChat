import pdf from "pdf-parse";
// import { Buffer } from "buffer";

async function extractTextFromBase64(base64Str) {
  const pdfBuffer = Buffer.from(base64Str, "base64"); // Convert Base64 to Buffer
  const data = await pdf(pdfBuffer); // Extract text using pdf-parse
//   console.log(data)
  return data.text;
}


export default extractTextFromBase64;