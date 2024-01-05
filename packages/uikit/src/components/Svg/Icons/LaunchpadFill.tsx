import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  /*  <Svg viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z"
        />
        <path d="M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z" />
        <path d="M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z" />
        <path d="M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z" />
        <path d="M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z" />
      </Svg>*/
  <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.3746 34.9997C24.3746 35.497 24.1771 35.9739 23.8254 36.3255C23.4738 36.6772 22.9969 36.8747 22.4996 36.8747H17.4996C17.0023 36.8747 16.5254 36.6772 16.1738 36.3255C15.8222 35.9739 15.6246 35.497 15.6246 34.9997C15.6246 34.5024 15.8222 34.0255 16.1738 33.6739C16.5254 33.3222 17.0023 33.1247 17.4996 33.1247H22.4996C22.9969 33.1247 23.4738 33.3222 23.8254 33.6739C24.1771 34.0255 24.3746 34.5024 24.3746 34.9997ZM19.9996 18.1247C20.4941 18.1247 20.9774 17.9781 21.3885 17.7034C21.7997 17.4287 22.1201 17.0382 22.3093 16.5814C22.4985 16.1246 22.548 15.6219 22.4516 15.137C22.3551 14.652 22.117 14.2066 21.7674 13.8569C21.4177 13.5073 20.9723 13.2692 20.4873 13.1727C20.0024 13.0763 19.4997 13.1258 19.0429 13.315C18.5861 13.5042 18.1956 13.8247 17.9209 14.2358C17.6462 14.6469 17.4996 15.1302 17.4996 15.6247C17.4996 16.2877 17.763 16.9236 18.2318 17.3925C18.7007 17.8613 19.3366 18.1247 19.9996 18.1247ZM35.5512 24.4841L33.6199 33.1763C33.5063 33.6951 33.2617 34.1761 32.9094 34.5735C32.5571 34.971 32.1088 35.2715 31.6074 35.4466C31.2716 35.5646 30.9181 35.6248 30.5621 35.6247C29.8653 35.6241 29.1889 35.3891 28.6418 34.9575L24.5574 31.8747H15.4418L11.3574 34.9591C10.8101 35.3901 10.1338 35.6246 9.43711 35.6247C9.08102 35.6243 8.72757 35.5636 8.3918 35.445C7.89038 35.27 7.44216 34.9694 7.08986 34.572C6.73756 34.1745 6.49294 33.6935 6.3793 33.1747L4.44805 24.4841C4.34565 24.0176 4.35097 23.534 4.46361 23.0699C4.57624 22.6058 4.79322 22.1736 5.09805 21.8059L9.44649 16.5872C9.61284 14.6319 10.0683 12.712 10.798 10.8903C12.8715 5.69501 16.5793 2.4372 18.0855 1.27783C18.6333 0.853381 19.3066 0.623047 19.9996 0.623047C20.6926 0.623047 21.3659 0.853381 21.9137 1.27783C23.4137 2.4372 27.1277 5.69501 29.2012 10.8903C29.9309 12.712 30.3864 14.6319 30.5527 16.5872L34.9012 21.8059C35.206 22.1736 35.423 22.6058 35.5356 23.0699C35.6482 23.534 35.6536 24.0176 35.5512 24.4841ZM15.9043 28.1247H24.0949C27.1434 22.5466 27.6887 17.2216 25.7184 12.281C24.1246 8.28095 21.2809 5.60908 19.9996 4.5497C18.7184 5.60908 15.8746 8.28095 14.2809 12.281C12.309 17.2216 12.8559 22.5466 15.9043 28.1247ZM12.3809 29.4872C11.1342 27.1701 10.243 24.6787 9.73711 22.0966L8.17461 23.9716L9.82774 31.4153L12.3809 29.4872ZM31.823 23.97L30.2605 22.095C29.7547 24.6771 28.8635 27.1685 27.6168 29.4856L30.1684 31.4122L31.823 23.97Z"
      fill="#C54177"
    />
  </svg>
);

export default Icon;