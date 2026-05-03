import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center flex-col">
      <Image src="/loader.gif" alt="please wait" height={40} width={40} />
    </div>
  );
}

export default Loading;
