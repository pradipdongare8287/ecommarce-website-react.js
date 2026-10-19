
import Header from "../Main/Header";
import Footer from "../Main/Footer";
import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Contact Data:", formData);
        alert("Thank you for contacting us!");

        setFormData({
            name: "",
            email: "",
            mobile: "",
            subject: "",
            message: ""
        });
    }

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="bg-green-50 px-6 py-16 md:py-20 text-center">
                <p className="text-green-600 font-bold uppercase tracking-widest">
                    Get In Touch
                </p>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mt-4 font-['Times_New_Roman']">
                    Contact <span className="text-[#ce1b6d]">Us</span>
                </h1>

                <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto leading-8">
                    Have a question about our fresh fruits or your order?
                    We would love to hear from you. Send us a message!
                </p>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-5 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <div>
                        <p className="text-green-600 font-semibold uppercase tracking-widest">
                            Contact Information
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 font-['Times_New_Roman']">
                            Let's Talk About Freshness!
                        </h2>

                        <p className="text-gray-600 mt-5 leading-8">
                            We are here to help you with product information,
                            orders and any questions about our fruits store.
                            Contact us using the details below.
                        </p>

                        <div className="mt-8 space-y-5">

                            <div className="flex items-center gap-5 bg-green-50 p-5 rounded-2xl">
                                <div className="bg-[#ce1b6d] text-white text-2xl w-14 h-14 rounded-xl flex items-center justify-center">
                                    📍
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">
                                        Our Location
                                    </h3>
                                    <p className="text-gray-600">
                                        Your Store Address, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 bg-green-50 p-5 rounded-2xl">
                                <div className="bg-[#ce1b6d] text-white text-2xl w-14 h-14 rounded-xl flex items-center justify-center">
                                    📞
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">
                                        Phone Number
                                    </h3>
                                    <p className="text-gray-600">
                                        +91 XXXXX XXXXX
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 bg-green-50 p-5 rounded-2xl">
                                <div className="bg-[#ce1b6d] text-white text-2xl w-14 h-14 rounded-xl flex items-center justify-center">
                                    ✉️
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">
                                        Email Address
                                    </h3>
                                    <p className="text-gray-600">
                                        support@yourstore.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 bg-green-50 p-5 rounded-2xl">
                                <div className="bg-[#ce1b6d] text-white text-2xl w-14 h-14 rounded-xl flex items-center justify-center">
                                    🕒
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">
                                        Working Hours
                                    </h3>
                                    <p className="text-gray-600">
                                        Monday - Saturday
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800 font-['Times_New_Roman']">
                            Send Us a Message
                        </h2>

                        <p className="text-gray-500 mt-3 mb-8">
                            Fill out the form below and get in touch with us.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold text-gray-700 mb-2">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="10-digit mobile"
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        required
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter subject"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows="5"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#ce1b6d] text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
                            >
                                Send Message →
                            </button>

                        </form>
                    </div>

                </div>
            </section>

            {/* Bottom Banner */}
            <section className="bg-[#ce1b6d] px-6 py-14 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-['Times_New_Roman']">
                    Your Health, Our Priority!
                </h2>

                <p className="text-green-50 mt-4 text-lg">
                    Fresh fruits and friendly service, always.
                </p>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
