import React from 'react';

function AboutUs() {
  return (
    <section className="bg-purple-50 py-12 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-violetCustom mb-6 flex items-center justify-center gap-2">
          <span role="img" aria-label="leaf">🌿</span> About Us
        </h2>

        <p className="text-lg mb-6 leading-relaxed">
          At <span className="font-semibold text-violetCustom">Cosmetics</span>, we believe beauty is more than skin deep —
          it's a reflection of confidence, care, and authenticity. Our journey began with a simple yet powerful mission:
          to deliver skincare that not only works but also empowers.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          ✦ <strong>𝐂𝐞𝐫𝐭𝐢𝐟𝐢𝐞𝐝 𝐜𝐨𝐬𝐦𝐞𝐭𝐢𝐜𝐬 𝐛𝐫𝐚𝐧𝐝</strong> – All our products are <span className="text-violetCustom font-medium">clinically approved</span>,
          crafted under the highest standards of quality to ensure safety, effectiveness, and gentle care for every skin type.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          ✦ <strong>𝐅𝐨𝐫𝐦𝐮𝐥𝐚𝐭𝐞𝐝 𝐭𝐨 𝐢𝐥𝐥𝐮𝐦𝐢𝐧𝐚𝐭𝐞 𝐲𝐨𝐮𝐫 𝐛𝐞𝐚𝐮𝐭𝐲</strong> – Each product is designed to enhance your natural glow and
          ignite the <span className="italic">confidence</span> that comes from feeling radiant, healthy, and truly yourself.
        </p>

        <p className="text-lg leading-relaxed">
          Whether you're just beginning your skincare journey or elevating your daily ritual,
          we're honored to be a part of it — supporting you with products that love your skin back.
        </p>

        <div className="text-3xl mt-8">
          🌈💜
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
