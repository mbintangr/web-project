import React from "react";
import { FcInfo } from "react-icons/fc";

function Information() {
  return (
    <div className="w-[100%] bg-yellow-300 text-primary px-[15vw] py-5 my-10">
      <div className="flex font-bold text-2xl pb-3 items-center">
        <FcInfo size={30}/>
        <h1 className="mx-2">Information!</h1>
      </div>
      <p className="hidden sm:block">
        Hello and welcome to our amazing cooking recipe site! We're absolutely thrilled to present to you the very first version of our platform. If you have any thoughts, suggestions, or questions about our site, we would be overjoyed to hear from you. Feel free to reach out to us using the link provided on our contact page. Happy cooking and let's embark on this exciting culinary journey together!
      </p>
      <p className="sm:hidden">
        Welcome to our cooking recipe site, where we eagerly await your feedback and suggestions as we embark on this exciting culinary journey together.
      </p>
    </div>
  );
}

export default Information;
