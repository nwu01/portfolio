import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import AboutMe from "../apps/AboutMe";

const Explorer = ({ isExplorerOpen, toggleExplorer, aboutMe, bounds }) => {
  const [page, setPage] = useState("About Me");
  const [icon, setIcon] = useState(null);
  const explorerRef = useRef(null);
  const [expandedDiv, setExpandedDiv] = useState(0);

  const handleDivClick = (divNumber) => {
    setExpandedDiv(divNumber === expandedDiv ? 0 : divNumber);
  };

  useEffect(() => {
    if (aboutMe === true) setIcon("home");
    else if (page === "Experience") setIcon("experience");
    else if (page === "Skills") setIcon("skills");
    else if (page === "Work") setIcon("projects");    
    else setIcon("user");
  }, [page, aboutMe]);

  return (
    <div
      className={`${
        isExplorerOpen ? "" : "hidden"
      } z-30 w-full h-screen pointer-events-none absolute`}
    >
      <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
        <div
          ref={explorerRef}
          className="window bg-black h-[45rem] w-[70.5rem] rounded-xl overflow-hidden border-neutral-700 border-[1.5px] pointer-events-auto"
        >
          <div className="title-bar">
            <div className="text-white h-9 w-full flex justify-end select-none">
              <div className="material-symbols-outlined hover:bg-neutral-800 w-11 flex justify-center items-center text-xl">
                minimize
              </div>
              <div className="material-symbols-outlined hover:bg-neutral-800 w-11 flex justify-center items-center text-sm">
                check_box_outline_blank
              </div>
              <div
                className="material-symbols-outlined hover:bg-red-700 w-12 flex justify-center items-center text-xl"
                onClick={toggleExplorer}
              >
                close
              </div>
            </div>
          </div>
          <div className="content text-white select-none">
            <div className="absolute bg-neutral-800 top-[6.5px] h-[2em] left-[6px] w-60 rounded-t-lg flex">
              <div className="flex justify-between items-center w-full">
                <div className="pl-2 text-xs flex">
                  <img
                    src={`/images/${icon}.png`}
                    alt="main icons"
                    className="w-5 h-5 mr-2"
                  />
                  {aboutMe === true ? "Home" : page}
                </div>
                <div className="material-symbols-outlined hover:hover:bg-neutral-700 my-0.5 mx-1 w-7 h-6 rounded-md flex justify-center items-center text-lg">
                  close
                </div>
              </div>
              <div className="material-symbols-outlined absolute left-60 ml-0.5 h-7 w-8 flex justify-center hover:bg-neutral-800 rounded-md items-center text-xl">
                add
              </div>
            </div>
            <div className="bg-neutral-800 w-full h-12 border-neutral-700 border-b-[1.5px] mt-1 flex">
              <div className="flex items-center justify-around w-48 py-2">
                <button
                  class={`material-symbols-outlined font-extralight text-2xl px-1 hover:bg-neutral-600 rounded-md hover:bg-opacity-50 ${
                    handleDivClick === !0 ? "opacity-45" : "font-bold"
                  }`}
                  onClick={() => handleDivClick(0)}
                >
                  arrow_back
                </button>
                <div class="material-symbols-outlined font-extralight text-2xl px-1 opacity-45">
                  arrow_forward
                </div>
                <div class="material-symbols-outlined font-extralight text-2xl px-1 hover:bg-neutral-600 rounded-md hover:bg-opacity-50">
                  arrow_upward
                </div>
                <div class="material-symbols-outlined font-extralight text-2xl px-1 hover:bg-neutral-600 rounded-md hover:bg-opacity-50">
                  refresh
                </div>
              </div>
              <div className="flex bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-2 mx-2 flex-grow gap-2 font-extralight">
                <div class="material-symbols-outlined font-extralight">
                  home
                </div>
                <div class="material-symbols-outlined font-extralight">
                  navigate_next
                </div>
                <div> {aboutMe === true ? "Home" : page}</div>
                <div class="material-symbols-outlined font-extralight">
                  navigate_next
                </div>
                <div>
                  {expandedDiv === 1 && "Technical Skills"}
                  {expandedDiv === 2 && "Soft Skills"}
                </div>
              </div>
              <div className="flex justify-between bg-neutral-700 bg-opacity-50 my-1.5 rounded-md items-center text-sm px-4 mr-3 w-[19.3em]">
                <div className="opacity-80">
                  Search {aboutMe === true ? "Home" : page}
                </div>
                <div class="material-symbols-outlined font-extralight text-lg">
                  search
                </div>
              </div>
            </div>
            <div className="bg-neutral-900 w-full h-[3.4rem] border-neutral-700 border-b-[1.5px] flex justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-24 h-full text-xs gap-1 border-neutral-700 border-r-[1.5px] opacity-45">
                  <img src="/images/new.png" alt="new" className="w-5 h-5" />
                  New
                  <div className="material-symbols-outlined text-sm">
                    expand_more
                  </div>
                </div>
                <div className="flex h-full w-72 justify-around items-center border-neutral-700 border-r-[1.5px] opacity-45">
                  <img
                    src="/images/cut.png"
                    alt="cut"
                    className="h-5 w-5 rotate-[-90deg]"
                  />
                  <img src="/images/copy.png" alt="copy" className="h-5 w-5" />
                  <img
                    src="/images/paste.png"
                    alt="paste"
                    className="h-7 w-7"
                  />
                  <img
                    src="/images/rename.png"
                    alt="rename"
                    className="h-5 w-5"
                  />
                  <img
                    src="/images/share.png"
                    alt="share"
                    className="h-5 w-5"
                  />
                  <img
                    src="/images/delete.png"
                    alt="delete"
                    className="h-5 w-5"
                  />
                </div>
                <div className="flex h-full items-center w-72 justify-around border-neutral-700 border-r-[1.5px]">
                  <div className="flex items-center justify-center h-full text-xs gap-1 opacity-45">
                    <img
                      src="/images/sort.png"
                      alt="sort"
                      className="w-5 h-5"
                    />
                    Sort
                    <div className="material-symbols-outlined text-sm">
                      expand_more
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-3/4 px-2 text-xs gap-1 opacity-80 hover:bg-neutral-700 rounded-md">
                    <img
                      src="/images/view.png"
                      alt="view"
                      className="w-5 h-5"
                    />
                    View
                    <div className="material-symbols-outlined text-sm">
                      expand_more
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-3/4 px-2 text-xs gap-1 opacity-80 hover:bg-neutral-700 rounded-md">
                    <img
                      src="/images/filter.png"
                      alt="filter"
                      className="w-5 h-5"
                    />
                    Filter
                    <div className="material-symbols-outlined text-sm">
                      expand_more
                    </div>
                  </div>
                </div>
                <div className="flex h-3/4 items-center justify-center ml-2 px-4 hover:bg-neutral-700 rounded-md">
                  <img
                    src="/images/dots.png"
                    alt="dots"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <div className="flex h-full items-center justify-center mr-4 text-xs ">
                <div className="flex h-3/4 items-center justify-center px-4 hover:bg-neutral-700 rounded-sm"><img
                  src="/images/details.png"
                  alt="details"
                  className="w-5 h-5 mr-1"
                />
                Details
              </div></div>
            </div>
            {aboutMe === true ? (
              <>
                <div className="flex flex-row h-full bg-neutral-900">
                  <div className="w-40 h-[100vh] pt-2 border-neutral-700 border-r-[1.5px] px-[2px]">
                    <div className="border-b-[1.5px] border-neutral-700 h-20">
                      <div className="flex items-center justify-center mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/home.png"
                          alt="details"
                          className="w-5 h-5 mr-2"
                        />
                        Home
                      </div>
                      <div className="flex items-center justify-center mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/gallery.png"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Gallery
                      </div>
                    </div>
                    <div className="mt-3.5 border-b-[1.5px] border-neutral-700 h-52">
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/Desktop.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Desktop
                        <div class="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                          keep
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/Downloads.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Downloads
                        <div class="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                          keep
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/Documents.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        <div class="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                          keep
                        </div>
                        Documents
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/Photos.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Pictures
                        <div class="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                          keep
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/Music.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Music
                        <div class="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                          keep
                        </div>
                      </div>
                      <div className="flex relative items-center pl-6 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm">
                        <img
                          src="/images/Videos.ico"
                          alt="details"
                          className="w-5 h-5 mr-1"
                        />
                        Videos
                        <div class="material-symbols-outlined absolute right-1 text-sm opacity-40 rotate-45">
                          keep
                        </div>
                      </div>
                    </div>
                    <div className="mt-3.5 border-b-[1.5px] border-neutral-700 h-52">
                      <div className="flex items-center pl-12 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm relative">
                        <img
                          src="/images/Computer.ico"
                          alt="details"
                          className="w-4 h-4 mr-1"
                        />
                        This PC
                        <div class="material-symbols-outlined absolute left-2 text-lg opacity-30">
                          chevron_right
                        </div>
                      </div>
                      <div className="flex items-center pl-12 mr-8 text-xs hover:bg-neutral-700 w-full h-8 rounded-sm relative">
                        <img
                          src="/images/Network.ico"
                          alt="details"
                          className="w-4 h-4 mr-1"
                        />
                        Network
                        <div class="material-symbols-outlined absolute left-2 text-lg opacity-30">
                          chevron_right
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-0 ml-5 mt-2">
                    <div className="flex items-center hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                      <div className="material-symbols-outlined text-2xl font-extralight">
                        expand_more
                      </div>
                      <div className="text-xs ml-3 mr-4">Quick access</div>
                    </div>
                    <div className="h-32 w-[87vh] mr-32 grid grid-cols-3 grid-rows-2">
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/Desktop.ico"
                          alt="Desktop"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Desktop
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <div class="material-symbols-outlined text-sm opacity-40 rotate-45">
                              keep
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/Downloads.ico"
                          alt="Downloads"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Downloads
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <div class="material-symbols-outlined text-sm opacity-40 rotate-45">
                              keep
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/Documents.ico"
                          alt="Documents"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Documents
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <div class="material-symbols-outlined text-sm opacity-40 rotate-45">
                              keep
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/Photos.ico"
                          alt="Pictures"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Pictures
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <div class="material-symbols-outlined text-sm opacity-40 rotate-45">
                              keep
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/Music.ico"
                          alt="Music"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Music
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <div class="material-symbols-outlined text-sm opacity-40 rotate-45">
                              keep
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center h-16 w-full hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                        <img
                          src="/images/Videos.ico"
                          alt="Videos"
                          className="w-14 h-14 mr-4"
                        />
                        <div className="text-xs">
                          Videos
                          <div>
                            <div className="font-light opacity-50">
                              Stored Locally
                            </div>
                            <div class="material-symbols-outlined text-sm opacity-40 rotate-45">
                              keep
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center hover:bg-neutral-700 rounded-md hover:bg-opacity-30">
                      <div className="material-symbols-outlined text-2xl font-extralight">
                        expand_more
                      </div>
                      <div className="text-xs ml-3 mr-4">Favourites</div>
                    </div>
                    <div className="text-xs m-2 ml-9 opacity-50 font-light">
                      After you've favourited some files, we'll show them here.
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 h-5 bg-neutral-900 w-full text-xs py-1 pl-2">
                  <div className="flex items-center justify-center w-16 border-r-[1.5px] h-full text-xs font-extralight">
                    6 items
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-row h-full bg-neutral-900">
                <div className="w-40 h-[100vh] pt-2 border-neutral-700 border-r-[1.5px] px-[2px]">
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "About Me"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("About Me");
                    }}
                  >
                    <img
                      src="/images/user.png"
                      alt="me"
                      className="w-5 h-5 mr-2.5"
                    />
                    About Me
                  </div>
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "Experience"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("Experience");
                    }}
                  >
                    <img
                      src="/images/experience.png"
                      alt="edu"
                      className="w-5 h-5 mr-2.5"
                    />
                    Experience
                  </div>
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "Skills"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("Skills");
                    }}
                  >
                    <img
                      src="/images/skills.png"
                      alt="skills"
                      className="w-5 h-5 mr-2.5"
                    />
                    Skills
                  </div>
                  <div
                    className={`flex items-center pl-2.5 mr-8 text-xs w-full h-8 rounded-sm ${
                      page === "Work"
                        ? "bg-gray-200 bg-opacity-80 text-neutral-900"
                        : "hover:bg-neutral-700 text-white"
                    }`}
                    onClick={() => {
                      setPage("Work");
                    }}
                  >
                    <img
                      src="/images/projects.png"
                      alt="Work"
                      className="w-5 h-5 mr-2.5"
                    />
                    Work
                  </div>
                </div>
                <AboutMe
                  page={page}
                  expandedDiv={expandedDiv}
                  handleDivClick={handleDivClick}
                />
              </div>
            )}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Explorer;
