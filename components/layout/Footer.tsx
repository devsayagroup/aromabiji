import Link from "next/link";
import Image from "next/image";
import {BiLogoTiktok, BiLogoInstagram, } from "react-icons/bi";

export default function Footer() {
    return (
      <footer className="bg-brown relative px-6">
          <div className="absolute inset-0">
            <Image
              src="/background/bg-footer.png"
              alt="Aroma Biji"
              fill
              priority
              className="object-cover brightness-60"
            />
            <div className="absolute inset-0 bg-brown/90"></div>
          </div>
        <div className="relative flex container mx-auto max-w-7xl py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2 mb-2 max-w-md">
                    <Link href="/">
                        <Image src="/logo/AromaBiji-WildLuwak.png" width={80} height={80} alt='Aroma Biji' />
                    </Link>
                    <p className="text-sm text-gray-200 leading-relaxed w-[80%]">
                        For over 40 years, Aroma Biji has been dedicated to the art of coffee. A story of 
                        passion, craftsmanship, and authenticity poured into every cup.
                    </p>
                    <div className="flex flex-row mt-2 gap-4">
                        <Link className="bg-browncream bg-white rounded-full" href="https://www.instagram.com/">
                          <BiLogoInstagram size={38} className= "text-brown p-2 transform transition duration-300 hover:text-browncream" />
                        </Link>
                        <Link className="bg-browncream bg-white rounded-full" href="https://www.tiktok.com/">
                          <BiLogoTiktok size={38} className= "text-brown p-2 transform transition duration-300 hover:text-browncream" />
                        </Link>
                    </div>
                </div>
                
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
                        <div>
                            <h3 className="font-style tracking-wider text-white text-xl mb-4">Navigation</h3>
                            <ul className="space-y-1 text-md ">
                                <li><Link href="/#about" className="text-white transform transition duration-300 hover:text-gray-100">About</Link></li>
                                <li><Link href="/#product" className="text-white transform transition duration-300 hover:text-gray-100">Product</Link></li>
                                <li><Link href="/#story" className="text-white transform transition duration-300 hover:text-gray-100">Story</Link></li>
                                <li><Link href="/#journal" className="text-white transform transition duration-300 hover:text-gray-100">Journal</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-style tracking-wider text-white text-xl mb-4">Contact Us</h3>
                            <ul className="font-text space-y-1 text-md ">
                                <li><Link href="/" className="text-white transform transition duration-300 hover:text-gray-100">0822 1129 2211</Link></li>
                                <li><Link href="/" className="text-white transform transition duration-300 hover:text-gray-100">0812 3721 1111</Link></li>
                                <li><Link href="/" className="text-white transform transition duration-300 hover:text-gray-100">marketing@aromabiji.id</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-style tracking-wider text-white text-xl mb-4">Our Physical Store</h3>
                            <ul className="space-y-2 text-md ">
                                <li><Link href="/" className="text-white uppercase transform transition duration-300 hover:text-gray-100">Soekarno Hatta <br /> International Airport</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-6 md:mt-12">
                      <h1 className="text-4xl font-style text-white tracking-wide"><span className="font-text">#</span>PrideOfIndonesia</h1>
                    </div>
                </div>
              
              </div>
          </div>
          <div className="relative bg-browncream p-4 text-black text-center text-sm md:text-md">
            <p>© 2025 Aroma Biji by SAYAGROUP</p>
          </div>
        </footer>
    );
  }