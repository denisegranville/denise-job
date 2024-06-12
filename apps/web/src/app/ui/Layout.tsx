import React from "react";

interface HeaderProps {
  mainTitle?: string
  blurb?: string
}

function Header({mainTitle, blurb}: HeaderProps) {
  return (
    <div
      className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mb-4 justify-between">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex items-center justify-between gap-8 mb-8">
          <div>
            <h5
              className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {mainTitle}
            </h5>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              {blurb}
            </p>
          </div>

        </div>
      </div>
    </div>);
}

const Layout = ({children, mainTitle, blurb}: {
  children: React.ReactNode,
  mainTitle: string,
  blurb: string | undefined
}) => {
  return (
    <div>
      <Header mainTitle={mainTitle} blurb={blurb}/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
