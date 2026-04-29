export const CONTACT_EMAIL = "azuo.global@gmail.com";

/**
 * Sends a contact form submission using EmailJS REST API
 * @param {Object} data - The form data
 * @returns {Promise<Object>} - The response from the API
 */
export async function sendContactEmail(data) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return {
        success: false,
        code: "EMAIL_NOT_CONFIGURED",
        message: "Email service is not configured. Please email AZUO directly.",
      };
    }

    const emailjsData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: CONTACT_EMAIL,
      },
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailjsData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorText = await response.text();
      return { success: false, message: errorText };
    }
  } catch (error) {
    console.error("EmailJS Helper Error:", error);
    throw error;
  }
}
