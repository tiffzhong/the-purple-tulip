const nodemailer = require("nodemailer");



const redirect_uri = "http://localhost:3000/auth/handleauth";

module.exports = {
  newOrder: (req, res) => {
    console.log(req.body, "newOrder req.body");
    console.log(req.params, "newOrder req.params");
    const { id, fullname, email, inquiry, date, location, details } = req.body;

    const database = req.app.get("db");
    database
      .order_inquiry([id, fullname, email, inquiry, date, location, details])
      .then(() => res.status(200).send());

    let newFullName = fullname,
      newEmail = email,
      newInquiry = inquiry,
      newDate = date,
      newLocation = location,
      newDetails = details,
      content = `
      <header style="background: #A894C2; text-align: center;  height: 30px; font-family:arial;"><h1>The Purple Tulip: New Inquiry</h1></header>
      <div style="font-family:arial; "><p style= "font-size: 18px;">You have a new inquiry: </p>
      <ul style="list-style-type:none; font-size: 16px;">
        <li>Name: ${newFullName}</li><br />
        <li>Email: ${newEmail}</li><br />
        <li>Inquiry: ${newInquiry}</li><br />
        <li>Event Date: ${newDate}</li><br />
        <li>Event Location: ${newLocation}</li><br />
        <li>Other Details: ${newDetails}</li>
      </ul>
      <div style="background: #98BEAB; height: 20px;">
      <p style="color: black; text-align: center">TPT</p></div>
      </div>  
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: `"The Purple Tulip" <${process.env.EMAIL}>`,
      to: "tiffzhong@gmail.com",
      subject: `The Purple Tulip: New Inquiry`,
      html: content
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log("Send email error", error);
      } else {
        return console.log("Email sent " + info.response);
      }
    });
  }

  
};