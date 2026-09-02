import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { logo, youtube, instagram, linkedin, twitter } from "../assets";
import { SocialIcons } from ".";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-semibold mb-2.5 text-[clamp(0.875rem,1.5vw,0.9375rem)]">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[#161622]/90 py-3.5 px-4 placeholder:text-secondary/60 text-white text-[clamp(0.875rem,1.5vw,1rem)] rounded-xl outline-none border border-white/10 font-normal focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all w-full shadow-inner"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ameenur Rahman",
          from_email: form.email,
          to_email: "ameenurrahman@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again.");
      });
  };

  return (
    <div className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-[#12121A]/85 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/5">
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h1 className={styles.sectionHeadText}>Contact Me.</h1>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <InputField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            type="text"
          />
          {nameError && <span className="text-red-400 text-xs font-medium">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            type="email"
          />
          {emailError && <span className="text-red-400 text-xs font-medium">{emailError}</span>}

          <InputField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="How can I help you?"
            type="text"
          />

          <button
            type="submit"
            disabled={loading}
            className="figma-btn-gradient py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold text-[15px] shadow-lg shadow-purple-500/25 hover:scale-105 transition-all mt-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
          {confirmation && <p className="text-sm font-medium text-emerald-400 mt-2">{confirmation}</p>}
        </form>

        <div className="mt-10">
          <p className={`${styles.sectionSubText} mb-6`}>Or connect with me on</p>
          <SocialIcons socialLinks={[
            {
              name: "LinkedIn",
              icon: linkedin,
              url: "https://www.linkedin.com/in/ameenur-rahman/",
              color: "#0A66C2"
            },
            {
              name: "Twitter",
              icon: twitter,
              url: "https://x.com/AmeenIntellect",
              color: "#1DA1F2"
            },
            {
              name: "Instagram",
              icon: instagram,
              url: "https://instagram.com/ameenintellect/",
              color: "#E4405F"
            },
            {
              name: "YouTube",
              icon: youtube,
              url: "https://www.youtube.com/@ameenIntellect",
              color: "#FF0000"
            },
          ]} />
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex items-center justify-center xl:flex-1"
      >
        <div className="w-full max-w-[400px] h-[clamp(300px,35vw,400px)]">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
