import EventEmitter from 'events';
import nodemailer from "nodemailer";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('created', function(email:any, name:String) {

async function mail() {
    console.log("here")
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: "thisiskm95@gmail.com",
        to: email,
        subject: "Welcome",
        text: "Account Created",
    
      });
      console.log("Message sent: %s", info);
      
}
mail()

});

export default myEmitter