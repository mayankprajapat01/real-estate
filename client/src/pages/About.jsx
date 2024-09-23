// import React from "react";

// export default function About() {
//   return <div>About</div>;
// }
import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About SmartEstate
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to <span className="font-semibold">SmartEstate</span>, the
        ultimate platform that brings cutting-edge technology to real estate.
        Whether you're looking to buy, sell, or rent properties, we make it
        easier for everyone to find their dream home or investment.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600">
          SmartEstate is designed to provide a seamless and intelligent property
          browsing experience. Our platform combines modern web development and
          advanced machine learning algorithms to offer property price
          predictions that help users make informed decisions. With a
          user-friendly interface and powerful search features, SmartEstate
          simplifies property transactions by connecting buyers, sellers, and
          renters all in one place.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            <strong className="font-medium text-orange-600">
              Easy Property Listings
            </strong>
            : Sellers can easily list their properties with detailed
            information, including images and key features such as number of
            rooms, parking availability, and more.
          </li>
          <li>
            <strong className="font-medium text-orange-600">
              Advanced Search Filters
            </strong>
            : Buyers and renters can explore properties with customized filters
            to narrow down their options based on price, location, property
            type, and more.
          </li>
          <li>
            <strong className="font-medium text-orange-600">
              Price Prediction
            </strong>
            : Our machine learning model predicts property prices based on key
            data points, helping users make smart, data-driven decisions.
          </li>
          <li>
            <strong className="font-medium text-orange-600">
              Secure User Accounts
            </strong>
            : We provide a secure authentication system with email/password
            login or Google OAuth integration, ensuring user privacy and data
            protection.
          </li>
          <li>
            <strong className="font-medium text-orange-600">
              Profile Management
            </strong>
            : Users can manage their profiles, edit listings, and update their
            personal details from one simple dashboard.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600">
          At SmartEstate, our mission is to bridge the gap between data
          analytics and real estate. By leveraging technology, we aim to make
          the process of buying, selling, and renting properties smoother,
          smarter, and more transparent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            <strong className="font-medium text-orange-600">
              Accurate Price Predictions
            </strong>
            : Our price prediction model gives you a reliable estimate based on
            current market trends and property details.
          </li>
          <li>
            <strong className="font-medium text-orange-600">
              Comprehensive Listings
            </strong>
            : Detailed property listings with high-quality images and
            descriptions ensure that you have all the information you need to
            make the right decision.
          </li>
          <li>
            <strong className="font-medium text-orange-600">
              User-Centric Design
            </strong>
            : Our platform is built with you in mind, offering an intuitive
            design that enhances the user experience.
          </li>
        </ul>
      </section>

      <footer className="bg-gray-100 py-4 mt-12 text-center text-gray-500">
        <p>
          Thank you for choosing SmartEstate, where technology meets real estate
          to help you find the perfect property with ease!
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
