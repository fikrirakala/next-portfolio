import React from "react";

export default function NotFound() {
  return (
    <section className="absolute bottom-0 left-0 right-0 top-0 flex flex-col pb-24 pt-40">
      <div className="container flex max-w-3xl grow items-center justify-center">
        <div className="flex items-center justify-center gap-5">
          <h1 className="text-2xl font-medium">404</h1>
          <div className="h-10 w-[1px] border-l"></div>
          <p className="text-sm">This page could not be found.</p>
        </div>
      </div>
    </section>
  );
}
