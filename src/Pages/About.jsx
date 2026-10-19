import Header from "../Main/Header";
import Footer from "../Main/Footer";
import { Link } from "react-router-dom";
function About(){
    return(
        <>
             <Header />

            {/* Hero Section */}
            <section className="bg-green-50 px-6 py-16 md:py-24">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-green-600 font-bold uppercase tracking-widest mb-4">
                            About Our Store
                        </p>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight font-['Times_New_Roman']">
                            Fresh Fruits,
                            <span className="text-green-600"> Healthy Life!</span>
                        </h1>

                        <p className="text-gray-600 text-lg mt-6 leading-8">
                            We believe that healthy living starts with fresh
                            fruits. Our mission is to bring nature's goodness
                            directly to your home with fresh, delicious and
                            quality fruits.
                        </p>

                        <a
                            href="/products"
                            className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 shadow-lg"
                        >
                            Explore Our Fruits →
                        </a>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=80"
                            alt="Fresh and colorful fruits"
                            className="w-full h-[320px] md:h-[450px] object-cover rounded-3xl shadow-xl"
                        />

                        <div className="absolute -bottom-5 -left-3 md:-left-5 bg-white p-5 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-bold text-green-600">
                                100%
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Freshness & Care
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <p className="text-green-600 font-semibold uppercase tracking-widest">
                        Our Story
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 font-['Times_New_Roman']">
                        Bringing Nature Closer to You
                    </h2>

                    <p className="text-gray-600 text-lg leading-8 mt-6 max-w-3xl mx-auto">
                        Our fruits store is created for people who care about
                        their health and happiness. We make it easy for you
                        to enjoy nature's delicious gifts every day. From
                        juicy apples to sweet mangoes, we aim to make fresh
                        fruits a part of your everyday lifestyle.
                    </p>

                </div>
            </section>

            {/* Features */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Times_New_Roman']">
                            Why Choose Us?
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Freshness, quality and care in every bite.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
                            <div className="text-5xl mb-5">🍎</div>
                            <h3 className="text-xl font-bold text-gray-800">
                                Fresh Fruits
                            </h3>
                            <p className="text-gray-600 mt-3 leading-7">
                                Enjoy a colorful selection of fruits for your
                                daily meals and healthy lifestyle.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
                            <div className="text-5xl mb-5">💚</div>
                            <h3 className="text-xl font-bold text-gray-800">
                                Healthy Living
                            </h3>
                            <p className="text-gray-600 mt-3 leading-7">
                                Make fruits a part of your daily routine
                                and enjoy a balanced diet.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
                            <div className="text-5xl mb-5">🚚</div>
                            <h3 className="text-xl font-bold text-gray-800">
                                Easy Shopping
                            </h3>
                            <p className="text-gray-600 mt-3 leading-7">
                                Discover your favorite fruits through a
                                simple and convenient shopping experience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Banner */}
            <section className="bg-green-600 px-6 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-['Times_New_Roman']">
                    Eat Fresh. Live Healthy.
                </h2>

                <p className="text-green-50 mt-4 text-lg">
                    Make every day healthier with the goodness of fruits.
                </p>

                <Link
                    to={"/products"}
                    className="inline-block mt-7 bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition duration-300"
                >
                    Shop Now
                </Link>
            </section>

            <Footer />
        </>
    )
}

export default About;