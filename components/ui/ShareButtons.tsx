"use client";

import { Twitter, Facebook, Link2 } from "lucide-react";

interface ShareProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard");
  };

  const buttonStyle = "p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-300";

  return (
    <div className="flex items-center gap-3">
      <a 
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank" 
        rel="noopener noreferrer"
        className={buttonStyle}
      >
        <Twitter size={16} strokeWidth={1.5} />
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank" 
        rel="noopener noreferrer"
        className={buttonStyle}
      >
        <Facebook size={16} strokeWidth={1.5} />
      </a>
      <button 
        onClick={copyLink}
        className={buttonStyle}
      >
        <Link2 size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}