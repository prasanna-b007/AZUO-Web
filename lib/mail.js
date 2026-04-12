export const CONTACT_EMAIL = "azuo.global@gmail.com";

/**
 * Sends a contact form submission using EmailJS REST API
 * @param {Object} data - The form data
 * @returns {Promise<Object>} - The response from the API
 */
export async function sendContactEmail(data) {
  try {
  
    const emailjsData = {
      service_id: "YOUR_SERVICE_ID",   // Replace with your Service ID
      template_id: "YOUR_TEMPLATE_ID", // Replace with your Template ID
      user_id: "YOUR_PUBLIC_KEY",      // Replace with your Public Key
      template_params: {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: CONTACT_EMAIL,       // You can use this in your EmailJS template as {{to_email}}
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
