import Image from "next/image";

export default function Loading() {
    return (
      <div className="flex h-screen items-center bg-maroon justify-center z-10!important">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="loader z-20!important">
            {/* <Image src="/logo/LogotypeIcon-01.png" width={150} height={150} alt="Logo 7Sundays Network"/> */}
          </div>
        </div>
      </div>
    );
  }