// Use CommonJS syntax as it's standard for Vercel Node.js functions
const nodemailer = require("nodemailer");

/**
 * A simple email validation utility.
 * @param {string} email The email to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
const validateEmail = (email) => {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Main handler for the Vercel serverless function.
 * This function processes a contact form submission matching your specific form fields.
 * @param {import('@vercel/node').VercelRequest} request The incoming request object.
 * @param {import('@vercel/node').VercelResponse} response The outgoing response object.
 */
module.exports = async (request, response) => {
  // 1. Check for required environment variables on the server.
  if (
    !process.env.GMAIL_USER ||
    !process.env.GMAIL_APP_PASSWORD ||
    !process.env.RECIPIENT_EMAIL
  ) {
    console.error("Missing required environment variables for Nodemailer.");
    return response.status(500).json({ error: "Erreur de configuration du serveur." });
  }

  // 2. Only allow POST requests for this endpoint.
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Méthode non autorisée" });
  }

  // 3. Extract data based on your specific contact form fields
  // Based on your image: Nom complet, Téléphone, Objet de la demande, Votre message
  const {
    fullName,    // Corresponds to "Nom complet *"
    phone,       // Corresponds to "Téléphone *"
    subject,     // Corresponds to "Objet de la demande *"
    message,     // Corresponds to "Votre message *"
    email        // Optional: Can be added if you have a hidden field or add it later
  } = request.body;

  // 4. Perform robust validation.
  if (!fullName || !phone || !subject || !message) {
    return response
      .status(400)
      .json({ error: "Tous les champs obligatoires (Nom, Téléphone, Objet, Message) doivent être remplis." });
  }

  // Optional: Validate email if provided
  if (email && !validateEmail(email)) {
    return response
      .status(400)
      .json({ error: "Veuillez fournir une adresse e-mail valide." });
  }

  // 5. Create a well-designed HTML email body in French.
  const htmlBody = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvelle demande de contact</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f5f5f5;
                margin: 0;
                padding: 20px 0;
            }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
            .header { background-color: #1a1a1a; color: white; padding: 30px; text-align: center; } /* Dark theme for AMPIC */
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 30px; }
            .section { margin-bottom: 30px; }
            .section h2 { color: #1a1a1a; font-size: 18px; font-weight: 600; margin: 0 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; }
            .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid #f3f4f6; }
            .info-row:last-child { border-bottom: none; }
            .label { font-weight: 600; color: #6b7280; width: 140px; flex-shrink: 0; }
            .value { color: #111827; flex: 1; }
            .value a { color: #2563eb; text-decoration: none; }
            .value a:hover { text-decoration: underline; }
            .message-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin-top: 10px; }
            .message-text { margin: 0; color: #374151; white-space: pre-wrap; }
            .footer { background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Nouvelle Demande AMPIC</h1>
            </div>
            
            <div class="content">
                <div class="section">
                    <h2>Détails du Contact</h2>
                    <div class="info-row"><div class="label">Nom complet:</div><div class="value">${fullName}</div></div>
                    <div class="info-row"><div class="label">Téléphone:</div><div class="value"><a href="tel:${phone}">${phone}</a></div></div>
                    ${ email ? `<div class="info-row"><div class="label">E-mail:</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>` : '' }
                    <div class="info-row"><div class="label">Objet:</div><div class="value"><strong>${subject}</strong></div></div>
                </div>
                
                <div class="section">
                    <h2>Message</h2>
                    <div class="message-box">
                        <p class="message-text">${message}</p>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                Reçu via le formulaire de contact AMPIC<br>
                ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}
            </div>
        </div>
    </body>
    </html>
  `;

  // 6. Configure the Nodemailer transporter.
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // 7. Define the email options.
  const mailOptions = {
    from: `"Formulaire Web" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email || undefined, // Only reply if email was provided
    subject: `Nouvelle demande: ${subject} - ${fullName}`,
    html: htmlBody,
  };

  // 8. Send Email and return response.
  try {
    await transporter.sendMail(mailOptions);
    return response.status(200).json({
      success: true,
      message: "Votre demande a été envoyée avec succès ! Nous vous répondrons dans les plus brefs délais.",
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    return response.status(500).json({
      error: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer plus tard.",
    });
  }
};