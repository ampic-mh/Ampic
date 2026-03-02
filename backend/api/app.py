import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime

from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# En développement on autorise toutes les origines, en prod mettre le vrai domaine dans ALLOWED_ORIGINS
allowed_origins = os.getenv("ALLOWED_ORIGINS", "*")
origins = allowed_origins.split(",") if allowed_origins != "*" else "*"
CORS(app, origins=origins)

RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "safirbrahim91@gmail.com")
GMAIL_USER = os.getenv("GMAIL_USER")
GMAIL_APP_PASSWORD = os.getenv("GMAIL_APP_PASSWORD")


def build_html_email(full_name: str, phone: str, email: str, subject: str, message: str) -> str:
    subject_labels = {
        "devis": "Demande de Devis",
        "info": "Demande d'Information",
        "autre": "Autre",
    }
    subject_display = subject_labels.get(subject, subject)
    now = datetime.now()
    date_str = now.strftime("%d/%m/%Y")
    time_str = now.strftime("%H:%M")

    return f"""
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Nouvelle demande AMPIC</title>
        <style>
            body {{ font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px 0; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,.1); overflow: hidden; }}
            .header {{ background-color: #1a1a1a; color: #fff; padding: 30px; text-align: center; }}
            .header h1 {{ margin: 0; font-size: 24px; font-weight: 600; }}
            .content {{ padding: 30px; }}
            .section {{ margin-bottom: 30px; }}
            .section h2 {{ color: #1a1a1a; font-size: 18px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; margin: 0 0 15px; }}
            .info-row {{ display: flex; padding: 10px 0; border-bottom: 1px solid #f3f4f6; }}
            .info-row:last-child {{ border-bottom: none; }}
            .label {{ font-weight: 600; color: #6b7280; width: 140px; flex-shrink: 0; }}
            .value {{ color: #111827; flex: 1; }}
            .value a {{ color: #2563eb; text-decoration: none; }}
            .message-box {{ background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; margin-top: 10px; white-space: pre-wrap; color: #374151; }}
            .footer {{ background: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }}
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
                    <div class="info-row">
                        <div class="label">Nom complet :</div>
                        <div class="value">{full_name}</div>
                    </div>
                    <div class="info-row">
                        <div class="label">Téléphone :</div>
                        <div class="value"><a href="tel:{phone}">{phone}</a></div>
                    </div>
                    <div class="info-row">
                        <div class="label">Email :</div>
                        <div class="value"><a href="mailto:{email}">{email}</a></div>
                    </div>
                    <div class="info-row">
                        <div class="label">Objet :</div>
                        <div class="value"><strong>{subject_display}</strong></div>
                    </div>
                </div>
                <div class="section">
                    <h2>Message</h2>
                    <div class="message-box">{message}</div>
                </div>
            </div>
            <div class="footer">
                Reçu via le formulaire de contact AMPIC<br>
                {date_str} à {time_str}
            </div>
        </div>
    </body>
    </html>
    """


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True)

    if not data:
        return jsonify({"error": "Données invalides."}), 400

    full_name = (data.get("name") or "").strip()
    phone = (data.get("phone") or "").strip()
    email = (data.get("email") or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()

    if not all([full_name, phone, email, subject, message]):
        return jsonify({"error": "Tous les champs obligatoires doivent être remplis."}), 400

    if not GMAIL_USER or not GMAIL_APP_PASSWORD:
        app.logger.error("Variables d'environnement Gmail manquantes.")
        return jsonify({"error": "Erreur de configuration du serveur."}), 500

    msg = MIMEMultipart("alternative")
    msg["From"] = f"Formulaire AMPIC <{GMAIL_USER}>"
    msg["To"] = RECIPIENT_EMAIL
    msg["Subject"] = f"Nouvelle demande: {subject} — {full_name}"
    msg["Reply-To"] = email
    msg.attach(MIMEText(build_html_email(full_name, phone, email, subject, message), "html", "utf-8"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(GMAIL_USER, GMAIL_APP_PASSWORD)
            server.sendmail(GMAIL_USER, RECIPIENT_EMAIL, msg.as_string())
    except Exception as e:
        app.logger.error("Erreur envoi email: %s", e)
        return jsonify({"error": "Erreur lors de l'envoi. Veuillez réessayer."}), 500

    return jsonify({"success": True, "message": "Votre demande a été envoyée avec succès !"}), 200


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


if __name__ == "__main__":
    app.run(debug=os.getenv("FLASK_DEBUG", "false").lower() == "true", port=5000)
