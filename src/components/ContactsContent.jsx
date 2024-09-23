import React, { useState } from "react";
import { FadeIn } from "../animations/fadeIn";

const ContactsContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleContactClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("https://formspree.io/f/mldrywqe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
          setShowForm(false);
        }, 2000);
      }
    });
  };

  return (
    <div className="w-full mx-auto bg-transparent border-transparent py-16 flex flex-col items-center gap-6 border rounded">
      <div className="flex flex-col gap-6 text-white items-center">
        <div className="flex flex-wrap justify-center items-start gap-8">
          {/* Form Section */}
          <div className="flex flex-col gap-4 w-full max-w-[1200px]">
            {showForm ? (
              <FadeIn>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-4 rounded bg-gray-800 text-white h-12"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="p-4 rounded bg-gray-800 text-white h-12"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="p-4 rounded bg-gray-800 text-white h-32"
                  />
                  <button
                    type="submit"
                    className={`font-bold py-2 px-4 rounded ${messageSent ? 'bg-green-500 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-700'}`}
                  >
                    {messageSent ? "Message sent!" : "Send Message"}
                  </button>
                </form>
              </FadeIn>
            ) : (
              <div className="flex flex-col items-center">
                <FadeIn>
                  <p className="text-4xl text-center">
                    I’d love to connect! I’m open to new opportunities, and I welcome any messages or inquiries. Click the button below to reach out through my social media or email, and I’ll respond as soon as I can.
                  </p>
                </FadeIn>
                <FadeIn>
                <button
                  onClick={handleContactClick}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-4xl"
                >
                  Contact Me
                </button>
                </FadeIn>
              </div>
            )}
          </div>

          {/* Images Section */}
          {showForm && (
            <div className="flex gap-4 items-center">
              <FadeIn>
                <a href="https://github.com/CFdefense" target="_blank" rel="noopener noreferrer">
                  <img src="../../media/contacts/github.png" alt="GitHub" className="w-32 h-32 object-cover rounded" />
                </a>
              </FadeIn>
              <FadeIn>
                <a href="https://www.linkedin.com/in/christian-farrell1/" target="_blank" rel="noopener noreferrer">
                  <img src="../../media/contacts/linkedin.png" alt="LinkedIn" className="w-32 h-32 object-cover rounded" />
                </a>
              </FadeIn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactsContent;
