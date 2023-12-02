const PortfolioCard = () => {
  const FindFriendsCard = () => {
    return (
      <div className="bg-white rounded-xl p-4 text-xs w-[300px] relative overflow-hidden">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center ">
            <h2 className="font-bold  text-[#222222]">Find friends</h2>
            <p>5 players</p>
          </div>
          <div className="flex justify-between ">
            <div className="flex relative flex-1">
              <img
                src="/avatar.png"
                alt=""
                className="w-8 h-8 bg-[#f5f5f5] absolute rounded-full"
              />
              <img
                src="/avatar.png"
                alt=""
                className="w-8 h-8 bg-[#f5f5f5] absolute left-5 rounded-full"
              />
              <img
                src="/avatar.png"
                alt=""
                className="w-8 h-8 bg-[#f5f5f5] absolute left-10 rounded-full"
              />
              <div
                alt=""
                className="w-8 h-8 bg-[#f5f5f5] absolute left-[3.75rem] rounded-full flex items-center justify-center"
              >
                +2
              </div>
            </div>
            <button className="p-1 bg-[#f5f5f5] w-max rounded-full px-2 pr-1">
              find friends
              <svg
                width="168"
                height="167"
                viewBox="0 0 168 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline align-middle ml-2 w-5 h-5"
              >
                <path
                  d="M90.97 48.9167H77.1036V76.6495H49.3708V90.5159H77.1036V118.249H90.97V90.5159H118.703V76.6495H90.97V48.9167ZM84.0368 14.2507C45.7656 14.2507 14.7048 45.3115 14.7048 83.5827C14.7048 121.854 45.7656 152.915 84.0368 152.915C122.308 152.915 153.369 121.854 153.369 83.5827C153.369 45.3115 122.308 14.2507 84.0368 14.2507ZM84.0368 139.048C53.4614 139.048 28.5712 114.158 28.5712 83.5827C28.5712 53.0073 53.4614 28.1171 84.0368 28.1171C114.612 28.1171 139.502 53.0073 139.502 83.5827C139.502 114.158 114.612 139.048 84.0368 139.048Z"
                  fill="#6D6D6D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold  text-[#222222]">Other members</h2>
            <p>8 players</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center border-b border-[#f5f5f5] py-1">
              <div className="flex gap-2 items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-8 h-8 bg-[#f5f5f5] rounded-full"
                />
                <div className="">
                  <p className="text-[#222222]">Ali Corak</p>
                  <p>@ali</p>
                </div>
              </div>
              <button>
                <svg
                  width="167"
                  height="167"
                  viewBox="0 0 167 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 rounded-full  p-1 bg-[#f5f5f5]"
                >
                  <path
                    d="M124.798 90.1316H90.1316V124.798C90.1316 128.611 87.0117 131.731 83.1984 131.731C79.3852 131.731 76.2652 128.611 76.2652 124.798V90.1316H41.5992C37.786 90.1316 34.666 87.0117 34.666 83.1984C34.666 79.3852 37.786 76.2652 41.5992 76.2652H76.2652V41.5992C76.2652 37.786 79.3852 34.666 83.1984 34.666C87.0117 34.666 90.1316 37.786 90.1316 41.5992V76.2652H124.798C128.611 76.2652 131.731 79.3852 131.731 83.1984C131.731 87.0117 128.611 90.1316 124.798 90.1316Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center border-b border-[#f5f5f5] py-1">
              <div className="flex gap-2 items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-8 h-8 bg-[#f5f5f5] rounded-full"
                />
                <div className="">
                  <p className="text-[#222222]">Sarah Thompson</p>
                  <p>@sarah</p>
                </div>
              </div>
              <button>
                <svg
                  width="167"
                  height="167"
                  viewBox="0 0 167 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 rounded-full  p-1 bg-[#222222]"
                >
                  <path
                    d="M63.2372 112.494L39.179 88.4356C36.4751 85.7316 32.1072 85.7316 29.4032 88.4356C26.6993 91.1395 26.6993 95.5075 29.4032 98.2114L58.384 127.192C61.0879 129.896 65.4558 129.896 68.1598 127.192L141.513 53.8389C144.217 51.135 144.217 46.7671 141.513 44.0631C138.809 41.3592 134.441 41.3592 131.737 44.0631L63.2372 112.494Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center border-b border-[#f5f5f5] py-1">
              <div className="flex gap-2 items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-8 h-8 bg-[#f5f5f5] rounded-full"
                />
                <div className="">
                  <p className="text-[#222222]">Racheal Lee</p>
                  <p>@leeracheal</p>
                </div>
              </div>
              <button>
                <svg
                  width="167"
                  height="167"
                  viewBox="0 0 167 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 rounded-full  p-1 bg-[#f5f5f5]"
                >
                  <path
                    d="M124.798 90.1316H90.1316V124.798C90.1316 128.611 87.0117 131.731 83.1984 131.731C79.3852 131.731 76.2652 128.611 76.2652 124.798V90.1316H41.5992C37.786 90.1316 34.666 87.0117 34.666 83.1984C34.666 79.3852 37.786 76.2652 41.5992 76.2652H76.2652V41.5992C76.2652 37.786 79.3852 34.666 83.1984 34.666C87.0117 34.666 90.1316 37.786 90.1316 41.5992V76.2652H124.798C128.611 76.2652 131.731 79.3852 131.731 83.1984C131.731 87.0117 128.611 90.1316 124.798 90.1316Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center border-b border-[#f5f5f5] py-1">
              <div className="flex gap-2 items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-8 h-8 bg-[#f5f5f5] rounded-full"
                />
                <div className="">
                  <p className="text-[#222222]">Amber Patel</p>
                  <p>@patel</p>
                </div>
              </div>
              <button>
                <svg
                  width="167"
                  height="167"
                  viewBox="0 0 167 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 rounded-full  p-1 bg-[#222222]"
                >
                  <path
                    d="M63.2372 112.494L39.179 88.4356C36.4751 85.7316 32.1072 85.7316 29.4032 88.4356C26.6993 91.1395 26.6993 95.5075 29.4032 98.2114L58.384 127.192C61.0879 129.896 65.4558 129.896 68.1598 127.192L141.513 53.8389C144.217 51.135 144.217 46.7671 141.513 44.0631C138.809 41.3592 134.441 41.3592 131.737 44.0631L63.2372 112.494Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 items-center">
                <img
                  src="/avatar.png"
                  alt=""
                  className="w-8 h-8 bg-[#f5f5f5] rounded-full"
                />
                <div className="">
                  <p className="text-[#222222]">Ali Corak</p>
                  <p>@ali</p>
                </div>
              </div>
              <button>
                <svg
                  width="167"
                  height="167"
                  viewBox="0 0 167 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 rounded-full  p-1 bg-[#f5f5f5]"
                >
                  <path
                    d="M124.798 90.1316H90.1316V124.798C90.1316 128.611 87.0117 131.731 83.1984 131.731C79.3852 131.731 76.2652 128.611 76.2652 124.798V90.1316H41.5992C37.786 90.1316 34.666 87.0117 34.666 83.1984C34.666 79.3852 37.786 76.2652 41.5992 76.2652H76.2652V41.5992C76.2652 37.786 79.3852 34.666 83.1984 34.666C87.0117 34.666 90.1316 37.786 90.1316 41.5992V76.2652H124.798C128.611 76.2652 131.731 79.3852 131.731 83.1984C131.731 87.0117 128.611 90.1316 124.798 90.1316Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-gradient-to-b from-white/0 to-60% to-[#f5f5f5] p-3">
          <div className="flex items-center text-white text-[0.6rem] pl-2 p-1  pr-0  bg-[#222222] rounded-full  ">
            <p>2 requests sent</p>
            <div className="flex relative  w-12">
              <img
                src="/avatar.png"
                alt=""
                className="w-5 h-5 bg-[#f5f5f5] relative left-2 rounded-full"
              />
              <img
                src="/avatar.png"
                alt=""
                className="w-5 h-5 bg-[#f5f5f5]  rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 border-gray-400 gap-4 shadow-sm text-[#828282] max-w-[750px] grid grid-cols-2 text-sm font-poppins">
      <div className="col-span-1 flex flex-col gap-4">
        <div className="w-8 h-8 bg-gradient-to-tr rounded-lg from-gray-200 to-[#f5f5f5]" />
        <h1 className="text-xl font-bold text-[#222222]">product design</h1>
        <p className="">
          Seize attention and boost conversions with a design meticulously
          tailored to leave a lasting impact on your audience
        </p>
        <button className="p-2 bg-[#E6F3D9] w-max  text-[#8DC74E] rounded-full px-4">
          contact
        </button>
      </div>
      <div className="col-span-1 flex flex-col gap-4 items-end justify-between">
        <span className="rounded-full px-4 py-1 border-[#f5f5f5]  border-dashed border-2 italic">
          *starts from ₦75,000
        </span>
        <ul className=" w-full flex flex-col gap-2 p-2 pl-3 border-l  border-[#f5f5f5]">
          <li>
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline align-middle mr-1 w-5 h-5"
            >
              <path
                d="M90.0439 14.966C48.8654 14.966 15.4452 48.3862 15.4452 89.5647C15.4452 130.743 48.8654 164.163 90.0439 164.163C131.222 164.163 164.643 130.743 164.643 89.5647C164.643 48.3862 131.222 14.966 90.0439 14.966ZM90.0439 149.244C57.1459 149.244 30.3649 122.463 30.3649 89.5647C30.3649 56.6667 57.1459 29.8858 90.0439 29.8858C122.942 29.8858 149.723 56.6667 149.723 89.5647C149.723 122.463 122.942 149.244 90.0439 149.244ZM124.285 56.5921L75.1242 105.753L55.8031 86.5062L45.2847 97.0246L75.1242 126.864L134.803 67.1851L124.285 56.5921Z"
                fill="#828282"
              />
            </svg>
            web app
          </li>
          <li>
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline align-middle mr-1 w-5 h-5"
            >
              <path
                d="M90.0439 14.966C48.8654 14.966 15.4452 48.3862 15.4452 89.5647C15.4452 130.743 48.8654 164.163 90.0439 164.163C131.222 164.163 164.643 130.743 164.643 89.5647C164.643 48.3862 131.222 14.966 90.0439 14.966ZM90.0439 149.244C57.1459 149.244 30.3649 122.463 30.3649 89.5647C30.3649 56.6667 57.1459 29.8858 90.0439 29.8858C122.942 29.8858 149.723 56.6667 149.723 89.5647C149.723 122.463 122.942 149.244 90.0439 149.244ZM124.285 56.5921L75.1242 105.753L55.8031 86.5062L45.2847 97.0246L75.1242 126.864L134.803 67.1851L124.285 56.5921Z"
                fill="#828282"
              />
            </svg>
            mobile app
          </li>
          <li>
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline align-middle mr-1 w-5 h-5"
            >
              <path
                d="M90.0439 14.966C48.8654 14.966 15.4452 48.3862 15.4452 89.5647C15.4452 130.743 48.8654 164.163 90.0439 164.163C131.222 164.163 164.643 130.743 164.643 89.5647C164.643 48.3862 131.222 14.966 90.0439 14.966ZM90.0439 149.244C57.1459 149.244 30.3649 122.463 30.3649 89.5647C30.3649 56.6667 57.1459 29.8858 90.0439 29.8858C122.942 29.8858 149.723 56.6667 149.723 89.5647C149.723 122.463 122.942 149.244 90.0439 149.244ZM124.285 56.5921L75.1242 105.753L55.8031 86.5062L45.2847 97.0246L75.1242 126.864L134.803 67.1851L124.285 56.5921Z"
                fill="#828282"
              />
            </svg>
            <span className="p-2 bg-[#f5f5f5] w-max rounded-lg py-1">
              <svg
                width="33"
                height="48"
                viewBox="0 0 33 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline align-middle mr-2 w-3 h-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.64012 0H23.9999C28.7695 0 32.64 3.8705 32.64 8.64006C32.64 11.9825 30.7392 14.8832 27.9603 16.3199C30.7392 17.7567 32.64 20.6576 32.64 23.9999C32.64 28.7695 28.7695 32.64 23.9999 32.64C21.2868 32.64 18.8646 31.3876 17.2802 29.4298V39.3599C17.2802 44.1295 13.4097 48 8.64012 48C3.87054 48 0 44.1295 0 39.3599C0 36.0175 1.90078 33.1167 4.67971 31.6799C1.90078 30.2432 0 27.3423 0 23.9999C0 20.6576 1.90076 17.7567 4.67966 16.3199C1.90077 14.8832 0 11.9825 0 8.64006C0 3.8705 3.87054 0 8.64012 0ZM1.92 8.64006C1.92 4.9309 4.93091 1.92 8.64012 1.92H15.3598V15.3599H8.64012L8.61929 15.3599C4.91962 15.3487 1.92 12.3422 1.92 8.64006ZM15.3602 23.9086C15.3599 23.939 15.3598 23.9694 15.3598 23.9999C15.3598 24.0304 15.3599 24.0609 15.3602 24.0913V30.7198H8.64008C4.93091 30.72 1.92 27.7091 1.92 23.9999C1.92 20.2977 4.91974 17.2911 8.61946 17.2799L8.64012 17.2799H15.3598L15.3602 23.9086ZM17.2802 24.0804V23.9195C17.3233 20.2565 20.3026 17.2947 23.9723 17.2799H23.9999C24.0068 17.2799 24.0137 17.2799 24.0205 17.2799C27.7203 17.2911 30.72 20.2977 30.72 23.9999C30.72 27.7091 27.7091 30.72 23.9999 30.72C20.3175 30.72 17.3234 27.7526 17.2802 24.0804ZM18.5705 17.2799C18.0965 17.6635 17.6638 18.0961 17.2802 18.5701V17.2799H18.5705ZM24.0207 15.3599C24.0138 15.3599 24.0068 15.3599 23.9999 15.3599C23.9894 15.3599 23.9789 15.3599 23.9684 15.3599H17.2802V1.92H23.9999C27.7091 1.92 30.72 4.9309 30.72 8.64006C30.72 12.3422 27.7204 15.3487 24.0207 15.3599ZM8.64012 32.6399C4.93091 32.6399 1.92 35.6508 1.92 39.3599C1.92 43.0691 4.93091 46.08 8.64012 46.08C12.3493 46.08 15.3602 43.0691 15.3602 39.3599V32.6399H8.64012Z"
                  fill="#6d6d6d"
                />
              </svg>
              Figma
            </span>{" "}
            components and style guide
          </li>
        </ul>
        <button className="p-2 bg-[#f5f5f5] w-max rounded-full px-4">
          close works
          <svg
            width="133"
            height="79"
            viewBox="0 0 133 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline align-middle ml-3 w-5 h-2"
          >
            <path
              d="M20.483 74.833L66.2215 29.0944L111.96 74.833C116.558 79.4304 123.984 79.4304 128.582 74.833C133.179 70.2355 133.179 62.8089 128.582 58.2115L74.4733 4.10323C69.8759 -0.494207 62.4493 -0.494207 57.8519 4.10323L3.74361 58.2115C-0.853826 62.8089 -0.853826 70.2355 3.74361 74.833C8.34104 79.3125 15.8855 79.4304 20.483 74.833Z"
              fill="#6D6D6D"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-2 pt-4  border-t border-[#f5f5f5]">
        <div className="bg-[#e6e6e6] w-full rounded-xl h-[450px]  bg-gradient-to-bl border flex justify-center items-center border-gray-200 relative  from-gray-200 to-[#f5f5f5]">
          <FindFriendsCard />
          <div className="flex gap-5 absolute right-5 bottom-5">
            <button>
              <svg
                width="167"
                height="167"
                viewBox="0 0 167 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 rounded-full shadow-lg p-2 bg-white"
              >
                <path
                  d="M101.987 46.5216C99.2833 43.8177 94.9154 43.8177 92.2115 46.5216L60.3881 78.345C57.6841 81.0489 57.6841 85.4169 60.3881 88.1208L92.2115 119.944C94.9154 122.648 99.2833 122.648 101.987 119.944C104.691 117.24 104.691 112.872 101.987 110.168L75.0865 83.1982L101.987 56.2974C104.691 53.5935 104.622 49.1562 101.987 46.5216Z"
                  fill="#828282"
                />
              </svg>
            </button>

            <button>
              <svg
                width="167"
                height="167"
                viewBox="0 0 167 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 rounded-full shadow-lg p-2 bg-white"
              >
                <path
                  d="M64.4098 46.5219C61.7058 49.2259 61.7058 53.5938 64.4098 56.2978L91.3106 83.1986L64.4098 110.099C61.7058 112.803 61.7058 117.171 64.4098 119.875C67.1137 122.579 71.4817 122.579 74.1856 119.875L106.009 88.0518C108.713 85.3479 108.713 80.9799 106.009 78.276L74.1856 46.4526C71.551 43.818 67.1137 43.818 64.4098 46.5219Z"
                  fill="#828282"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
