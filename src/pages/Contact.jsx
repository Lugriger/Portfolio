import { useState } from "react";

function Contact() {
  


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
        alert("Failed to send message");
      }
    } catch (error) {
      setSuccess(false);
      alert("Error sending message");
    }
  } else {
    setSuccess(false);
  }
};

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 ">
      <hr className="  w-3/4 h-4 mb-30"/>
      <h2 className="text-4xl mb-10 border-2 max-w-96 rounded-lg px-8 py-4 bg-boxColor">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-xl border  bg-boxColor p-6 rounded-xl shadow-lg shadow-amber-100/10"
      >
        <label className="flex flex-col text-lg ">
          Name:
          <input
            type="text"
            name="name"
            className="mt-1 p-2 rounded bg-bgCol font-semibold  font-sans focus:outline-none border hover:bg-hoverCol focus:bg-hoverCol"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-800 text-sm">{errors.name}</span>}
        </label>

        <label className="flex flex-col text-lg ">
          Email:
          <input
            type="email"
            name="email"
            className="mt-1 p-2 rounded bg-bgCol  font-semibold  font-sans focus:outline-none border hover:bg-hoverCol focus:bg-hoverCol"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-800 text-sm">{errors.email}</span>}
        </label>

        <label className="flex flex-col text-lg ">
          Message:
          <textarea
            name="message"
            rows="5"
            className="mt-1 p-2 rounded font-semibold  font-sans bg-bgCol focus:outline-none border hover:bg-hoverCol focus:bg-hoverCol "
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="text-red-800 text-sm">{errors.message}</span>}
        </label>

        <button
          type="submit"
          className="bg-bgCol  font-bold py-2 px-4 rounded transition-all border cursor-pointer hover:bg-hoverCol"
        >
          Send
        </button>

        {success && (
          <p className="text-green-500 text-center mt-2">
            Message sent successfully! 🚀
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;