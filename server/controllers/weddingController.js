const nodemailer = require("nodemailer");
module.exports = {
  getWeddings: (req, res) => {
    const db = req.app.get("db");
    db.get_weddings()
      .then(weddings => {
        res.status(200).send(weddings);
      })
      .catch(error => console.log("error in get products", error));
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
      <header style="background: #A894C2; text-align: center;  height: 30px; font-family:arial;"><h1 style= "font-size: 22px;">The Purple Tulip: New Wedding Inquiry</h1></header>
      <div style="font-family:arial; "><p style= "font-size: 18px;">You have a new wedding inquiry: </p>
      <ul style="list-style-type:none; font-size: 16px;">
      <p style= "font-size: 22px; font-size: 20px; font-weight: bold">Contact Info</p><br />
        <li>Date: ${newweddingcontactdate}</li> <br />
        <li>Full Names: ${newfullnames}</li> <br />
        <li>Email: ${newweddingemail}</li><br />
        <li>Phone: ${newweddingphone}</li><br />
        <p style= "font-size: 22px; font-size: 18px; font-weight: bold">Wedding Info</p><br />
        <li>Wedding Date: ${newweddingdate}</li><br />
        <li>Ceremony Info: ${newceremonyinfo}</li><br />
        <li>Reception Info: ${newreceptioninfo}</li><br />
        <li>Number of Guests: ${newguestcount}</li><br />
        <li>Number of Bridal Party: ${newbridalparty}</li><br />
        <li>Color Scheme: ${newcolorscheme}</li><br />
        <p style= "font-size: 22px; font-size: 18px; font-weight: bold">Wedding Flowers</p><br />
        <li>Needs bouquets, boutonnieres, corsages: ${newneedpersonal}</li><br />
        <li>Needs Ceremony decor: ${newneedceremony}</li><br />
        <li>Needs Reception decor: ${newneedreception}</li><br />
        <li>Needs Cake decor: ${newneedcakeflowers}</li><br />
        <li>Other Needs: ${newneedother}</li><br />
        <li>Envision of Flowers( Tables, bars, pews, altar, restrooms, etc): ${newenvision}</li><br />
        <li>Wedding Style: ${newweddingstyle}</li><br />
        <li>Budget: ${newbudget}</li><br />
        <li>Pinterest boards/Inspirations: ${newpinterest}</li><br />
        <li>Other Details: ${newextradetails}</li>
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
