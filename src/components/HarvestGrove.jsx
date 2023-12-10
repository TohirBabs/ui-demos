const HarvestGrove = () => {
  const navLinks = [
    "explore",
    "services",
    "individuals",
    "business",
    "blog",
    "FAQs",
  ];

  return (
    <div className=" min-h-screen overflow-hidden font-poppins relative">
      <header className="w-full h-[4.2rem] flex items-center absolute top-0 justify-between px-20 border-b-[#090909]/10 border">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0659 15.4295C16.0457 16.6572 21.3213 16.6056 21.3213 16.6056C21.3213 16.6056 21.3606 18.1668 19.2302 20.6526C16.4843 23.8577 10.5493 25.0435 8.57548 21.4005C8.32029 20.9455 8.17135 20.4392 8.13972 19.9192C8.1081 19.3991 8.19459 18.8787 8.39278 18.3965C8.6228 18.8916 8.92855 19.3483 9.29914 19.7503C9.94264 20.4422 10.7243 20.9929 11.5942 21.3671C10.8869 20.8643 10.2363 20.2871 9.65377 19.6454C9.23578 19.1325 8.91499 18.5484 8.70706 17.9215L9.09637 17.4016C10.0148 18.3667 11.0341 19.2316 12.137 19.9817C12.7939 20.4849 13.5678 20.8152 14.3871 20.9422C13.5994 20.7037 12.8672 20.3118 12.2331 19.7894C11.2185 18.9103 10.3178 17.9091 9.55188 16.8089C9.90284 16.3622 10.282 15.8975 10.6801 15.4054C11.2967 15.8402 11.9645 16.1985 12.6684 16.4724C13.5579 16.7964 14.4995 16.9559 15.4466 16.9429C14.5457 16.7133 13.6602 16.4273 12.7955 16.0866C12.1521 15.8218 11.58 15.4107 11.1251 14.8864C11.8645 13.9752 12.6502 13.0647 13.4453 12.1544C13.9642 12.4642 14.527 12.6945 15.1149 12.8375C15.6644 12.9893 16.2472 12.9732 16.7873 12.7912C16.2378 12.743 15.6968 12.6255 15.1771 12.4415C14.6953 12.2705 14.2631 11.9843 13.9186 11.6082C14.9882 10.3792 20.0685 4.71012 20.0685 4.71012L15.3448 9.59097C14.975 8.69408 14.7009 7.76109 14.527 6.80732C14.4386 6.12443 14.4688 5.43153 14.6164 4.75887C14.6164 4.75887 14.4834 5.50463 14.4096 6.60225C14.4426 7.74167 14.6269 8.87179 14.9579 9.96319L12.0577 12.9534C11.5539 12.1507 11.1144 11.3099 10.7433 10.4386C10.2423 9.10775 9.83652 7.74338 9.52896 6.35568C9.60402 7.66327 9.83843 8.957 10.227 10.2085C10.6012 11.3106 11.065 12.3805 11.6138 13.4078L9.60162 15.48C8.68844 14.5585 7.85079 13.5658 7.09668 12.5116C6.45475 11.2615 5.89285 9.97234 5.41436 8.65182C5.60416 10.0713 6.06378 11.4421 6.7687 12.6909C7.67324 14.1555 8.66348 15.4923 9.07244 16.0346L8.41116 16.7162C7.35232 16.2933 6.37065 15.7 5.50552 14.9601C4.44857 13.901 3.49148 12.7478 2.64626 11.5149C3.32702 12.8659 4.18373 14.1219 5.19428 15.2505C6.00204 15.9805 6.89222 16.6149 7.84697 17.1409C7.72755 17.2498 7.60518 17.3493 7.47988 17.4396C6.83513 17.5458 6.17429 17.5001 5.55047 17.3063C4.94701 17.0477 4.39601 16.6819 3.92451 16.2268C4.30596 16.8291 4.85669 17.3069 5.50847 17.6011C5.88568 17.776 6.28791 17.8916 6.70079 17.9439C2.55924 20.1842 -0.854359 14.8739 0.476198 10.2049C1.53039 6.52871 5.67221 3.14341 5.67221 3.14341C5.52782 4.37798 5.59516 5.62801 5.87137 6.84026C6.32678 8.50987 7.54078 11.4847 9.0384 11.3339C10.536 11.1831 6.2453 6.12617 6.83378 3.0979C7.33096 0.539049 12.6299 0.201529 12.6299 0.201529C12.2316 0.378915 11.8775 0.641365 11.5928 0.970229C11.3081 1.29909 11.0998 1.68629 10.9827 2.1043C10.4486 3.51753 11.5114 8.34591 12.6681 8.5958C14.1681 8.86058 11.092 3.36192 13.7924 1.22717C15.3355 0.00599308 17.362 1.57219 18.9595 2.12483C20.0127 2.45336 21.1311 2.51934 22.2159 2.31695C22.2159 2.31695 22.2855 3.16762 22.3746 5.08974C22.4636 7.01187 23.6307 8.32384 22.6736 9.49002C21.7164 10.6562 18.1894 9.97946 18.5162 11.0006C18.843 12.0217 22.7861 10.5538 22.7861 10.5538C22.7861 10.5538 22.7709 11.4769 22.6431 13.5986C22.5153 15.7203 16.0945 14.2572 16.0659 15.4295Z"
                fill="#0EA91E"
              />
            </svg>
            <h1 className="uppercase font-bold font-poppins">harvestgrove</h1>
          </div>
          <nav className="flex gap-5 text-sm ">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="/"
                className="capitalize text-black/80 hover:text-black"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex">
          <button className="h-12 rounded-full px-7 border border-black text-sm">
            Contact us
          </button>
          <button className="h-12 rounded-full px-3 border border-black text-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.63605 18.364L18.364 5.63604M18.364 5.63604V14.1213M18.364 5.63604H9.87869"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="w-screen">
        <div className=" flex items-center relative pt-20 pb-5 h-screen w-[95vw] max-w-[1500px] mx-auto">
          <div className="absolute right-[25%] top-20 bg-white w-[50%] min-w-[700px] h-[180px] flex items-left justify-center flex-col text-left  p-6 text-[3.7rem] font-medium capitalize rounded-bl-3xl">
            <div className="absolute top-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_white]"></div>
            <div className="absolute top-0 -left-12 z-10  w-12 h-6 bg-transparent rounded-tr-3xl shadow-[2rem_0px_0px_0px_white]"></div>
            <div className="absolute bottom-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-bl-3xl shadow-[-2rem_0px_0px_0px_white]"></div>
            <p className="leading-[4.7rem] font-bold">nurturing nature,</p>
            <p className="leading-[4.7rem] font-bold">harvesting excellence</p>
          </div>
          <div className="absolute left-[35%] max-w-[50%] top-[260px] bg-white h-[140px]   p-3 px-8  text-sm rounded-bl-3xl rounded-tr-3xl ">
            {/* <div className="absolute top-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_white]"></div> */}
            <div className="absolute top-0 -left-12 z-10  w-12 h-6 bg-transparent rounded-tr-3xl shadow-[1.5rem_0px_0px_0px_white]"></div>
            <div className="absolute bottom-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-bl-3xl shadow-[-2rem_0px_0px_0px_white]"></div>
            <p className="leading-[1.7rem] text-sm">
              At HarvestGrove, we are passionate about agriculture and committed
              to providing the highest quality produce and services to our
              customers. With a legacy of farming excellence spanning 10 years,
            </p>
          </div>
          <div className="absolute right-0 w-[50%] top-[400px] bg-white   p-5 pt-12 text-sm rounded-bl-3xl  ">
            {/* <div className="absolute top-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_white]"></div> */}
            <div className="absolute top-0 -left-12 z-10  w-12 h-6 bg-transparent rounded-tr-3xl shadow-[2rem_0px_0px_0px_white]"></div>
            <div className="absolute -top-12 right-0 z-10  w-6 h-12 bg-transparent rounded-br-3xl shadow-[0rem_2rem_0px_0px_white]"></div>
            <div className="absolute -bottom-12 right-0 z-10  w-6 h-12 bg-transparent rounded-tr-3xl shadow-[0rem_-2rem_0px_0px_white]"></div>
            <div className="flex p-2 rounded-full border border-gray-400 w-max gap-3">
              <div className="flex relative w-20 items-center">
                <img src="/avt1.png" alt="" className="w-12 h-12 " />
                <img
                  src="/avt2.png"
                  alt=""
                  className="w-12 h-12   absolute left-6"
                />
                <img
                  src="/avt3.png"
                  alt=""
                  className="w-12 h-12   absolute left-12"
                />
              </div>
              <div className="px-3">
                <p className="font-semibold text-2xl">200k</p>
                <p className="capitalize text-xs">happy customers</p>
              </div>
            </div>
          </div>
          <div className="bg-white absolute bottom-[15%] left-10  rounded-3xl p-2">
            <img src="/cardimg.png" alt="" className="rounded-2xl" />
            <div className="flex flex-col gap-3 py-4 p-3">
              <div className="bg-gray-200 h-3 rounded"></div>
              <div className="bg-gray-200 h-3 rounded w-[90%]"></div>
              <div className="bg-gray-200 h-3 rounded w-[80%]"></div>
            </div>
            <div className="flex items-center p-2 gap-2 border-t">
              <img src="/avtcard.png" alt="" className="rounded-2xl" />
              <div className="capitalize">
                <p className=" font-bold text-sm">recce eunice</p>
                <p className="text-xs">rural roots ranch</p>
              </div>
            </div>
          </div>
          <img
            src="/bg.png"
            alt=""
            className="rounded-3xl w-full object-cover h-full mx-auto"
          />
        </div>
      </div>
      <div className="w-[85%] mx-auto text-center p-20">
        <p className="uppercase text-4xl font-medium leading-[3.8rem]">
          Our journey began 2013,
          <img
            className="inline-block h-[3.2rem] align-middle w-[200px] rounded-full mx-1 object-cover"
            src="/flatimg.png"
            alt=""
          />
          when a group of dedicated farmers set out to create a farm .
          <img
            className="inline-block h-[3.2rem] align-middle w-[150px] rounded-full mx-1 object-cover"
            src="/flatimg2.png"
            alt=""
          />{" "}
          that would not only yield bountiful harvests but also nourish the
          community.
        </p>
      </div>
      <div className="w-[95vw] flex relative max-w-[1200px] mx-auto py-10">
        <div className="bg-slate-100 flex  items-end rounded-3xl w-[60%]">
          <img src="sectimg1.png" alt="" className="h-[450px]" />
          <div className="flex p-8">
            <button className="h-12 rounded-full px-7 border border-black text-sm">
              Contact us
            </button>
            <button className="h-12 rounded-full px-3 border border-black text-sm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.63605 18.364L18.364 5.63604M18.364 5.63604V14.1213M18.364 5.63604H9.87869"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute right-0 p-10 w-[60%] flex flex-col gap-8 items-end">
          <p className="text-2xl font-medium leading-10">
            Our diverse range of crops, from succulent fruits to crisp
            vegetables, showcases the fertile abundance of our land. Every
            product is carefully nurtured, handpicked, and delivered to you at
            its peak freshness.
          </p>
          <p className="text-sm w-[65%] leading-[1.7rem]">
            We take pride in our eco-friendly farming practices that prioritize
            soil health and environmental sustainability. From organic
            fertilizers to water-saving techniques, we&#39;re dedicated to
            nurturing the land that feeds us.
          </p>
        </div>
      </div>
      <div className="w-[95vw]  relative max-w-[1200px] mx-auto py-10 ">
        <div className="flex justify-between">
          <p className="text-5xl font-bold leading-[3.5rem]">
            We Provide <br /> Fresh Agro Product
          </p>
          <div className="flex text-sm flex-col leading-[1.7rem] gap-3 w-[30%]">
            <p>
              Over the years, our commitment to sustainable farming methods and
              innovation has allowed us to grow into the trusted agricultural
              hub we are today.
            </p>
            <div className="flex">
              <button className="h-12 rounded-full px-7 border border-black text-sm">
                Shop now
              </button>
              <button className="h-12 rounded-full px-3 border border-black text-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.63605 18.364L18.364 5.63604M18.364 5.63604V14.1213M18.364 5.63604H9.87869"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <div className="p-3 rounded-3xl bg-slate-100 w-[32%] flex flex-col gap-2">
            <img src="/slide1.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">premium produce</p>
            <p className="text-sm leading-[1.2rem] px-2">
              Our diverse range of crops, from succulent fruits to crisp
              vegetables, showcases the fertile abundance of our land.
            </p>
          </div>
          <div className="p-3 rounded-3xl bg-slate-100 w-[32%] flex flex-col gap-2">
            <img src="/slide2.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">sustainable farming</p>
            <p className="text-sm leading-[1.2rem] px-2">
              We take pride in our eco-friendly farming practices that
              prioritize soil health and environmental sustainability.
            </p>
          </div>{" "}
          <div className="p-3 rounded-3xl bg-slate-100 w-[32%] flex flex-col gap-2">
            <img src="/slide3.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">
              farm-to-table experience
            </p>
            <p className="text-sm leading-[1.2rem] px-2">
              We offer a unique farm-to-table experience. Visit our farm, pick
              your own produce, & enjoy the farm-fresh taste that&#39;s second
              to none.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95vw]  relative max-w-[1200px] mx-auto py-10 ">
        <div className="flex justify-between">
          <p className="text-5xl font-bold leading-[3.5rem] capitalize  ">
            cultivating a future <br />{" "}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block align-middle mx-2"
            >
              <rect
                x="0.75"
                y="0.75"
                width="62.5"
                height="62.5"
                rx="31.25"
                stroke="#090909"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <path
                d="M39.5623 38.4302C39.5264 40.6129 48.9053 40.5211 48.9053 40.5211C48.9053 40.5211 48.9752 43.2965 45.1878 47.7157C40.3062 53.4137 29.755 55.5218 26.246 49.0455C25.7924 48.2365 25.5276 47.3364 25.4714 46.4119C25.4151 45.4874 25.5689 44.5622 25.9212 43.7049C26.3302 44.5851 26.8737 45.397 27.5325 46.1118C28.6765 47.3418 30.0662 48.3208 31.6126 48.9861C30.3552 48.0922 29.1987 47.066 28.163 45.9252C27.4199 45.0134 26.8496 43.975 26.4799 42.8605L27.1721 41.9362C28.8048 43.652 30.6169 45.1897 32.5777 46.5232C33.7455 47.4177 35.1213 48.0049 36.5779 48.2306C35.1774 47.8066 33.8757 47.11 32.7484 46.1812C30.9447 44.6184 29.3436 42.8385 27.9819 40.8825C28.6058 40.0884 29.2798 39.2623 29.9876 38.3875C31.0838 39.1604 32.2709 39.7974 33.5224 40.2843C35.1037 40.8604 36.7776 41.1439 38.4614 41.1207C36.8597 40.7126 35.2855 40.2042 33.7483 39.5985C32.6044 39.1277 31.5874 38.3969 30.7787 37.4648C32.0931 35.8449 33.49 34.2263 34.9035 32.608C35.826 33.1586 36.8266 33.568 37.8717 33.8223C38.8486 34.0922 39.8846 34.0635 40.8447 33.74C39.868 33.6543 38.9061 33.4454 37.9823 33.1183C37.1257 32.8143 36.3573 32.3056 35.7449 31.6369C37.6465 29.452 46.678 19.3736 46.678 19.3736L38.2804 28.0507C37.6229 26.4562 37.1356 24.7976 36.8265 23.102C36.6693 21.8879 36.7231 20.6561 36.9855 19.4603C36.9855 19.4603 36.7491 20.7861 36.6179 22.7374C36.6764 24.763 37.0042 26.7721 37.5926 28.7124L32.4367 34.0284C31.541 32.6014 30.7596 31.1065 30.0999 29.5576C29.2093 27.1916 28.4879 24.7661 27.9411 22.2991C28.0746 24.6237 28.4913 26.9236 29.1821 29.1485C29.8473 31.1077 30.6718 33.0099 31.6475 34.8361L28.0703 38.5201C26.4468 36.8818 24.9577 35.1171 23.6171 33.2429C22.4758 31.0205 21.4769 28.7287 20.6263 26.3811C20.9637 28.9047 21.7808 31.3415 23.034 33.5616C24.642 36.1654 26.4025 38.5419 27.1295 39.506L25.9539 40.7178C24.0715 39.9659 22.3263 38.9112 20.7883 37.5958C18.9093 35.7129 17.2078 33.6628 15.7052 31.4711C16.9154 33.8728 18.4385 36.1056 20.235 38.112C21.671 39.4098 23.2536 40.5376 24.9509 41.4728C24.7386 41.6663 24.5211 41.8433 24.2983 42.0038C23.1521 42.1926 21.9773 42.1114 20.8682 41.7668C19.7954 41.3071 18.8159 40.6568 17.9776 39.8478C18.6558 40.9184 19.6349 41.7679 20.7936 42.2908C21.4642 42.6018 22.1792 42.8074 22.9132 42.9003C15.5505 46.883 9.48187 37.4425 11.8473 29.1422C13.7214 22.6067 21.0847 16.5884 21.0847 16.5884C20.828 18.7832 20.9477 21.0054 21.4387 23.1605C22.2483 26.1287 24.4066 31.4173 27.069 31.1493C29.7314 30.8812 22.1035 21.891 23.1497 16.5074C24.0335 11.9584 33.4538 11.3583 33.4538 11.3583C32.7458 11.6737 32.1163 12.1403 31.6102 12.7249C31.1041 13.3096 30.7337 13.9979 30.5255 14.7411C29.5761 17.2535 31.4654 25.8373 33.5218 26.2815C36.1886 26.7522 30.7198 16.9768 35.5205 13.1817C38.2638 11.0107 41.8665 13.7951 44.7065 14.7775C46.579 15.3616 48.5671 15.4789 50.4957 15.1191C50.4957 15.1191 50.6194 16.6314 50.7777 20.0485C50.9361 23.4656 53.0109 25.798 51.3093 27.8712C49.6077 29.9444 43.3374 28.7413 43.9184 30.5566C44.4994 32.372 51.5093 29.7623 51.5093 29.7623C51.5093 29.7623 51.4823 31.4035 51.2551 35.1754C51.0279 38.9473 39.6132 36.3462 39.5623 38.4302Z"
                fill="#0EA91E"
              />
            </svg>{" "}
            of agriculture <br /> sustainability
          </p>
          <div className="flex text-sm text-right flex-col leading-[1.7rem] gap-3 w-[35%]">
            <p>
              Our diverse range of crops, from succulent fruits to crisp
              vegetables, showcases the fertile abundance of our land. Every
              product is carefully nurtured, handpicked, and delivered to you at
              its peak freshness.
            </p>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <div className="w-[40%]"></div>
          <div className="flex-1">
            <div className="flex">
              <button className="h-12 rounded-full px-7 border border-black text-sm">
                Contact us
              </button>
              <button className="h-12 rounded-full px-3 border border-black text-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.63605 18.364L18.364 5.63604M18.364 5.63604V14.1213M18.364 5.63604H9.87869"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <img src="/farm.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[95vw] flex relative max-w-[1200px] mx-auto py-20 ">
        <img src="/orange.png" alt="" className="rounded-3xl" />
        <div className="absolute text-[1.7rem] capitalize font-bold">
          <div className=" bg-white flex items-left justify-center flex-col text-left  p-2 pr-6   rounded-br-3xl">
            <div className="absolute top-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_white]"></div>
            <p className="z-20 relative">cultivating agricultural</p>
          </div>
          <div className=" w-max relative bg-white  p-2 pr-6  rounded-br-3xl ">
            <div className="absolute top-0 -right-12  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_white]"></div>
            <div className="absolute -bottom-12 left-0  w-6 h-12 bg-transparent rounded-tl-3xl shadow-[0px_-2rem_0px_0px_white]"></div>
            <p className="z-20 relative">sustainability</p>
          </div>
        </div>
      </div>
      <div className="w-[95vw] relative max-w-[1200px] mx-auto py-10">
        <div className="flex gap-4 ">
          <div className="bg-black text-white rounded-3xl flex flex-col gap-5 p-8 w-[33%]">
            <p className="text-2xl">
              Crafting Agriculture, For Farmers, By Innovators.
            </p>
            <p className="text-sm">
              Join our community of 2000+ passionate cultivators, innovators,
              stewards of excellence, where dedication to innovation, creativity
              and sustainable farming practices flourishes.
            </p>
            <div className="flex">
              <button className="h-12 capitalize rounded-full px-7 border bg-white text-black text-sm">
                shop now
              </button>
              <button className="h-12 rounded-full px-3 border bg-white text-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.63605 18.364L18.364 5.63604M18.364 5.63604V14.1213M18.364 5.63604H9.87869"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 h-[295px] gap-20 bg-slate-100 rounded-3xl flex capitalize p-10 text-xs">
            <div className="flex flex-col gap-6">
              <p>links</p>
              <div className="flex flex-col gap-4">
                <a href="/">explore</a>
                <a href="/">services</a>
                <a href="/">individuals</a>
                <a href="/">business</a>
                <a href="/">blogs</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p>communities</p>
              <div className="flex flex-col gap-4">
                <a href="/">twitter</a>
                <a href="/">facebook</a>
                <a href="/">instagram</a>
                <a href="/">whatsapp</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p>support</p>
              <div className="flex flex-col gap-4">
                <a href="/">FAQs</a>
                <a href="/">contact</a>
                <a href="/">help center</a>
              </div>
            </div>
            <div className="flex flex-1 justify-end  gap-2 h-max items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0659 15.4295C16.0457 16.6572 21.3213 16.6056 21.3213 16.6056C21.3213 16.6056 21.3606 18.1668 19.2302 20.6526C16.4843 23.8577 10.5493 25.0435 8.57548 21.4005C8.32029 20.9455 8.17135 20.4392 8.13972 19.9192C8.1081 19.3991 8.19459 18.8787 8.39278 18.3965C8.6228 18.8916 8.92855 19.3483 9.29914 19.7503C9.94264 20.4422 10.7243 20.9929 11.5942 21.3671C10.8869 20.8643 10.2363 20.2871 9.65377 19.6454C9.23578 19.1325 8.91499 18.5484 8.70706 17.9215L9.09637 17.4016C10.0148 18.3667 11.0341 19.2316 12.137 19.9817C12.7939 20.4849 13.5678 20.8152 14.3871 20.9422C13.5994 20.7037 12.8672 20.3118 12.2331 19.7894C11.2185 18.9103 10.3178 17.9091 9.55188 16.8089C9.90284 16.3622 10.282 15.8975 10.6801 15.4054C11.2967 15.8402 11.9645 16.1985 12.6684 16.4724C13.5579 16.7964 14.4995 16.9559 15.4466 16.9429C14.5457 16.7133 13.6602 16.4273 12.7955 16.0866C12.1521 15.8218 11.58 15.4107 11.1251 14.8864C11.8645 13.9752 12.6502 13.0647 13.4453 12.1544C13.9642 12.4642 14.527 12.6945 15.1149 12.8375C15.6644 12.9893 16.2472 12.9732 16.7873 12.7912C16.2378 12.743 15.6968 12.6255 15.1771 12.4415C14.6953 12.2705 14.2631 11.9843 13.9186 11.6082C14.9882 10.3792 20.0685 4.71012 20.0685 4.71012L15.3448 9.59097C14.975 8.69408 14.7009 7.76109 14.527 6.80732C14.4386 6.12443 14.4688 5.43153 14.6164 4.75887C14.6164 4.75887 14.4834 5.50463 14.4096 6.60225C14.4426 7.74167 14.6269 8.87179 14.9579 9.96319L12.0577 12.9534C11.5539 12.1507 11.1144 11.3099 10.7433 10.4386C10.2423 9.10775 9.83652 7.74338 9.52896 6.35568C9.60402 7.66327 9.83843 8.957 10.227 10.2085C10.6012 11.3106 11.065 12.3805 11.6138 13.4078L9.60162 15.48C8.68844 14.5585 7.85079 13.5658 7.09668 12.5116C6.45475 11.2615 5.89285 9.97234 5.41436 8.65182C5.60416 10.0713 6.06378 11.4421 6.7687 12.6909C7.67324 14.1555 8.66348 15.4923 9.07244 16.0346L8.41116 16.7162C7.35232 16.2933 6.37065 15.7 5.50552 14.9601C4.44857 13.901 3.49148 12.7478 2.64626 11.5149C3.32702 12.8659 4.18373 14.1219 5.19428 15.2505C6.00204 15.9805 6.89222 16.6149 7.84697 17.1409C7.72755 17.2498 7.60518 17.3493 7.47988 17.4396C6.83513 17.5458 6.17429 17.5001 5.55047 17.3063C4.94701 17.0477 4.39601 16.6819 3.92451 16.2268C4.30596 16.8291 4.85669 17.3069 5.50847 17.6011C5.88568 17.776 6.28791 17.8916 6.70079 17.9439C2.55924 20.1842 -0.854359 14.8739 0.476198 10.2049C1.53039 6.52871 5.67221 3.14341 5.67221 3.14341C5.52782 4.37798 5.59516 5.62801 5.87137 6.84026C6.32678 8.50987 7.54078 11.4847 9.0384 11.3339C10.536 11.1831 6.2453 6.12617 6.83378 3.0979C7.33096 0.539049 12.6299 0.201529 12.6299 0.201529C12.2316 0.378915 11.8775 0.641365 11.5928 0.970229C11.3081 1.29909 11.0998 1.68629 10.9827 2.1043C10.4486 3.51753 11.5114 8.34591 12.6681 8.5958C14.1681 8.86058 11.092 3.36192 13.7924 1.22717C15.3355 0.00599308 17.362 1.57219 18.9595 2.12483C20.0127 2.45336 21.1311 2.51934 22.2159 2.31695C22.2159 2.31695 22.2855 3.16762 22.3746 5.08974C22.4636 7.01187 23.6307 8.32384 22.6736 9.49002C21.7164 10.6562 18.1894 9.97946 18.5162 11.0006C18.843 12.0217 22.7861 10.5538 22.7861 10.5538C22.7861 10.5538 22.7709 11.4769 22.6431 13.5986C22.5153 15.7203 16.0945 14.2572 16.0659 15.4295Z"
                  fill="#0EA91E"
                />
              </svg>
              <h1 className="uppercase text-2xl font-bold font-poppins">
                harvestgrove
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs py-6 items-center capitalize">
          <p>&copy;2023 HarvestGrove</p>
          <div className="flex items-center gap-2">
            <a href="/">privacy policy</a>
            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            <a href="/">terms of use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvestGrove;
