import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto ">
  <footer className=" grid grid-cols-2 items-center  bg-neutral text-neutral-content">
    <div className="flex flex-col p-10 items-center "> {/* Add the "flex flex-col justify-center" class here */}
      <h1 className="text-2xl pb-5">CONTACT US</h1>
      <p className="leading-8">123 ABS Street, Uni 21, Bangladesh</p>
      <p className="leading-8">+88 123456789</p>
      <p className="leading-8">Mon - Fri: 08:00 - 22:00</p>
      <p className="leading-8">Sat - Sun: 10:00 - 23:00</p>
    </div>

    <div className="flex flex-col items-center justify-center h-full w-full bg-[#111827]"> {/* Add the "flex flex-col justify-center" class here */}
      <h1 className="text-4xl leading-8 pb-8">Follow US</h1>
      <p className="leading-8">Join us on social media</p>
      <div className="flex gap-5 pt-5 text-4xl">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
    </div>
  </footer>
  <div className="text-center py-3 text-white bg-[#151515]">
    <h4>Copyright © CulinaryCloud. All rights reserved.</h4>
  </div>
</div>

  );
};

export default Footer;
