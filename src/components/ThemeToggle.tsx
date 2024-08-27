"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? (
        <MoonIcon className="size-4" />
      ) : (
        <SunIcon className="size-4" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
