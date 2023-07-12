import React from "react";
import Layout from "../components/Layout";
import ContactInfo from "../components/ContactInfo";
import { creatorData } from "../data/creatorData";
import Footer from "../components/Footer";

export default function Contact() {
  console.log(creatorData);

  return (
    <div>
      <Layout>
        <div className="">
          {/* Page Title */}
          <h1 className="text-primary text-2xl lg:text-3xl font-bold mb-8">
            Contact
          </h1>

          {/* Contact main div (user 1  + user 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto my-8">
            {creatorData.map((data, index) => (
              <ContactInfo
                key={index}
                img={data.img}
                name={data.name}
                phone={data.phone}
                ig={data.ig}
                linkedin={data.linkedin}
              />
            ))}
          </div>
        </div>
      </Layout>
      <Footer position="relative sm:absolute" />
    </div>
  );
}
