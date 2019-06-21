const nodemailer = require("nodemailer");
module.exports = {
  getWedding: (req, res) => {
    const db = req.app.get("db");
    let { id } = req.params;
    db.get_wedding(id)
      .then(wedding => {
        res.status(200).send(wedding[0]);
      })
      .catch(error => console.log("error in get products", error));
  },
  getWeddings: (req, res) => {
    const db = req.app.get("db");
    db.get_weddings()
      .then(weddings => {
        res.status(200).send(weddings);
      })
      .catch(error => console.log("error in get products", error));
  },
  deleteWedding: (req, res) => {
    const db = req.app.get("db");
    console.log(req.params.id);
    let { id } = req.params;
    db.delete_wedding(id)
      .then(() => {
        res.status(200).send();
      })
      .catch(error => console.log("error in delete wedding", error));
  },
  createWedding: (req, res) => {
    const db = req.app.get("db");
    console.log(req.body);
    let {
      weddingcontactdate,
      fullnames,
      weddingemail,
      weddingphone,
      weddingdate,
      ceremonyinfo,
      receptioninfo,
      guestcount,
      bridalparty,
      colorscheme,
      needpersonal,
      needceremony,
      needreception,
      needcakeflowers,
      needother,
      envision,
      weddingstyle,
      budget,
      pinterest,
      extradetails
    } = req.body;
    db.create_wedding([
      weddingcontactdate,
      fullnames,
      weddingemail,
      weddingphone,
      weddingdate,
      ceremonyinfo,
      receptioninfo,
      guestcount,
      bridalparty,
      colorscheme,
      needpersonal,
      needceremony,
      needreception,
      needcakeflowers,
      needother,
      envision,
      weddingstyle,
      budget,
      pinterest,
      extradetails
    ])
      .then(() => res.status(200).send())
      .catch(err => console.log("error in create wedd", err));

    let newweddingcontactdate = weddingcontactdate,
      newfullnames = fullnames,
      newweddingemail = weddingemail,
      newweddingphone = weddingphone,
      newweddingdate = weddingdate,
      newceremonyinfo = ceremonyinfo,
      newreceptioninfo = receptioninfo,
      newguestcount = guestcount,
      newbridalparty = bridalparty,
      newcolorscheme = colorscheme,
      newneedpersonal = needpersonal,
      newneedceremony = needceremony,
      newneedreception = needreception,
      newneedcakeflowers = needcakeflowers,
      newneedother = needother,
      newenvision = envision,
      newweddingstyle = weddingstyle,
      newbudget = budget,
      newpinterest = pinterest,
      newextradetails = extradetails,
      content = `
      <header style="background: #A894C2; text-align: center;  height: 45px; font-family:arial; display: flex; justify-content: center; align-items: center;">
<h1 style= " font-size: 20px;">The Purple Tulip: New Wedding Inquiry</h1></header>
      <div style="font-family:arial; "><p style= "font-size: 18px;">You have a new wedding inquiry: </p>
      <ul style="list-style-type:none; font-size: 16px; line-height: 30px;">
      <p style= "font-size: 20px; font-size: 20px; font-weight: bold; margin: 0 auto;">Contact Info</p>
        <li>Date: ${newweddingcontactdate}</li>
        <li>Full Names: ${newfullnames}</li>
        <li>Email: ${newweddingemail}</li>
        <li>Phone: ${newweddingphone}</li>
        <p style= "font-size: 20px; font-size: 20px; font-weight: bold; margin: 0 auto;">Wedding Info</p>
        <li>Wedding Date: ${newweddingdate}</li>
        <li>Ceremony Info: ${newceremonyinfo}</li>
        <li>Reception Info: ${newreceptioninfo}</li>
        <li>Number of Guests: ${newguestcount}</li>
        <li>Number of Bridal Party: ${newbridalparty}</li>
        <li>Color Scheme: ${newcolorscheme}</li>
        <p style= "font-size: 20px; font-size: 20px; font-weight: bold; margin: 0 auto;">Wedding Flowers</p>
        <li>Needs bouquets, boutonnieres, corsages: ${newneedpersonal}</li>
        <li>Needs Ceremony decor: ${newneedceremony}</li>
        <li>Needs Reception decor: ${newneedreception}</li>
        <li>Needs Cake decor: ${newneedcakeflowers}</li>
        <li>Other Needs: ${newneedother}</li>
        <li>Envision of Flowers( Tables, bars, pews, altar, restrooms, etc): ${newenvision}</li>
        <li>Wedding Style: ${newweddingstyle}</li>
        <li>Budget: ${newbudget}</li>
        <li>Pinterest boards/Inspirations: ${newpinterest}</li>
        <li>Other Details: ${newextradetails}</li>
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
  }
};
