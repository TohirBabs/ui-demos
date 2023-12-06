import { useEffect } from "react";
import { useState } from "react";

export const ResponsiveSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const mainNav = [
    {
      title: "dashboard",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5C3 3.89543 3.89543 3 5 3H8C9.10457 3 10 3.89543 10 5V6C10 7.10457 9.10457 8 8 8H5C3.89543 8 3 7.10457 3 6V5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 14C3 12.8954 3.89543 12 5 12H8C9.10457 12 10 12.8954 10 14V19C10 20.1046 9.10457 21 8 21H5C3.89543 21 3 20.1046 3 19V14Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 5C14 3.89543 14.8954 3 16 3H19C20.1046 3 21 3.89543 21 5V10C21 11.1046 20.1046 12 19 12H16C14.8954 12 14 11.1046 14 10V5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 18C14 16.8954 14.8954 16 16 16H19C20.1046 16 21 16.8954 21 18V19C21 20.1046 20.1046 21 19 21H16C14.8954 21 14 20.1046 14 19V18Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "payments",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10.5L2 17C2 18.1046 2.89543 19 4 19L20 19C21.1046 19 22 18.1046 22 17V10.5M2 10.5L2 7C2 5.89543 2.89543 5 4 5L20 5C21.1046 5 22 5.89543 22 7L22 10.5M2 10.5H22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "analytics",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L10 10H14L17 7M12 17H5C3.89543 17 3 16.1046 3 15V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H12ZM12 17V21M12 21H17M12 21H7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "products",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 11V17C19 19.2091 17.2091 21 15 21H12M19 11H12M19 11C20.1046 11 21 10.1046 21 9C21 7.89543 20.1046 7 19 7H5C3.89543 7 3 7.89543 3 9C3 10.1046 3.89543 11 5 11M5 11V17C5 19.2091 6.79086 21 9 21H12M5 11H12M12 11V21M12 5C12 6.10457 11.1046 7 10 7C8.89543 7 8 6.10457 8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5ZM12 5C12 6.10457 12.8954 7 14 7C15.1046 7 16 6.10457 16 5C16 3.89543 15.1046 3 14 3C12.8954 3 12 3.89543 12 5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "reports",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9L13 3M19 9V17C19 19.2091 17.2091 21 15 21H9C6.79086 21 5 19.2091 5 17V7C5 4.79086 6.79086 3 9 3H13M19 9H15C13.8954 9 13 8.10457 13 7V3M9 17H15M9 14H15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "customers",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3997 15.6003L15.6926 16.3074L16.3997 15.6003ZM7.60016 15.6003L6.89305 14.8932L7.60016 15.6003ZM7.01977 16.2699L7.82015 16.8694L7.01977 16.2699ZM9.77771 20.0001V21.0001V20.0001ZM16.9801 16.2699L16.1797 16.8694L16.9801 16.2699ZM14.2222 20.0001V19.0001V20.0001ZM21.8784 13.0779L22.6788 12.4784L21.8784 13.0779ZM19.1205 10.9962L18.5192 10.1972C18.2285 10.416 18.0795 10.7754 18.1303 11.1357C18.181 11.496 18.4235 11.8003 18.7634 11.9303L19.1205 10.9962ZM19.9498 15.6806C19.4229 15.8463 19.1302 16.4077 19.2959 16.9345C19.4616 17.4614 20.0231 17.7541 20.5499 17.5884L19.9498 15.6806ZM15.5168 3.16659C14.9833 3.30953 14.6668 3.85787 14.8097 4.39133C14.9527 4.9248 15.501 5.24138 16.0345 5.09844L15.5168 3.16659ZM20.278 6.18526L19.3791 6.62334L20.278 6.18526ZM2.12113 13.0779L1.32076 12.4784H1.32076L2.12113 13.0779ZM4.87906 10.9962L5.23621 11.9303C5.57608 11.8003 5.81853 11.496 5.86929 11.1357C5.92004 10.7754 5.77109 10.416 5.48035 10.1972L4.87906 10.9962ZM3.44966 17.5884C3.97649 17.7541 4.53792 17.4614 4.70365 16.9345C4.86937 16.4077 4.57664 15.8463 4.0498 15.6806L3.44966 17.5884ZM7.96511 5.09844C8.49858 5.24138 9.04692 4.9248 9.18986 4.39133C9.3328 3.85787 9.01622 3.30953 8.48275 3.16659L7.96511 5.09844ZM5.60414 4.35042L5.1893 3.44052L5.60414 4.35042ZM3.72155 6.18526L4.62048 6.62334L3.72155 6.18526ZM17.7805 15.6704C17.5758 15.3972 17.3509 15.1373 17.1068 14.8932L15.6926 16.3074C15.8692 16.484 16.0318 16.6719 16.1797 16.8694L17.7805 15.6704ZM17.1068 14.8932C15.7524 13.5387 13.9154 12.7778 11.9999 12.7778V14.7778C13.385 14.7778 14.7132 15.328 15.6926 16.3074L17.1068 14.8932ZM11.9999 12.7778C10.0845 12.7778 8.24748 13.5387 6.89305 14.8932L8.30726 16.3074C9.28662 15.328 10.6149 14.7778 11.9999 14.7778V12.7778ZM6.89305 14.8932C6.64892 15.1373 6.42403 15.3972 6.2194 15.6704L7.82015 16.8694C7.96807 16.6719 8.13067 16.484 8.30726 16.3074L6.89305 14.8932ZM9.77771 21.0001H14.2222V19.0001H9.77771V21.0001ZM6.2194 15.6704C5.76077 16.2826 5.54481 16.9651 5.58284 17.6538C5.62028 18.3319 5.89921 18.939 6.29797 19.4291C7.08266 20.3936 8.39838 21.0001 9.77771 21.0001V19.0001C8.94791 19.0001 8.22246 18.6255 7.84937 18.1669C7.66924 17.9455 7.59012 17.7306 7.57979 17.5435C7.57005 17.367 7.61658 17.1411 7.82015 16.8694L6.2194 15.6704ZM16.1797 16.8694C16.3833 17.1411 16.4298 17.367 16.4201 17.5435C16.4097 17.7306 16.3306 17.9455 16.1505 18.1669C15.7774 18.6255 15.052 19.0001 14.2222 19.0001V21.0001C15.6015 21.0001 16.9172 20.3936 17.7019 19.4291C18.1007 18.939 18.3796 18.3319 18.417 17.6538C18.4551 16.9651 18.2391 16.2826 17.7805 15.6704L16.1797 16.8694ZM14.8888 9.88889C14.8888 11.4844 13.5954 12.7778 11.9999 12.7778V14.7778C14.7 14.7778 16.8888 12.5889 16.8888 9.88889H14.8888ZM11.9999 12.7778C10.4045 12.7778 9.11102 11.4844 9.11102 9.88889H7.11102C7.11102 12.5889 9.29986 14.7778 11.9999 14.7778V12.7778ZM9.11102 9.88889C9.11102 8.2934 10.4044 7 11.9999 7V5C9.29985 5 7.11102 7.18883 7.11102 9.88889H9.11102ZM11.9999 7C13.5954 7 14.8888 8.2934 14.8888 9.88889H16.8888C16.8888 7.18883 14.7 5 11.9999 5V7ZM22.6788 12.4784C22.4742 12.2052 22.2493 11.9453 22.0052 11.7012L20.5909 13.1154C20.7675 13.292 20.9301 13.4799 21.0781 13.6774L22.6788 12.4784ZM22.0052 11.7012C21.2802 10.9763 20.417 10.4214 19.4777 10.0622L18.7634 11.9303C19.4427 12.19 20.0668 12.5913 20.5909 13.1154L22.0052 11.7012ZM21.0781 13.6774C21.3863 14.0889 21.3662 14.4336 21.204 14.7423C21.0124 15.1068 20.5723 15.4847 19.9498 15.6806L20.5499 17.5884C21.5717 17.267 22.4905 16.5936 22.9744 15.6727C23.4877 14.6959 23.4597 13.521 22.6788 12.4784L21.0781 13.6774ZM16.0345 5.09844C16.6823 4.92485 17.3703 4.98208 17.9806 5.26031L18.8103 3.44052C17.7775 2.96967 16.6131 2.87283 15.5168 3.16659L16.0345 5.09844ZM17.9806 5.26031C18.5908 5.53854 19.0853 6.02043 19.3791 6.62334L21.177 5.74719C20.6797 4.72688 19.843 3.91137 18.8103 3.44052L17.9806 5.26031ZM19.3791 6.62334C19.6729 7.22624 19.7478 7.91259 19.5909 8.56467L21.5354 9.03252C21.8009 7.929 21.6742 6.76749 21.177 5.74719L19.3791 6.62334ZM19.5909 8.56467C19.434 9.21675 19.0551 9.79392 18.5192 10.1972L19.7218 11.7953C20.6287 11.1128 21.2699 10.136 21.5354 9.03252L19.5909 8.56467ZM2.9215 13.6774C3.06943 13.4799 3.23203 13.292 3.40862 13.1154L1.99441 11.7012C1.75028 11.9453 1.52539 12.2052 1.32076 12.4784L2.9215 13.6774ZM3.40862 13.1154C3.93279 12.5913 4.55687 12.19 5.23621 11.9303L4.52191 10.0622C3.58253 10.4214 2.71933 10.9763 1.99441 11.7012L3.40862 13.1154ZM1.32076 12.4784C0.539836 13.521 0.511862 14.6959 1.02515 15.6727C1.5091 16.5936 2.42786 17.267 3.44966 17.5884L4.0498 15.6806C3.42725 15.4847 2.98712 15.1068 2.79558 14.7423C2.63337 14.4336 2.61327 14.0889 2.9215 13.6774L1.32076 12.4784ZM8.48275 3.16659C7.38642 2.87283 6.22203 2.96967 5.1893 3.44052L6.01898 5.26031C6.62923 4.98208 7.31728 4.92485 7.96511 5.09844L8.48275 3.16659ZM5.1893 3.44052C4.15656 3.91137 3.31983 4.72688 2.82261 5.74719L4.62048 6.62334C4.9143 6.02043 5.40873 5.53854 6.01898 5.26031L5.1893 3.44052ZM2.82261 5.74719C2.32539 6.76749 2.19866 7.929 2.46417 9.03252L4.40868 8.56467C4.25179 7.91259 4.32667 7.22624 4.62048 6.62334L2.82261 5.74719ZM2.46417 9.03252C2.72967 10.136 3.37087 11.1128 4.27777 11.7953L5.48035 10.1972C4.94445 9.79392 4.56557 9.21675 4.40868 8.56467L2.46417 9.03252Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];
  const settingsNav = [
    {
      title: "settings",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.13447 4.42727L9.46281 5.87468L10.0859 3.20396C10.7028 3.07036 11.3432 3 12 3C12.6568 3 13.2972 3.07036 13.9141 3.20396L14.5372 5.87468L16.8655 4.42727C17.9499 5.12541 18.8746 6.05011 19.5727 7.13447L18.1253 9.46281L20.796 10.0859C20.9296 10.7028 21 11.3432 21 12C21 12.6568 20.9296 13.2972 20.796 13.9141L18.1253 14.5372L19.5727 16.8655C18.8746 17.9499 17.9499 18.8746 16.8655 19.5727L14.5372 18.1253L13.9141 20.796C13.2972 20.9296 12.6568 21 12 21C11.3432 21 10.7028 20.9296 10.0859 20.796L9.46281 18.1253L7.13447 19.5727C6.05011 18.8746 5.12541 17.9499 4.42727 16.8655L5.87468 14.5372L3.20396 13.9141C3.07036 13.2972 3 12.6568 3 12C3 11.3432 3.07036 10.7028 3.20396 10.0859L5.87468 9.46281L4.42727 7.13447C5.12541 6.05011 6.05011 5.12541 7.13447 4.42727Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "billings",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 12.2676C12.7058 12.0974 12.3643 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C12.3643 16 12.7058 15.9026 13 15.7324M20 19L4 19C2.89543 19 2 18.1046 2 17L2 7C2 5.89543 2.89543 5 4 5L20 5C21.1046 5 22 5.89543 22 7L22 17C22 18.1046 21.1046 19 20 19ZM19 14C19 15.1046 18.1046 16 17 16C15.8954 16 15 15.1046 15 14C15 12.8954 15.8954 12 17 12C18.1046 12 19 12.8954 19 14Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "notifications",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 18V19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19V18M12 5V3M12 5C14.7614 5 17 7.23858 17 10V15H17.5C18.3284 15 19 15.6716 19 16.5C19 17.3284 18.3284 18 17.5 18H6.5C5.67157 18 5 17.3284 5 16.5C5 15.6716 5.67157 15 6.5 15H7V10C7 7.23858 9.23858 5 12 5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const handleResize = () => {
    console.log(window.innerWidth);
    window.innerWidth < 1100 ? setIsCollapsed(true) : setIsCollapsed(false);
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  const NavButton = ({ navItem }) => {
    return (
      <button className="group text-sm flex items-center gap-4  rounded-md transition h-10 duration-300 px-1  hover:bg-gray-500 hover:pl-2 w-full text-left capitalize">
        <div className="w-8 h-8  rounded flex items-center justify-center">
          {navItem.icon}
        </div>
        {!isCollapsed ? (
          <p> {navItem.title}</p>
        ) : (
          <span className="group-hover:visible invisible absolute z-10 left-[110%] top-[] after:absolute after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-r-gray-900 after:border-transparent after:border-[5px] w-32 rounded-md text-center bg-gray-900 bg-opacity-80 p-2">
            {navItem.title}
          </span>
        )}
      </button>
    );
  };
  return (
    <div className="h-screen p-2 w-screen font-poppins flex gap-2 text-white relative">
      <div
        style={{ width: isCollapsed ? "3.75rem" : "16rem" }}
        className="h-full  bg-gray-800 transition-all duration-300 rounded-xl  border-2 border-gray-400 p-2  flex flex-col relative"
      >
        <button
          onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
          className="absolute top-1 -right-7 w-8 h-8 border-2 border-white  bg-gray-600 flex justify-center items-center rounded-lg  m-1"
        >
          {isCollapsed ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 16L14 12L10 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 16L10 12L14 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <h1 className="text-xl font-bold flex items-center gap-4  font-mono p-1 pb-6">
          <div className="w-8 h-8  rounded flex items-center justify-center">
            <svg
              width="44"
              height="43"
              viewBox="0 0 44 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8 33.1C22.3 31.8 18.7 31.6 15.4 32.5C13.1 33.1 10.9 34.3 8.90002 35.8L7.5 37L7.10001 37.4L8 38.2C8.1 38.2 8.10001 38.3 8.20001 38.4C8.40001 38.6 8.60002 38.7 8.90002 38.9L9.5 39.3L10.1 38.8C10.2 38.7 10.4 38.5 10.6 38.4C12.4 36.9 14.4 35.9 16.5 35.4C19.2 34.7 22.1 34.8 25 35.9C27.4 36.8 32.3 37.9 38.2 35.4L38.4 35.3L38.7 35C38.7 34.9 38.8 34.9 38.9 34.8C39.4 34.2 39.9 33.6 40.3 32.9L42.3 29.8L39.1 31.6C34.4 34.2 30.1 34.7 25.8 33.1Z"
                fill="white"
              />
              <path
                d="M12.1 22.3C14.8 21.6 17.7 21.7 20.6 22.8C23.8 24 32 25.7 41.2 17.4L42.7 15.9L42.8 15.8L43.2 15.4L43 14.9C42.9 14.5 42.7 14 42.5 13.5L42 12.1L41 13.1C40.9 13.3 40.7 13.4 40.5 13.6C36.1 18.1 29.3 22.7 21.5 19.9C18 18.6 14.4 18.4 11.1 19.3C7.90001 20.2 5.1 21.9 2.5 24.3V24.2L1 25.8C1 25.9 0.900018 25.9 0.800018 26L0.5 26.3L0.600006 26.7C0.700006 27.2 0.9 27.7 1 28.2L1.60001 29.8L2.60001 28.5C2.70001 28.3 2.9 28.2 3 28C5.1 26.1 8.00001 23.4 12.1 22.3Z"
                fill="white"
              />
              <path
                d="M2.40002 20.5C4.70002 18.1 7.30001 16.6 10.1 15.8C12.8 15.1 15.7 15.2 18.6 16.3C27.6 19.6 35.4 14.2 38.8 11.3L40.1 10L40.6 9.59998L40.2 9C39.9 8.7 39.7 8.29999 39.4 7.89999L38.8 7.09998L38.1 7.79999C38 7.89999 37.8 8.09998 37.7 8.19998C33.5 12.2 27 16.3 19.6 13.5C16.1 12.2 12.5 12 9.20001 12.9C7.10001 13.5 5.10001 14.5 3.10001 15.8L1 17.5C0.8 17.7 0.7 17.8 0.5 18L0.300018 18.2V18.5C0.200018 19.2 0.200006 19.9 0.100006 20.5L0 23L1.70001 21.2C1.90001 21 2.10002 20.7 2.40002 20.5Z"
                fill="white"
              />
              <path
                d="M28.7 39.9L28.5 40.5L28.7 39.9C28.4 39.8 28.2 39.7 27.9 39.6C24.4 38.3 20.8 38.1 17.5 39C16.8 39.2 16.1 39.4 15.4 39.7L13 40.8L12.4 41.1L14.4 41.8C15 42 15.6 42.2 16.2 42.4L16.5 42.5L16.8 42.4C17.1 42.3 17.4 42.1 17.7 42.1C17.9 42.1 18.1 42 18.3 41.9C20.7 41.3 23.3 41.3 26.1 42.2C26.4 42.3 26.6 42.4 26.9 42.5L27.4 42.7L27.7 42.6C28.4 42.4 29.2 42.2 29.8 41.9L32.6 40.9L29.7 40.2C29.4 40.1 29 40 28.7 39.9Z"
                fill="white"
              />
              <path
                d="M44 19.2L42.5 20.7C42.3 20.9 42.1 21.1 41.9 21.3C37.8 25.2 31.2 29.4 23.8 26.6C20.3 25.3 16.7 25.1 13.4 26C10.3 26.9 7.5 28.5 5 30.9L3.70001 32.3L3.30002 32.8L3.70001 33.4C4.00001 33.8 4.20002 34.1 4.40002 34.5L5 35.4L5.70001 34.5C5.80001 34.4 6.00001 34.2 6.10001 34.1C8.50001 31.5 11.1 29.9 14.1 29.1C16.8 28.4 19.7 28.5 22.6 29.6C25.1 30.5 27.7 30.8 30.3 30.5C34.9 30 39.5 27.4 42.9 24.5C43.1 24.3 43.3 24.2 43.5 24L43.8 23.7V23.4C43.8 22.8 43.9 22.1 43.9 21.5L44 19.2Z"
                fill="white"
              />
              <path
                d="M6 10L5.70001 9.39999L6 10C6.6 9.7 7.30002 9.49999 7.90002 9.29999C10.6 8.59999 13.5 8.69999 16.4 9.79999C18.3 10.5 20.2 10.8 22.3 10.8C26.5 10.8 30.7 9.29999 34.6 6.39999L36.1 5.19998L36.6 4.79999L35.7 4.09998C35.4 3.79998 35 3.49999 34.6 3.29999L34 2.89999L33.5 3.29999C33.3 3.39999 33.2 3.59998 33 3.69998C27.7 7.69998 22.4 8.79999 17.4 6.89999C13.8 5.59999 10.2 5.29999 6.60001 6.39999C6.30001 6.49999 6.00001 6.59998 5.60001 6.69998L5.40002 6.79999L5.10001 7.09998C5.10001 7.19998 5.00002 7.19999 4.90002 7.29999C4.50002 7.89999 4.00001 8.4 3.60001 9L1.70001 11.9L4.80002 10.3C5.30002 10.3 5.7 10.1 6 10Z"
                fill="white"
              />
              <path
                d="M14.2 3.19998L14.5 3.29999C15.8 3.79999 17.8 4.29999 20.3 4.29999C22.9 4.29999 25.4 3.69998 27.9 2.69998L31 1.19998L28.9 0.5C28.3 0.3 27.7 0.1 27 0H26.7L26.4 0.0999756C26.1 0.199976 25.8 0.4 25.5 0.5C22.5 1.6 19.5 1.8 16.6 1C16.3 0.9 16 0.799982 15.7 0.699982L15.4 0.599976L15.1 0.699982C14.5 0.899982 13.9 1.09999 13.3 1.39999L11 2.39999L13.4 3.09998C13.6 2.99998 13.9 3.09998 14.2 3.19998Z"
                fill="white"
              />
            </svg>
          </div>
          {!isCollapsed && <p>ASTRA</p>}
        </h1>

        <div className="relative flex items-center ">
          <button
            onClick={() => setIsCollapsed(false)}
            className="w-8 h-8 absolute flex justify-center items-center rounded  m-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 20.5L9.52574 14.4743M9.52574 14.4743C8.3624 13.3109 7.64286 11.7038 7.64286 9.92857C7.64286 6.37817 10.521 3.5 14.0714 3.5C17.6218 3.5 20.5 6.37817 20.5 9.92857C20.5 13.479 17.6218 16.3571 14.0714 16.3571C12.2962 16.3571 10.6891 15.6376 9.52574 14.4743Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            type="search"
            className="w-full rounded-md bg-gray-100 h-10  text-xs pl-10 text-black"
            placeholder="search for anything..."
            name=""
            id=""
          ></input>
        </div>
        <nav className="flex flex-col justify-between flex-1 mt-4">
          <div className="">
            {!isCollapsed && <p className=" p-2">Main</p>}
            <ul className="flex flex-col gap-2">
              {mainNav.map((nav, index) => (
                <li key={index}>
                  <NavButton navItem={nav} />
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            {!isCollapsed && <p className=" p-2">Settings</p>}
            <ul className="flex flex-col gap-2">
              {settingsNav.map((nav, index) => (
                <li key={index}>
                  <NavButton navItem={nav} />
                </li>
              ))}
              <li className="relative flex  items-center gap-2 py-2">
                <button className="flex items-center gap-1 text-xs group  p-1 flex-1 rounded-lg hover:bg-gray-500 text-left ">
                  <img
                    src="/avatar.png"
                    alt=""
                    className="w-8 h-8 bg-[#f5f5f5] rounded-full"
                  />
                  {isCollapsed ? (
                    <span className="group-hover:visible invisible absolute z-10 left-[130%] top-[] after:absolute after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-r-gray-900 after:border-transparent after:border-[5px] w-32 rounded-md text-center bg-gray-900 bg-opacity-80 p-2">
                      profile
                    </span>
                  ) : (
                    <div className=" w-max">
                      <p> tohir babs</p>
                      <p className="text-gray-200 text-[0.6rem]">
                        tohirbabs@gmail.com
                      </p>
                    </div>
                  )}
                </button>
                {!isCollapsed && (
                  <button className="w-6 h-6 mr-2  rounded  group relative ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5M4 12L15 12M4 12L8 8M4 12L8 16"
                        stroke="red"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="group-hover:visible invisible absolute z-10 left-[200%] -top-[35%] after:absolute after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-r-gray-900 after:border-transparent after:border-[5px] w-24 rounded-md text-center bg-gray-900 bg-opacity-80 p-2">
                      log out
                    </span>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex-1 h-full flex flex-col gap-2">
        <div className="w-full h-16 rounded-lg bg-green-300"></div>
        <div className="w-full flex gap-2 h-40">
          <div className="h-full bg-rose-300 w-full rounded-lg"></div>
          <div className="h-full bg-rose-300 w-full rounded-lg"></div>
          <div className="h-full bg-rose-300 w-full rounded-lg"></div>
        </div>
        <div className="w-full flex-1 rounded-lg bg-blue-300"></div>
      </div>
    </div>
  );
};
