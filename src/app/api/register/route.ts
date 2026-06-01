import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define TypeScript interfaces for our lead model
interface Lead {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  experience: string;
  registeredAt: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, city, experience } = body;

    // Server-side robust validation
    if (!name || !email || !whatsapp || !city) {
      return NextResponse.json(
        { message: "Por favor, completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    // Quick regex email validator
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "El correo electrónico proporcionado no es válido." },
        { status: 400 }
      );
    }

    // Build the new lead model
    const newLead: Lead = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      city: city.trim(),
      experience,
      registeredAt: new Date().toISOString(),
    };

    // Store in a local JSON database in the workspace
    // Create a data directory inside src/ if it doesn't exist
    const dataDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, "leads.json");
    let leads: Lead[] = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      leads = JSON.parse(fileData || "[]");
    }

    leads.push(newLead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");

    // Output success response
    return NextResponse.json(
      {
        message: "Registro procesado con éxito.",
        leadId: newLead.id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in registration API:", error);
    return NextResponse.json(
      { message: "Error interno del servidor. Inténtalo de nuevo más tarde." },
      { status: 500 }
    );
  }
}
