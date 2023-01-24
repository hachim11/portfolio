import React, { useContext } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import { DataContext } from "../Main";
import emailjs from "emailjs-com";

const Contact = () => {
	const { data } = useContext(DataContext);
	const arr = Object.entries(data);
	// const option = arr.map((item) => item[1].section.contact.options);
	const forms = arr.map((item) => item[1].section.contact.form);
	const form = useRef();
	 const sendEmail = (e) => {
	 	e.preventDefault();

	 	emailjs.sendForm(
	 		"service_g9vhsnb",
	 		"template_f7ymbir",
	 		form.current,
	 		"Or8onvwilpUeP-0LW"
	 	);
	 	e.target.reset();
	 };

	return (
		<section className="section contact" id="contact">
			<h2 className="section_title">{arr.map((item) =>
						item[1].section.contact.title)}</h2>
			<span className="section_subtitle">{arr.map((item) =>
						item[1].section.contact.subtitle)}</span>

			<div className="container contact_container">
				<div className="contact_options">
				
					{arr.map((item) =>
						item[1].section.contact.options.map((i) => (
							<article className="contact_option content" key={i.name} >
								{i.icon === "whatsapp" && (
									<BsWhatsapp className="option-icon" />
								)}
								{i.icon === "messenger" && (
									<RiMessengerLine className="option-icon" />
								)}
								{i.icon === "email" && (
									<MdOutlineEmail className="option-icon" />
								)}

								<p className="option-social">{i.name}</p>
								<p className="option-name">{i.social}</p>
								<a href={i.href} target="__blank" className="option-link">
									{i.link}
								</a>
							</article>
						))
					)}
				</div>
				<div className="contact_form">
					{forms.map((i,index) => (
						<form ref={form}  onSubmit={sendEmail}	key={index}>
							<input
						
								className="content"
								type="text"
								name="name"
								placeholder={i.name}
								required
							/>
							<input
						
								className="content"
								type="email"
								name="email"
								placeholder={i.email}
								required
							/>
							<textarea
						
								className="content"
								name="message"
								rows="7"
								placeholder={i.message}
								required
							></textarea>
							<button type="submit" className="btn btn--flex">
								{i.btn}
							</button>
						</form>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
