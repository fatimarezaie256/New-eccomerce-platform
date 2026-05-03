"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function SearchButton() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Products"
        className="rounded-md"
      />
    </div>
  );
}

export default SearchButton;
