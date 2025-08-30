import nodemailer from "nodemailer";

let transporter;

export const getTransporter = async () => {
  if (transporter) return transporter;
  const {SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS} = process.env;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,  // true for 465, false for other ports
    auth: SMTP_USER ? {user:SMTP_USER,pass:SMTP_PASS}: undefined
  });
  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP Error:", error);
    } else {
      console.log("✅ SMTP Connected:", success);
    }
  });
  
  return transporter;
};

export const sendMail = async({to,subject,html})=>{
    const t = await getTransporter(); // <-- here you get transporter object
    const info = await t.sendMail({ // <-- this is Nodemailer's sendMail, not your function
        from: process.env.FROM_EMAIL || 'no-reply@authflow.test',
        to,
        subject,
        html
    })
    return info;
}


