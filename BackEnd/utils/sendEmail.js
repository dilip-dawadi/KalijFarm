import { createTransport } from "nodemailer";

export const sendEmail = async (email, subject, text) => {
	try {
		const transporter = createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
			html: `<div
			style="
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  flex-direction: column;
			  background-color: #f5f5f5;
			  padding: 30px;
			  border-radius: 10px;
			  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			">
					<div>
						<div variant="h6" style="text-align: center; letter-spacing: 2px; margin: 10px auto;">Welcome to Rhino Spot Resort & The Game Farm- Kalij Farm
						</div>
							<div variant="body1" style="text-align: center; letter-spacing: 2px; color: gray; margin: 30px auto;">Click Here 👇 and ${subject}</div>
							<div variant="body1" style="text-align: center; letter-spacing: 1px; color: gray; margin: 20px auto;">${text}</div>
							<div variant="body1" style="text-align: center; letter-spacing: 2px; margin: 10px auto;">Thank you for choosing us</div>
						</div>
					</div>`,
		});
	} catch (error) {
		return error;
	}
};

export const paymentEmail = async (email, subject, text) => {
	try {
		const transporter = createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
			html: `<div
			style="
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  flex-direction: column;
			  background-color: #f5f5f5;
			  padding: 30px;
			  border-radius: 10px;
			  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			">
			<div>
			<div variant="h6" style="text-align: center; letter-spacing: 2px; margin: 10px auto;">Greeding, Mr.Dilip Dawadi
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center">${text}
			</div>
			</div>
			</div>`,
		});
		console.log("Payment notice to admin email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

export const paymentEmailToAdmin = async (email, subject, text) => {
	try {
		const transporter = createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
			html: `<div
			style="
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  flex-direction: column;
			  background-color: #f5f5f5;
			  padding: 30px;
			  border-radius: 10px;
			  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			">
			<div>
			<div variant="h6" style="text-align: center; letter-spacing: 2px; margin: 10px auto;" >Greeding, Mr.${text}
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center" >Due to a payment issue, your admin panel is temporarily blocked.
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center;">Ten dollars is the monthly payment, and I hope you can make it to the provider and pay ten dollars, which equals one thousand and two hundred rupees..
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center;">You can pay me with any online services, and you can reach me at 9810024561.</div>
			<div variant="body1" style="letter-spacing: 2px; margin: 10px auto; text-align: center;">Thank you</div>
			<div>
		  </div>`,
		});
		console.log("Admin Payment email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
export const paymentSuccessByUser = async (email, subject, text) => {
	try {
		const transporter = createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
			html: `<div
			style="
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  flex-direction: column;
			  background-color: #f5f5f5;
			  padding: 30px;
			  margin: 10px auto;
			  border-radius: 10px;
			  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			">
			<div>
			<div variant="h6" style="text-align: center; letter-spacing: 2px; margin: 10px auto;" >Greeding, Mr.${text}
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center;  margin: 10px auto;" >Your Room Booked Successfully
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center;  margin: 10px auto;">For More Query, You can reach us at 9810024561, Thank You for choosing Rhino Spot Resort & The Game Farm- Kalij Farm</div>
			</div>
		  </div>`,
		});
		console.log("User Payment Success msg sent");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

export const RoomUnbookedOfUser = async (email, subject, text) => {
	try {
		const transporter = createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});
		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
			html: `<div
			style="
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  flex-direction: column;
			  background-color: #f5f5f5;
			  padding: 30px;
			  margin: 10px auto;
			  border-radius: 10px;
			  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			">
			<div>
			<div variant="h6" style="text-align: center; letter-spacing: 2px; margin: 10px auto;" >Greeding, Mr.${text}
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center;  margin: 10px auto;" >Your Room UnBooked
			</div>
			<div variant="body1" style="color: gray; letter-spacing: 2px; text-align: center;  margin: 10px auto;">For More Query, You can reach us at 9810024561, Thank You for choosing Rhino Spot Resort & The Game Farm- Kalij Farm</div>
			</div>
		  </div>`,
		});
		console.log("User Payment Unbooked msg sent");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};