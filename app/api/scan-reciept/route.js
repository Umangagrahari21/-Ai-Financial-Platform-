// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file");

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     const arrayBuffer = await file.arrayBuffer();
//     const base64String = Buffer.from(arrayBuffer).toString("base64");

//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const prompt = `
//       Analyze this receipt image and extract the following information in JSON format:
//       {
//         "amount": number,
//         "date": "ISO date string",
//         "description": "string",
//         "merchantName": "string",
//         "category": "string"
//       }
//       If it's not a receipt, return an empty object.
//     `;

//     const result = await model.generateContent([
//       {
//         inlineData: {
//           data: base64String,
//           mimeType: file.type || "image/jpeg",
//         },
//       },
//       prompt,
//     ]);

//     const text = result.response.text();
//     const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

//     const data = JSON.parse(cleanedText);

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     console.error("❌ Error scanning receipt:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
