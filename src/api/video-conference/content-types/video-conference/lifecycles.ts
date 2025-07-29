import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

// Make sure to export a plain object (NOT default export)
const lifecycles = {
    async afterCreate(event: any) {
        const { result } = event;

        try {
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: "work@rankinmeta.com",
                subject: "New Video Conference Request Received",
                html: `
          <h2>Video Conference Appointment Request</h2>
          <p><strong>Name:</strong> ${result.first_name + " " + result.last_name}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Phone:</strong> ${result.phone}</p>
          <p><strong>Company:</strong> ${result.company}</p>
          <p><strong>Service:</strong> ${result.service}</p>
          <p><strong>Date:</strong> ${result.date}</p>
          <p><strong>Time:</strong> ${result.time}</p>
        `,
            });

            console.log("✅ Email sent successfully to prajil@rankinmeta.com");
        } catch (err) {
            console.error("❌ Error sending email via Resend:", err);
        }
    },
};

export default lifecycles;
