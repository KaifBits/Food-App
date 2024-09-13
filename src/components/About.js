import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Introduction Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our website! We are a passionate team dedicated to delivering the best products and services to our customers.
          Our mission is to innovate and excel in everything we do, bringing value and quality to our clients.
        </p>
        <p className="text-lg text-gray-600">
          With years of experience in the industry, we pride ourselves on our commitment to excellence and customer satisfaction.
          We believe in transparency, integrity, and a relentless pursuit of improvement.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://media.licdn.com/dms/image/v2/D4D03AQH1DK5Pj9QzUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723217384752?e=1731542400&v=beta&t=-L6ClaqZyZGoZyXQtyXTq3x5H981Grlq7oXzE1rGjzE"
              alt="John Doe"
            />
            <h3 className="text-xl font-semibold text-gray-800">SK kaif Rahaman</h3>
            <p className="text-gray-600">CEO</p>
            <p className="mt-2">Kaif is the visionary behind our company, leading with passion and dedication.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHJKsVvZVUjaA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703487229760?e=1731542400&v=beta&t=2px8PL7GKi-YEPeAd3CHTJyiQ8-NererqeHH2hMqvFQ"
              alt="Jane Smith"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
            <p className="mt-2">Jane oversees our technological advancements and ensures we stay ahead in the industry.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://media.licdn.com/dms/image/v2/C4E03AQGJ8bRE8F7sJA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517872801710?e=1731542400&v=beta&t=HCOe9uo5pjY9IW8O5TT268qb-j2x9JS78zFu0KILRhI"
              alt="Emily Johnson"
            />
            <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">Marketing Lead</p>
            <p className="mt-2">Emily drives our marketing strategies, helping us connect with our audience effectively.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
