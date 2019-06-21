const nodemailer = require("nodemailer");
const uniqid = require("uniqid");

module.exports = {
  newOrder: (req, res) => {
    const {
      contactdate,
      fullname,
      email,
      inquiry,
      date,
      location,
      details,
      checked
    } = req.body;
    const database = req.app.get("db");
    let id = uniqid();

    database
      .order_inquiry([
        contactdate,
        id,
        fullname,
        email,
        inquiry,
        date,
        location,
        details,
        checked
      ])
      .then(response => {
        console.log(response);
        res.status(200).send();
      })
      .catch(e => {
        console.log("error in newOrder", e);
      });

    let newContactDate = contactdate,
      newFullName = fullname,
      inquiry_id = id,
      newEmail = email,
      newInquiry = inquiry,
      newDate = date,
      newLocation = location,
      newDetails = details,
      content = `
      <header style="background: #A894C2; text-align: center;  height: 45px; font-family:arial; display: flex; justify-content: center; align-items: center;">
<h1 style= " font-size: 20px;">The Purple Tulip: New Inquiry</h1></header>
      <div style="font-family:arial; "><p style= "font-size: 18px;">You have a new inquiry: </p>
    <ul style="list-style-type:none; font-size: 16px; line-height: 30px;">
        <li>Date: ${newContactDate}</li>
        <li>Inquiry ID: ${inquiry_id}</li> 
        <li>Name: ${newFullName}</li>
        <li>Email: ${newEmail}</li>
        <li>Inquiry: ${newInquiry}</li>
        <li>Event Date: ${newDate}</li>
        <li>Event Location: ${newLocation}</li>
        <li>Other Details: ${newDetails}</li>
      </ul>
      <footer style="background: #98BEAB; height: 50px; text-align: center;">
      <p style="color: black; padding: 5px; margin: 0 auto;">TPT</p><a href="www.google.com" style="color: black; text-decoration: none; padding: 5px; margin: 0 auto;">Visit Website</a>
      <a href="www.google.com/admin" style="color: black; text-decoration: none; padding: 5px; margin: 0 auto;">Visit Admin Page</a>
      </footer>  
    `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: `"The Purple Tulip" <${process.env.EMAIL}`,
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
  getInquiry: (req, res) => {
    const db = req.app.get("db");
    console.log(req.params);
    let { id } = req.params;

    db.get_inquiry(id)
      .then(inquiry => {
        console.log(inquiry);
        res.status(200).send(inquiry[0]);
      })
      .catch(error => console.log(error));
  },
  deleteInquiry: (req, res) => {
    const db = req.app.get("db");
    console.log(req.params.id);
    let { id } = req.params;
    db.delete_inq(id)
      .then(() => {
        res.status(200).send();
      })
      .catch(error => console.log("error in delete inq", error));
  }
};
