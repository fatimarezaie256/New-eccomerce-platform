import Image from "next/image";
import React from "react";
import { APP_NAME } from "../../constants";

function NotFound() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="shadow-md border p-4 flex items-center flex-col justify-center space-y-3.5 rounded-md">
        <Image src="/logo.svg" alt={APP_NAME} height={52} width={52} />
        <p className="text-destructive text-base font-medium">Not Found</p>
        <p className="text-xs ">The page you are looking for is not found!</p>
      </div>
    </div>
  );
}

export default NotFound;
