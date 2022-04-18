const nodemailer=require("nodemailer")

const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'arundhatibandyopadhyay2@gmail.com',
        pass:'Arundhati@200'
    }

})
//send out email through nodemailer

const mailOptions = {
    from:'arundhatibandyopadhyay2@gmail.com',
    to:'arundhatibandyopadhyay667@gmail.com',
    subject:'hello world',
    text:'this is a body of a mail'
}

transport.sendMail(mailOptions,function (error,info) {
    if(error){
        console.log(error);
    }else{
        console.log('email sent' + info.response);
    }
})