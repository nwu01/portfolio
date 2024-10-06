import React, { useRef, useCallback } from "react";
import Draggable from "react-draggable";

const TitleBar = ({ toggleBrowser }) => (
  <div className="title-bar">
    <div className="text-white h-[2.40rem] w-full flex justify-end select-none">
      <div
        className="material-symbols-outlined hover:bg-neutral-800  w-11 flex justify-center items-center text-xl"
        onClick={toggleBrowser}
      >
        minimize
      </div>
      <div className="material-symbols-outlined hover:bg-neutral-800  w-11 flex justify-center items-center text-sm">
        check_box_outline_blank
      </div>
      <div
        className="material-symbols-outlined hover:bg-red-700 w-12 flex justify-center items-center text-xl"
        onClick={toggleBrowser}
      >
        close
      </div>
    </div>
  </div>
);

const AddressBar = () => (
  <div className="flex bg-neutral-800 w-full h-11 border-neutral-700 border-b-[1.5px]">
    <div className="flex py-2 w-fit justify-around">
      <div className="material-symbols-outlined font-extralight text-xl flex items-center mx-1 px-1 opacity-45">
        arrow_back
      </div>
      <div className="material-symbols-outlined font-extralight text-xl flex items-center mx-1 px-1 opacity-45">
        arrow_forward
      </div>
      <div className="material-symbols-outlined font-extralight text-xl flex items-center mx-1 px-1 hover:bg-neutral-600 rounded-full hover:bg-opacity-50">
        refresh
      </div>
      <div className="material-symbols-outlined font-extralight text-xl flex items-center mx-1 px-1 hover:bg-neutral-600 rounded-full hover:bg-opacity-50">
        home
      </div>
    </div>
    <div className="w-full my-1.5 rounded-full bg-neutral-700 relative">
      <div className="opacity-50 text-left pl-3 flex items-center h-full">
        <span className="material-symbols-outlined text-[20px] pr-3">
          search
        </span>
        Search Google or type a URL
      </div>
      <div className="absolute right-2 top-0 text-lg opacity-80 material-symbols-outlined">
        star
      </div>
    </div>
    <div className="avatar placeholder flex justify-center items-center ml-6">
      <div className="bg-blue-500 text-white rounded-full w-6 h-6">
        <div className="text-white text-md font-normal">N</div>
      </div>
      <div className="material-symbols-outlined font-extralight opacity-80 p-1 mx-2 hover:bg-neutral-600 rounded-full hover:bg-opacity-50">
        more_vert
      </div>
    </div>
    {/* <img src="/images/options/dots.png" alt="options" className="h-4 w-4 rotate-90 m-2.5 opacity-60" />
     */}
  </div>
);

const TabBar = () => (
  <div className="absolute bg-neutral-800 top-[5.5px] h-[2em] left-[6px] w-60 rounded-t-lg flex">
    <div className="flex justify-between items-center w-full">
      <div className="pl-2 text-sm">New Tab</div>
      <div className="material-symbols-outlined hover:bg-neutral-700 m-0.5 w-6 h-6 rounded-full flex justify-center items-center text-lg">
        close
      </div>
    </div>
    <div className="material-symbols-outlined absolute left-60 ml-0.5 h-8 w-8 flex justify-center hover:bg-neutral-800 rounded-full items-center text-xl">
      add
    </div>
  </div>
);

function Browser({ isAppOpen, toggleBrowser, bounds }) {
  const explorerRef = useRef(null);
  const homeUrl = "https://www.google.com/webhp?igu=1";

  const handleCloseBrowser = useCallback(() => {
    toggleBrowser();
  }, [toggleBrowser]);

  return (
    <>
      <div
        className={`${
          isAppOpen ? "" : "hidden"
        } z-30 w-full h-screen pointer-events-none absolute`}
      >
        <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
          <div
            ref={explorerRef}
            className="window bg-black h-[47rem] w-4/5 rounded-xl overflow-hidden border-neutral-700 border-[1.5px] pointer-events-auto"
          >
            <TitleBar toggleBrowser={handleCloseBrowser} />
            <div className="content text-white select-none text-center">
              <TabBar />
              <AddressBar />
              <div className="h-[50em]">
                <div className="h-full w-full flex flex-col flex-grow">
                  <iframe
                    src={homeUrl}
                    className="flex-grow"
                    id="chrome-screen"
                    title="Google Chrome"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
}

export default Browser;
