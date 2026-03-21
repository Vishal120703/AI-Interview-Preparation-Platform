import transporter from "../config/mailer.js";

const sendOtpEmail = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: `"Auth App" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your OTP Code",
            html: `
                <h2>Email Verification</h2>
                <p>Your OTP is:</p>
                <h1>${otp}</h1>
                <p>This OTP will expire in 5 minutes.</p>
            `,
        });

        console.log("OTP email sent");
    } catch (error) {
        console.log("Email error:", error);
        throw error;
    }
};

export default sendOtpEmail;