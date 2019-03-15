const nodemailer = require("nodemailer");
const ig = require("instagram-node").instagram();
  ig.use({
    client_id: process.env.IG_CLIENT_ID,
    client_secret: process.env.IG_CLIENT_SECRET
  });

const redirect_uri = "http://localhost:3000/auth/handleauth";

module.exports = {
  newOrder: (req, res) => {
    console.log(req.body, "newOrder req.body");
    const { fullname, email, inquiry, date, location, details } = req.body;

    const database = req.app.get("db");
    database
      .order_inquiry([fullname, email, inquiry, date, location, details])
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
  },
  authorize_user = function(req, res) {
   res.redirect(
     ig.get_authorization_url(redirect_uri, {
       scope: ["public_content"],
       state: "a state"
     })
   );
 },
  handleauth = function(req, res) {
   ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
     if (err) {
       console.log(err.body);
       res.send(err, "Didn't work");
     } else {
       access_token = result.access_token;
       console.log("Yay! Access token is " + result.access_token);
       res.send("You made it!!");
     }
   });
 },

};
