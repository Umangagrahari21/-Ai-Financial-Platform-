// import { NextResponse } from "next/server";
// import { scanReceipt } from "@/actions/transaction";

// export const runtime = "nodejs"; // important for Buffer

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("receipt");

//     if (!file) {
//       return NextResponse.json(
//         { success: false, message: "No file received" },
//         { status: 400 }
//       );
//     }

//     const result = await scanReceipt(file);

//     return NextResponse.json({ success: true, ...result });
//   } catch (err) {
//     console.error("❌ Error in /api/scan-receipt:", err);
//     return NextResponse.json(
//       { success: false, message: err.message || "Failed to scan receipt" },
//       { status: 500 }
//     );
//   }
// }

// import { GoogleGenerativeAI } from "@google/generative-ai";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("receipt");

//     if (!file) {
//       return Response.json({ error: "No file provided" }, { status: 400 });
//     }

//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const arrayBuffer = await file.arrayBuffer();
//     const base64String = Buffer.from(arrayBuffer).toString("base64");

//     const prompt = `
//       Analyze this receipt image and extract:
//       - Total amount (number)
//       - Date (ISO)
//       - Merchant name
//       - Description (summary)
//       - Suggested category (groceries, food, travel, etc.)
//       Respond only with JSON in this format:
//       {
//         "amount": number,
//         "date": "YYYY-MM-DD",
//         "description": "string",
//         "merchantName": "string",
//         "category": "string"
//       }
//     `;

//     const result = await model.generateContent([
//       prompt,
//       { inlineData: { data: base64String, mimeType: file.type } },
//     ]);

//     const text = result.response.text().replace(/```(?:json)?\n?/g, "").trim();
//     const parsed = JSON.parse(text);

//     return Response.json(parsed);
//   } catch (error) {
//     console.error("❌ Error in /api/scan-receipt:", error);
//     return Response.json({ error: "Receipt scan failed" }, { status: 500 });
//   }
// }

