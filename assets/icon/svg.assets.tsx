import {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
  Svg,
} from "react-native-svg";

export const LockIconSvg = () => {
  return (
    <Svg width="14" height="17" viewBox="0 0 14 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.19135 1.84956C3.9304 0.865876 5.15556 0.113281 7 0.113281C8.84444 0.113281 10.0696 0.865876 10.8087 1.84956C11.5202 2.7966 11.75 3.91146 11.75 4.66536V7.77995H12.4C13.1456 7.77995 13.75 8.35918 13.75 9.0737V15.5904C13.75 16.3049 13.1456 16.8841 12.4 16.8841H1.6C0.854416 16.8841 0.25 16.3049 0.25 15.5904V9.0737C0.25 8.35918 0.854416 7.77995 1.6 7.77995H2.25V4.66536C2.25 3.91146 2.47984 2.7966 3.19135 1.84956ZM3.75 7.77995H10.25V4.66536C10.25 4.14149 10.0798 3.33968 9.59135 2.6895C9.1304 2.07596 8.35556 1.55078 7 1.55078C5.64444 1.55078 4.8696 2.07596 4.40865 2.6895C3.92016 3.33968 3.75 4.14149 3.75 4.66536V7.77995ZM1.75 9.21745V15.4466H12.25V9.21745H1.75Z"
        fill="black"
      />
    </Svg>
  );
};

export const EyeOpenIconSvg = () => {
  return (
    <Svg width="24" height="23" viewBox="0 0 24 23" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.3162 12.752C16.9816 5.65038 7.01879 5.65038 3.68413 12.752C3.51415 13.114 3.07014 13.2754 2.69241 13.1125C2.31468 12.9496 2.14627 12.5241 2.31624 12.1621C6.18158 3.93035 17.8188 3.93035 21.6841 12.1621C21.8541 12.5241 21.6857 12.9496 21.308 13.1125C20.9302 13.2754 20.4862 13.114 20.3162 12.752Z"
        fill="black"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11.2617C13.2426 11.2617 14.25 12.2271 14.25 13.418C14.25 14.6088 13.2426 15.5742 12 15.5742C10.7574 15.5742 9.75 14.6088 9.75 13.418C9.75 12.2271 10.7574 11.2617 12 11.2617ZM15.75 13.418C15.75 11.4332 14.0711 9.82422 12 9.82422C9.92893 9.82422 8.25 11.4332 8.25 13.418C8.25 15.4027 9.92893 17.0117 12 17.0117C14.0711 17.0117 15.75 15.4027 15.75 13.418Z"
        fill="black"
      />
    </Svg>
  );
};

export const EyeCloseIconSvg = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_725_8908)">
      <Path
        d="M17.8822 19.2971C16.1234 20.4126 14.0829 21.0034 12.0002 21.0001C6.60815 21.0001 2.12215 17.1201 1.18115 12.0001C1.61118 9.67078 2.78278 7.54296 4.52115 5.93407L1.39215 2.80807L2.80715 1.39307L22.6062 21.1931L21.1912 22.6071L17.8812 19.2971H17.8822ZM5.93515 7.35007C4.57616 8.58566 3.62947 10.2088 3.22315 12.0001C3.53545 13.3665 4.16242 14.6412 5.05416 15.7227C5.94589 16.8041 7.07778 17.6625 8.3597 18.2294C9.64163 18.7963 11.0382 19.0561 12.4382 18.9882C13.8383 18.9203 15.2031 18.5264 16.4242 17.8381L14.3962 15.8101C13.5328 16.3539 12.5104 16.5882 11.4964 16.4745C10.4824 16.3608 9.53719 15.906 8.81572 15.1845C8.09425 14.463 7.63938 13.5178 7.52571 12.5038C7.41205 11.4899 7.64634 10.4674 8.19015 9.60407L5.93515 7.35007ZM12.9142 14.3281L9.67215 11.0861C9.49422 11.539 9.45234 12.034 9.55166 12.5104C9.65098 12.9868 9.88717 13.4238 10.2313 13.7679C10.5754 14.1121 11.0124 14.3482 11.4888 14.4476C11.9652 14.5469 12.4602 14.505 12.9132 14.3271L12.9142 14.3281ZM20.8072 16.5921L19.3762 15.1621C20.0446 14.2094 20.5205 13.1353 20.7772 12.0001C20.5054 10.8098 19.9944 9.68721 19.2753 8.70056C18.5562 7.71391 17.6439 6.88379 16.594 6.26067C15.5441 5.63755 14.3784 5.23443 13.1679 5.07583C11.9573 4.91723 10.7272 5.00645 9.55215 5.33807L7.97415 3.76007C9.22115 3.27007 10.5802 3.00007 12.0002 3.00007C17.3922 3.00007 21.8782 6.88007 22.8192 12.0001C22.5127 13.6658 21.824 15.2376 20.8072 16.5921ZM11.7232 7.50807C12.3597 7.46873 12.9973 7.56513 13.5937 7.79088C14.1901 8.01663 14.7318 8.36658 15.1827 8.81752C15.6336 9.26846 15.9836 9.81009 16.2093 10.4065C16.4351 11.003 16.5315 11.6406 16.4922 12.2771L11.7222 7.50807H11.7232Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_725_8908">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SettingIconSvg = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M11.001 14C11.7966 14 12.5597 13.6839 13.1223 13.1213C13.6849 12.5587 14.001 11.7956 14.001 11C14.001 10.2044 13.6849 9.44129 13.1223 8.87868C12.5597 8.31607 11.7966 8 11.001 8C10.2053 8 9.44227 8.31607 8.87966 8.87868C8.31705 9.44129 8.00098 10.2044 8.00098 11C8.00098 11.7956 8.31705 12.5587 8.87966 13.1213C9.44227 13.6839 10.2053 14 11.001 14Z"
        stroke="#12121B"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.623 9.395L17.526 6.745L19.001 5L17.001 3L15.266 4.483L12.559 3.37L11.936 1H9.98198L9.34998 3.401L6.70498 4.516L5.00098 3L3.00098 5L4.45398 6.789L3.37398 9.446L1.00098 10V12L3.40198 12.656L4.51698 15.3L3.00098 17L5.00098 19L6.79198 17.54L9.39798 18.612L10.001 21H12.001L12.605 18.613L15.256 17.515C15.698 17.832 17.001 19 17.001 19L19.001 17L17.517 15.25L18.615 12.598L21.001 11.978V10L18.623 9.395Z"
        stroke="#12121B"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const BellIconSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8.4C18 6.703 17.368 5.075 16.243 3.875C15.118 2.675 13.59 2 12 2C10.41 2 8.883 2.674 7.757 3.875C6.632 5.075 6 6.703 6 8.4C6 15.867 3 18 3 18H21C21 18 18 15.867 18 8.4Z"
        stroke="#12121B"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const PlusIconSvg = () => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9997 0.460938C6.0731 0.460938 0.458008 6.07603 0.458008 13.0026C0.458008 19.9292 6.0731 25.5443 12.9997 25.5443C19.9262 25.5443 25.5413 19.9292 25.5413 13.0026C25.5413 6.07603 19.9262 0.460938 12.9997 0.460938ZM13.8752 8.33555C13.8752 7.8523 13.4834 7.46055 13.0002 7.46055C12.5169 7.46055 12.1252 7.8523 12.1252 8.33555V12.1272H8.3335C7.85025 12.1272 7.4585 12.519 7.4585 13.0022C7.4585 13.4855 7.85025 13.8772 8.3335 13.8772H12.1252V17.6689C12.1252 18.1521 12.5169 18.5439 13.0002 18.5439C13.4834 18.5439 13.8752 18.1521 13.8752 17.6689V13.8772H17.6668C18.1501 13.8772 18.5418 13.4855 18.5418 13.0022C18.5418 12.519 18.1501 12.1272 17.6668 12.1272H13.8752V8.33555Z"
        fill="#169F9F"
      />
    </Svg>
  );
};

export const VerifiedTickIconSvg = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M3.52344 0.53125C2.79616 0.53125 2.09868 0.820158 1.58442 1.33442C1.07016 1.84868 0.78125 2.54616 0.78125 3.27344V12.9766C0.78125 13.7038 1.07016 14.4013 1.58442 14.9156C2.09868 15.4298 2.79616 15.7188 3.52344 15.7188H13.2266C13.9538 15.7187 14.6513 15.4298 15.1656 14.9156C15.6798 14.4013 15.9688 13.7038 15.9688 12.9766V3.27344C15.9687 2.54616 15.6798 1.84868 15.1656 1.33442C14.6513 0.820158 13.9538 0.53125 13.2266 0.53125H3.52344Z"
        fill="url(#paint0_linear_4098_20535)"
      />
      <Path
        d="M12.8298 5.8302L7.13115 11.523C7.0125 11.6415 6.85166 11.7081 6.68396 11.7081C6.51627 11.7081 6.35543 11.6415 6.23678 11.523L3.91984 9.2052C3.80806 9.08524 3.74721 8.92658 3.7501 8.76264C3.75299 8.5987 3.8194 8.44228 3.93535 8.32634C4.05129 8.21039 4.20771 8.14398 4.37165 8.14109C4.53559 8.13819 4.69425 8.19905 4.81422 8.31083L6.68481 10.1806L11.9355 4.93498C11.9943 4.87626 12.0641 4.8297 12.141 4.79796C12.2178 4.76622 12.3001 4.74992 12.3832 4.75C12.4664 4.75008 12.5487 4.76653 12.6254 4.79841C12.7022 4.8303 12.772 4.87699 12.8307 4.93583C12.8894 4.99466 12.936 5.06449 12.9677 5.14132C12.9994 5.21815 13.0157 5.30048 13.0157 5.38361C13.0156 5.46674 12.9991 5.54904 12.9673 5.62581C12.9354 5.70258 12.8887 5.77232 12.8298 5.83105"
        fill="url(#paint1_linear_4098_20535)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_4098_20535"
          x1="1.32378"
          y1="3.37891"
          x2="11.8048"
          y2="14.2683"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#36DFF1" />
          <Stop offset="1" stopColor="#2764E7" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_4098_20535"
          x1="5.51959"
          y1="5.28514"
          x2="9.61262"
          y2="18.5143"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="#B3E0FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export const HomeIconSvg = ({ color = "#169F9F" }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ServicesIconSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.9922 17H16.9922M19.9922 17H16.9922M16.9922 17V14M16.9922 17V20"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 9.4V4.6C4 4.26863 4.26863 4 4.6 4H9.4C9.73137 4 10 4.26863 10 4.6V9.4C10 9.73137 9.73137 10 9.4 10H4.6C4.26863 10 4 9.73137 4 9.4Z"
        stroke="#A0A0A4"
        strokeWidth="1.5"
      />
      <Path
        d="M4 19.4V14.6C4 14.2686 4.26863 14 4.6 14H9.4C9.73137 14 10 14.2686 10 14.6V19.4C10 19.7314 9.73137 20 9.4 20H4.6C4.26863 20 4 19.7314 4 19.4Z"
        stroke="#A0A0A4"
        strokeWidth="1.5"
      />
      <Path
        d="M14 9.4V4.6C14 4.26863 14.2686 4 14.6 4H19.4C19.7314 4 20 4.26863 20 4.6V9.4C20 9.73137 19.7314 10 19.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z"
        stroke="#A0A0A4"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
export const ManageFileIconSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.6349 10.4151L11.674 8.21211C11.8073 7.9293 12.1927 7.9293 12.326 8.21211L13.3651 10.4151L15.6886 10.7706C15.9867 10.8162 16.1055 11.1997 15.8897 11.4198L14.2087 13.1334L14.6054 15.5543C14.6564 15.8652 14.3446 16.1022 14.0778 15.9554L12 14.8118L9.92219 15.9554C9.65544 16.1022 9.34363 15.8652 9.39458 15.5543L9.7913 13.1334L8.1103 11.4198C7.89447 11.1997 8.01329 10.8162 8.31141 10.7706L10.6349 10.4151Z"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ChallengesIconSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 14V18.4C4 18.7314 4.26863 19 4.6 19H10"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 14V18.4C19 18.7314 18.7314 19 18.4 19H14"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 5H18.4C18.7314 5 19 5.26863 19 5.6V10"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 10V5.6C4 5.26863 4.26863 5 4.6 5H10"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 19V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V19"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 10H5C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14H4"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H19"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 5V4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4V5"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AdminIconSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 6L12 8"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16L12 18"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 12H6"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 12H16"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#A0A0A4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CrossIconSvg = ({ color = "#59595F" }) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0575 11.0585C11.5782 10.5378 12.4224 10.5378 12.9431 11.0585L20.0003 18.1157L27.0575 11.0585C27.5782 10.5378 28.4224 10.5378 28.9431 11.0585C29.4638 11.5792 29.4638 12.4234 28.9431 12.9441L21.8859 20.0013L28.9431 27.0585C29.4638 27.5792 29.4638 28.4234 28.9431 28.9441C28.4224 29.4648 27.5782 29.4648 27.0575 28.9441L20.0003 21.8869L12.9431 28.9441C12.4224 29.4648 11.5782 29.4648 11.0575 28.9441C10.5368 28.4234 10.5368 27.5792 11.0575 27.0585L18.1147 20.0013L11.0575 12.9441C10.5368 12.4234 10.5368 11.5792 11.0575 11.0585Z"
        fill={color}
      />
    </Svg>
  );
};

export const CommunityIconSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 18V17C1 15.3431 2.34315 14 4 14V14"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 18V17C23 15.3431 21.6569 14 20 14V14"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const WorkflowIconSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.5 19H22M22 19L19.5 16.5M22 19L19.5 21.5"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2L9.5 4.5L12 7"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 4.5C14.6421 4.5 18 7.85786 18 12C18 16.1421 14.6421 19.5 10.5 19.5H2"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.75583 5.5C4.51086 6.79595 3 9.22154 3 12C3 13.6884 3.55792 15.2465 4.49945 16.5"
        stroke="#717176"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ArrowDownIconSvg = ({ color = "#169F9F" }) => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.64645 4.14645C2.84171 3.95118 3.15829 3.95118 3.35355 4.14645L6 6.79289L8.64645 4.14645C8.84171 3.95118 9.15829 3.95118 9.35355 4.14645C9.54881 4.34171 9.54881 4.65829 9.35355 4.85355L6.35355 7.85355C6.15829 8.04882 5.84171 8.04882 5.64645 7.85355L2.64645 4.85355C2.45118 4.65829 2.45118 4.34171 2.64645 4.14645Z"
        fill={color}
      />
    </Svg>
  );
};

export const PerformanceIconSvg = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M21.333 21.3346V10.668"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 21.3346L16 14.668"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.667 21.332L10.667 17.332"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 27.4V4.6C4 4.26863 4.26863 4 4.6 4H27.4C27.7314 4 28 4.26863 28 4.6V27.4C28 27.7314 27.7314 28 27.4 28H4.6C4.26863 28 4 27.7314 4 27.4Z"
        stroke="black"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export const ArrowRightIconSvg = ({ color = "#000" }) => {
  return (
    <Svg width="6" height="10" viewBox="0 0 6 10" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.52827 0.527293C0.788619 0.266944 1.21073 0.266944 1.47108 0.527293L5.47108 4.52729C5.73143 4.78764 5.73143 5.20975 5.47108 5.4701L1.47108 9.4701C1.21073 9.73045 0.788619 9.73045 0.52827 9.4701C0.26792 9.20975 0.26792 8.78764 0.52827 8.52729L4.05687 4.9987L0.52827 1.4701C0.26792 1.20975 0.26792 0.787643 0.52827 0.527293Z"
        fill={color}
      />
    </Svg>
  );
};


export const OneHubLogoSvg = () => {
  return (
    <Svg width="75" height="45" viewBox="0 0 75 45" fill="none">
      <Path
        d="M13.38 24.8787C11.6356 24.8787 10.006 24.5689 8.49111 23.9491C6.97624 23.3065 5.64499 22.4228 4.49736 21.2981C3.37268 20.1505 2.48901 18.8307 1.84633 17.3388C1.22661 15.8239 0.916752 14.1943 0.916752 12.4499C0.916752 10.7055 1.22661 9.08732 1.84633 7.5954C2.48901 6.08053 3.37268 4.76075 4.49736 3.63608C5.64499 2.48845 6.97624 1.60477 8.49111 0.985049C10.006 0.342376 11.6356 0.0210392 13.38 0.0210392C15.1244 0.0210392 16.7541 0.342376 18.2689 0.985049C19.7838 1.60477 21.1036 2.48845 22.2283 3.63608C23.3759 4.76075 24.2596 6.08053 24.8793 7.5954C25.522 9.08732 25.8433 10.7055 25.8433 12.4499C25.8433 14.1943 25.522 15.8239 24.8793 17.3388C24.2596 18.8307 23.3759 20.1505 22.2283 21.2981C21.1036 22.4228 19.7838 23.3065 18.2689 23.9491C16.7541 24.5689 15.1244 24.8787 13.38 24.8787ZM13.38 19.6111C14.2752 19.6111 15.1129 19.4389 15.8933 19.0947C16.6737 18.7274 17.3508 18.2225 17.9246 17.5798C18.4985 16.9142 18.946 16.1567 19.2674 15.3075C19.5887 14.4353 19.7494 13.4827 19.7494 12.4499C19.7494 11.417 19.5887 10.476 19.2674 9.62671C18.946 8.75451 18.4985 7.99707 17.9246 7.3544C17.3508 6.68877 16.6737 6.18382 15.8933 5.83953C15.1129 5.47228 14.2752 5.28866 13.38 5.28866C12.4849 5.28866 11.6471 5.47228 10.8667 5.83953C10.0863 6.18382 9.40922 6.68877 8.8354 7.3544C8.26159 7.99707 7.81401 8.75451 7.49268 9.62671C7.17134 10.476 7.01067 11.417 7.01067 12.4499C7.01067 13.4827 7.17134 14.4353 7.49268 15.3075C7.81401 16.1567 8.26159 16.9142 8.8354 17.5798C9.40922 18.2225 10.0863 18.7274 10.8667 19.0947C11.6471 19.4389 12.4849 19.6111 13.38 19.6111ZM29.6406 24.5V0.399757H35.2181L45.9255 14.9976L45.8222 0.399757H51.3997V24.5H46.1665L35.1148 9.42013L35.2181 24.5H29.6406ZM56.3206 24.5V0.399757H74.5335V5.35752H62.2423V9.93657H70.9184V14.7566H62.2423V19.5422H74.6712V24.5H56.3206Z"
        fill="#021010"
      />
      <Path
        d="M15.5858 44.5V29.2788H19.3259V35.1933H25.4796V29.2788H29.2196V44.5H25.4796V38.4768H19.3259V44.5H15.5858ZM38.3711 44.7174C37.0084 44.7174 35.8197 44.442 34.805 43.8912C33.7902 43.3258 33.0074 42.5357 32.4566 41.521C31.9057 40.4917 31.6303 39.2813 31.6303 37.8896V29.2788H35.3703V37.8896C35.3703 38.5855 35.4936 39.1943 35.74 39.7162C35.9864 40.2381 36.3344 40.644 36.7837 40.9339C37.2331 41.2238 37.7623 41.3688 38.3711 41.3688C38.9799 41.3688 39.5091 41.2238 39.9585 40.9339C40.4078 40.644 40.7558 40.2381 41.0022 39.7162C41.2486 39.1943 41.3719 38.5855 41.3719 37.8896V29.2788H45.1119V37.8896C45.1119 39.2813 44.8365 40.4917 44.2856 41.521C43.7348 42.5357 42.952 43.3258 41.9372 43.8912C40.937 44.442 39.7483 44.7174 38.3711 44.7174ZM47.7477 44.5V29.2788H55.2713C56.257 29.2788 57.1268 29.46 57.8806 29.8224C58.6489 30.1703 59.2505 30.656 59.6854 31.2793C60.1203 31.9026 60.3378 32.6202 60.3378 33.432C60.3378 34.1423 60.1348 34.7874 59.7289 35.3673C59.323 35.9326 58.7867 36.3893 58.1198 36.7372C58.9171 37.0561 59.555 37.5272 60.0333 38.1506C60.5262 38.7594 60.7727 39.4553 60.7727 40.2381C60.7727 41.0644 60.548 41.8037 60.0986 42.456C59.6637 43.0939 59.0621 43.594 58.2938 43.9564C57.5255 44.3188 56.6339 44.5 55.6192 44.5H47.7477ZM51.4877 35.389H54.8364C55.3583 35.389 55.7787 35.2441 56.0976 34.9541C56.4165 34.6642 56.576 34.2873 56.576 33.8234C56.576 33.345 56.4165 32.9681 56.0976 32.6927C55.7932 32.4028 55.3728 32.2578 54.8364 32.2578H51.4877V35.389ZM51.4877 41.521H55.1408C55.7062 41.521 56.1556 41.3688 56.489 41.0644C56.8224 40.7599 56.9891 40.354 56.9891 39.8467C56.9891 39.3393 56.8224 38.9334 56.489 38.629C56.1556 38.3245 55.7062 38.1723 55.1408 38.1723H51.4877V41.521Z"
        fill="#169F9F"
      />
    </Svg>
  );
};

export const DemandIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path
      fill="#6D6D6D"
      d="M25.894 4.553A1 1 0 0 0 25 4h-6a1 1 0 0 0-.97 1.243l1.932 7.727-.166.53h10.07a.999.999 0 0 0 .028-.947l-4-8Z"
    />
    <Path
      fill="url(#a)"
      d="M25.894 4.553A1 1 0 0 0 25 4h-6a1 1 0 0 0-.97 1.243l1.932 7.727-.166.53h10.07a.999.999 0 0 0 .028-.947l-4-8Z"
    />
    <Path
      fill="#E8E8E8"
      d="M6.106 4.553A1 1 0 0 1 7 4h6a1 1 0 0 1 .97 1.243l-1.932 7.727.166.53H2.134a1 1 0 0 1-.028-.947l4-8Z"
    />
    <Path
      fill="url(#b)"
      d="M6.106 4.553A1 1 0 0 1 7 4h6a1 1 0 0 1 .97 1.243l-1.932 7.727.166.53H2.134a1 1 0 0 1-.028-.947l4-8Z"
    />
    <Path
      fill="#B6B6B6"
      d="M12.03 4.757A1 1 0 0 1 13 4h6a1 1 0 0 1 .97.757l2 8a1 1 0 0 1-.015.541l-.064.202h-11.78l-.064-.202a1 1 0 0 1-.016-.54l2-8.001Z"
    />
    <Path
      fill="url(#c)"
      d="M12.03 4.757A1 1 0 0 1 13 4h6a1 1 0 0 1 .97.757l2 8a1 1 0 0 1-.015.541l-.064.202h-11.78l-.064-.202a1 1 0 0 1-.016-.54l2-8.001Z"
    />
    <Path
      fill="url(#d)"
      d="m19.952 13-4.906 15.702a1 1 0 0 0 1.73.929l13-16A1 1 0 0 0 30 13H19.952Z"
    />
    <Path
      fill="#CACACA"
      d="M2 13a1 1 0 0 0 .224.63l13 16a1 1 0 0 0 1.73-.928L12.049 13H2Z"
    />
    <Path
      fill="url(#e)"
      d="M2 13a1 1 0 0 0 .224.63l13 16a1 1 0 0 0 1.73-.928L12.049 13H2Z"
    />
    <Path
      fill="#969696"
      d="M10 13a1 1 0 0 0 .046.298l5 16a1 1 0 0 0 1.909 0l5-16A1 1 0 0 0 22 13H10Z"
    />
    <Path
      fill="url(#f)"
      d="M10 13a1 1 0 0 0 .046.298l5 16a1 1 0 0 0 1.909 0l5-16A1 1 0 0 0 22 13H10Z"
    />
    <Path
      fill="url(#g)"
      fillOpacity={0.7}
      d="M7 4a1 1 0 0 0-.894.553l-4 8a1 1 0 0 0 .118 1.078l13 16a1 1 0 0 0 1.552 0l13-16a1 1 0 0 0 .118-1.078l-4-8A1 1 0 0 0 25 4H7Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={22.286}
        x2={28.281}
        y1={4}
        y2={18.604}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0FAFFF" />
        <Stop offset={1} stopColor="#102784" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12.286}
        x2={7.029}
        y1={0.042}
        y2={12.237}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9FF0F9" />
        <Stop offset={1} stopColor="#29C3FF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={16}
        x2={16}
        y1={4}
        y2={15.875}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3BD5FF" />
        <Stop offset={1} stopColor="#367AF2" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={33.529}
        x2={18.474}
        y1={4.5}
        y2={28.812}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1B44B1" />
        <Stop offset={1} stopColor="#2052CB" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={4.647}
        x2={14.617}
        y1={9.6}
        y2={30.298}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0094F0" />
        <Stop offset={1} stopColor="#6CE0FF" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={15.992}
        x2={15.992}
        y1={7.05}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2052CB" />
        <Stop offset={1} stopColor="#0FAFFF" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={-0.844}
        x2={21.529}
        y1={-20.483}
        y2={32.106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.533} stopColor="#FF6CE8" stopOpacity={0} />
        <Stop offset={1} stopColor="#FF6CE8" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const BadgeIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path
      fill="url(#a)"
      d="M10 19.313V29a.999.999 0 0 0 1.515.858L16 27.166l4.485 2.692A1 1 0 0 0 22 29v-9.688A11.45 11.45 0 0 1 16 21c-2.199 0-4.253-.617-6-1.688Z"
    />
    <Path
      fill="url(#b)"
      d="M22 20a9.96 9.96 0 0 1-6 2 9.96 9.96 0 0 1-6.36-2.283A9.98 9.98 0 0 1 6 12C6 6.477 10.477 2 16 2s10 4.477 10 10a9.99 9.99 0 0 1-4 8Z"
    />
    <Path
      fill="url(#c)"
      d="m16.337 7.21 1.34 2.72 3.003.434c.307.044.43.422.207.64l-2.171 2.115.513 2.99a.375.375 0 0 1-.544.394L16 15.09l-2.684 1.413a.374.374 0 0 1-.544-.395l.516-2.99-2.174-2.115a.375.375 0 0 1 .207-.639l3.003-.434 1.34-2.72a.376.376 0 0 1 .672 0Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 16.8444 -26.4886 0 16 17.645)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#163697" />
        <Stop offset={1} stopColor="#29C3FF" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(56.615 44.518 -68.546) scale(111.635 95.6102)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.772} stopColor="#FFCD0F" />
        <Stop offset={0.991} stopColor="#E67505" />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-4.99988 -16.70782 24.10472 -7.21342 18.5 16.547)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B03111" />
        <Stop offset={1} stopColor="#E67505" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export const PencilIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path
      fill="url(#a)"
      d="M2.667 5.333A1.333 1.333 0 0 1 4 4h18.667a1.333 1.333 0 1 1 0 2.667H4a1.333 1.333 0 0 1-1.333-1.334Z"
    />
    <Path
      fill="url(#b)"
      fillOpacity={0.7}
      d="M2.667 5.333A1.333 1.333 0 0 1 4 4h18.667a1.333 1.333 0 1 1 0 2.667H4a1.333 1.333 0 0 1-1.333-1.334Z"
    />
    <Path
      fill="url(#c)"
      d="M2.667 10.667A1.333 1.333 0 0 1 4 9.333h14.667a1.333 1.333 0 1 1 0 2.667H4a1.334 1.334 0 0 1-1.333-1.333Z"
    />
    <Path
      fill="url(#d)"
      fillOpacity={0.7}
      d="M2.667 10.667A1.333 1.333 0 0 1 4 9.333h14.667a1.333 1.333 0 1 1 0 2.667H4a1.334 1.334 0 0 1-1.333-1.333Z"
    />
    <Path
      fill="url(#e)"
      d="M2.667 16A1.333 1.333 0 0 1 4 14.667h10.667a1.333 1.333 0 1 1 0 2.666H4A1.334 1.334 0 0 1 2.667 16Z"
    />
    <Path
      fill="url(#f)"
      fillOpacity={0.7}
      d="M2.667 16A1.333 1.333 0 0 1 4 14.667h10.667a1.333 1.333 0 1 1 0 2.666H4A1.334 1.334 0 0 1 2.667 16Z"
    />
    <Path
      fill="url(#g)"
      d="M4.783 20.47 19.528 5.725l6.747 6.748L11.53 27.219 6.27 25.73l-1.488-5.26Z"
    />
    <Path
      fill="url(#h)"
      d="M5.255 20a4.133 4.133 0 0 0-1.1 1.968l-1.462 6.136A1 1 0 0 0 3.9 29.308l6.134-1.461a4.134 4.134 0 0 0 1.97-1.1S9.57 26.2 7.685 24.316C5.8 22.429 5.255 20 5.255 20Z"
    />
    <Path
      fill="url(#i)"
      d="M27.936 4.064a4.773 4.773 0 0 0-6.748 0l-3.075 3.075 6.747 6.746 3.076-3.073a4.773 4.773 0 0 0 0-6.748Z"
    />
    <Path
      fill="url(#j)"
      d="m17.04 8.213 2.827-2.826s.546 2.43 2.432 4.316c1.885 1.885 4.314 2.43 4.314 2.43l-2.826 2.83s-2.432-.547-4.318-2.431c-1.886-1.887-2.43-4.316-2.43-4.316"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-0.533}
        x2={7.141}
        y1={2.095}
        y2={22.793}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#36DFF1" />
        <Stop offset={1} stopColor="#0094F0" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={-0.533}
        x2={7.141}
        y1={2.095}
        y2={22.793}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#36DFF1" />
        <Stop offset={1} stopColor="#0094F0" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={-0.533}
        x2={7.141}
        y1={2.095}
        y2={22.793}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#36DFF1" />
        <Stop offset={1} stopColor="#0094F0" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={17.516}
        x2={20.592}
        y1={11.291}
        y2={19.612}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFA43D" />
        <Stop offset={1} stopColor="#FB5937" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={1.329}
        x2={8.059}
        y1={22.601}
        y2={29.289}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.255} stopColor="#FFD394" />
        <Stop offset={1} stopColor="#FF921F" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={26.987}
        x2={22.849}
        y1={5.001}
        y2={8.891}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F97DBD" />
        <Stop offset={1} stopColor="#DD3CE2" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={21.993}
        x2={15.227}
        y1={11.94}
        y2={8.981}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF921F" />
        <Stop offset={1} stopColor="#FFE994" />
      </LinearGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(133.903 3.387 12.661) scale(21.9748 9.68775)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A43CB" />
        <Stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(133.903 3.387 12.661) scale(21.9748 9.68775)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A43CB" />
        <Stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(133.903 3.387 12.661) scale(21.9748 9.68775)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A43CB" />
        <Stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export const ColorCircleIcon = () => (
  <Svg width={129} height={20} fill="none">
    <Circle cx={8} cy={10} r={8} fill="url(#a)" />
    <Circle cx={28} cy={10} r={8} fill="url(#b)" />
    <Circle cx={48} cy={10} r={8} fill="url(#c)" opacity={0.4} />
    <Circle cx={68} cy={10} r={8} fill="url(#d)" opacity={0.4} />
    <Circle cx={88} cy={10} r={8} fill="url(#e)" opacity={0.4} />
    <Circle cx={108} cy={10} r={8} fill="url(#f)" opacity={0.4} />
    <Defs>
      <LinearGradient
        id="a"
        x1={10.389}
        x2={2.273}
        y1={2}
        y2={16.075}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2F9E44" />
        <Stop offset={1} stopColor="#8CE99A" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={25.611}
        x2={33.727}
        y1={18}
        y2={3.925}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4DABF7" />
        <Stop offset={1} stopColor="#1971C2" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={50.389}
        x2={42.273}
        y1={2}
        y2={16.075}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D0D0D1" />
        <Stop offset={1} stopColor="#A0A0A4" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={70.389}
        x2={62.273}
        y1={2}
        y2={16.075}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D0D0D1" />
        <Stop offset={1} stopColor="#A0A0A4" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={90.389}
        x2={82.273}
        y1={2}
        y2={16.075}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D0D0D1" />
        <Stop offset={1} stopColor="#A0A0A4" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={110.389}
        x2={102.273}
        y1={2}
        y2={16.075}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D0D0D1" />
        <Stop offset={1} stopColor="#A0A0A4" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const CommunityCardIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path
      fill="url(#a)"
      d="M16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667 2.667 8.636 2.667 16 8.636 29.333 16 29.333Z"
    />
    <Path
      fill="url(#b)"
      fillOpacity={0.7}
      d="M16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667 2.667 8.636 2.667 16 8.636 29.333 16 29.333Z"
    />
    <Path
      fill="url(#c)"
      fillOpacity={0.2}
      d="M16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667 2.667 8.636 2.667 16 8.636 29.333 16 29.333Z"
    />
    <Path
      fill="url(#d)"
      fillRule="evenodd"
      d="M12.607 3.102c-.53.713-1.004 1.58-1.416 2.556-.603 1.427-1.09 3.127-1.414 5.009H3.776a13.329 13.329 0 0 0-.599 1.666H9.54A32.666 32.666 0 0 0 9.58 20H3.278c.18.574.397 1.13.65 1.667h5.91c.322 1.749.786 3.333 1.353 4.675.413.975.887 1.842 1.417 2.556 1.107.29 2.248.436 3.393.435a13.334 13.334 0 0 0 3.393-.435c.529-.713 1.004-1.58 1.416-2.556.567-1.342 1.032-2.927 1.354-4.675h5.91c.253-.538.47-1.093.65-1.667H22.42c.16-1.275.247-2.617.247-4 0-1.263-.072-2.492-.207-3.667h6.363a13.324 13.324 0 0 0-.6-1.666h-6c-.324-1.882-.811-3.582-1.414-5.009-.412-.975-.886-1.842-1.416-2.556A13.333 13.333 0 0 0 16 2.667c-1.173 0-2.31.151-3.393.435Zm-1.137 7.565c.303-1.652.737-3.131 1.256-4.36.517-1.224 1.104-2.164 1.698-2.784.598-.623 1.136-.856 1.576-.856.44 0 .977.233 1.575.856.595.62 1.182 1.56 1.699 2.784.52 1.229.953 2.707 1.255 4.36h-9.06ZM16 29.333c.44 0 .977-.233 1.575-.856.595-.62 1.182-1.56 1.699-2.784.484-1.146.893-2.508 1.192-4.026h-8.933c.299 1.518.709 2.88 1.193 4.026.517 1.224 1.104 2.164 1.698 2.784.598.623 1.136.856 1.576.856ZM11 16c0 1.395.093 2.738.26 4h9.48c.167-1.262.26-2.605.26-4 0-1.273-.077-2.503-.218-3.667h-9.564A30.673 30.673 0 0 0 11 16Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#e)"
      d="M18.668 26.975c-.24-.34-.45-.7-.628-1.075-.471-.994-.707-2.094-.707-3.3v-3.85a.553.553 0 0 1 .556-.55 8.59 8.59 0 0 0 3.07-.575c.59-.228 1.158-.508 1.698-.836.347-.21.684-.437 1.01-.679a.56.56 0 0 1 .666 0c.503.373 1.01.697 1.519.97.613.329 1.23.585 1.852.769a8.373 8.373 0 0 0 2.407.351c.307 0 .556.247.556.55v3.85c0 3.667-2.191 6.362-6.464 8.029a.56.56 0 0 1-.406 0c-1.412-.551-2.595-1.214-3.55-1.987a8.872 8.872 0 0 1-.969-.909 7.8 7.8 0 0 1-.61-.758Z"
    />
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(180 12.115 11.437) scale(11.2019)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#003580" />
        <Stop offset={1} stopColor="#003580" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(37.278 -21.225 48.022) scale(17.5421 19.0293)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.412} stopColor="#1B44B1" />
        <Stop offset={1} stopColor="#1B44B1" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(42.397 -19.298 44.568) scale(18.0621 19.2934)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.445} stopColor="#3BD5FF" stopOpacity={0} />
        <Stop offset={0.815} stopColor="#3BD5FF" />
      </RadialGradient>
      <LinearGradient
        id="a"
        x1={8.593}
        x2={27.852}
        y1={7.111}
        y2={24.889}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#29C3FF" />
        <Stop offset={1} stopColor="#2052CB" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={19.833}
        x2={30.684}
        y1={16}
        y2={30.153}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#62BE55" />
        <Stop offset={1} stopColor="#1E794A" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const SearchIcon = () => (
  <Svg width={15} height={16} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.875}
      d="m10.625 11.125 2.5 2.5M1.875 7.375a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"
    />
  </Svg>
);

export const IconLogo = () => (
  <Svg width={40} height={40} fill="none">
    <G clipPath="url(#a)">
      <Rect width={40} height={40} fill="#169F9F" rx={7.5} />
      <Path
        fill="#B9E2E2"
        d="M11.204 19.114h2.09c.682 0 1.235-.182 1.66-.546.424-.379.636-.879.636-1.5 0-.636-.212-1.136-.636-1.5-.41-.379-.963-.568-1.66-.568h-2.09v4.114Zm2.454 3.09h-2.477V28H7.59V11.886h6.068c1.636 0 2.962.485 3.977 1.455 1.03.97 1.546 2.205 1.546 3.705 0 1.53-.515 2.772-1.546 3.727-1.015.954-2.34 1.431-3.977 1.431Zm20.075-6.886h-4.978V28h-3.59V15.318H20.21v-3.432h13.523v3.432Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={40} height={40} fill="#fff" rx={7.5} />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CalendarIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path
      fill="url(#a)"
      d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17Z"
    />
    <Path
      fill="url(#b)"
      d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17Z"
    />
    <Path
      fill="url(#c)"
      d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17Z"
    />
    <Path
      fill="url(#d)"
      d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17Z"
    />
    <Path
      fill="url(#e)"
      d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17Z"
    />
    <Path
      fill="url(#f)"
      d="M12 10.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-1.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM14 10.5a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2h-7a1 1 0 0 0-1 1Zm1 4.5a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2h-7Zm-1 6.5a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2h-7a1 1 0 0 0-1 1Z"
    />
    <Path
      fill="url(#g)"
      d="m31.74 13.656-.919-.299a1.9 1.9 0 0 1-1.199-1.197l-.298-.918a.363.363 0 0 0-.684 0l-.299.918a1.89 1.89 0 0 1-1.18 1.197l-.919.299a.363.363 0 0 0 0 .684l.92.298a1.9 1.9 0 0 1 1.197 1.202l.3.918a.362.362 0 0 0 .683 0l.3-.918a1.889 1.889 0 0 1 1.197-1.197l.92-.299a.363.363 0 0 0 0-.684l-.019-.004Z"
    />
    <Path
      fill="url(#h)"
      d="M21.775 8.837a3.5 3.5 0 0 0-1.647-1.168l-1.684-.546a.665.665 0 0 1 0-1.254l1.684-.547a3.47 3.47 0 0 0 2.15-2.154l.014-.042.547-1.682a.666.666 0 0 1 1.255 0l.547 1.682a3.47 3.47 0 0 0 2.198 2.196l1.683.547.034.008a.665.665 0 0 1 0 1.254l-1.684.547a3.47 3.47 0 0 0-2.197 2.196l-.548 1.682-.016.042a.664.664 0 0 1-1.238-.042l-.548-1.682a3.499 3.499 0 0 0-.55-1.037Z"
    />
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-3.5 0 0 -1.74793 29 14.5)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A43CB" />
        <Stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-7 0 0 -3.49587 23.5 7.5)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A43CB" />
        <Stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 6 -2.99646 0 23.5 7.5)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A43CB" />
        <Stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 4 -1.99764 0 29 14.5)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4A43CB" />
        <Stop offset={1} stopColor="#4A43CB" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="g"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(63.379 17.2 6.887) scale(34.3364 26.737)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.718} stopColor="#FFCD0F" />
        <Stop offset={0.991} stopColor="#E67505" />
      </RadialGradient>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(22.7857 41.44634 -32.27337 17.74273 4.348 -26.696)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.698} stopColor="#FFCD0F" />
        <Stop offset={0.991} stopColor="#E67505" />
      </RadialGradient>
      <LinearGradient
        id="a"
        x1={3.929}
        x2={21.872}
        y1={7.875}
        y2={26.517}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0FAFFF" />
        <Stop offset={1} stopColor="#2764E7" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={11.692}
        x2={21.978}
        y1={10.077}
        y2={34.999}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#B3E0FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const NameLogo = () => (
  <Svg width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#169F9F"
        d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
      />
      <Path
        fill="#B9E2E2"
        d="m8.418 17-1.732-3.6h-.763V17H3.768V7.332H7.6c.936 0 1.69.286 2.264.859.581.573.872 1.295.872 2.168 0 .655-.168 1.223-.504 1.705-.337.472-.805.813-1.405 1.022L10.791 17H8.418Zm-2.495-5.454H7.19c.436 0 .773-.105 1.009-.314.236-.218.355-.505.355-.86 0-.363-.119-.65-.355-.858-.236-.21-.573-.314-1.01-.314H5.924v2.346ZM18.795 17l-.696-1.964h-3.736L13.668 17h-2.264l3.64-9.668h2.496L21.14 17h-2.345Zm-2.537-7.268-1.186 3.34h2.346l-1.16-3.34Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const GraphIcon = () => (
  <Svg width={304} height={238} fill="none">
    <Path
      fill="url(#a)"
      d="M4 127a8 8 0 0 1 8-8h66.667a8 8 0 0 1 8 8v11a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8v-11Z"
    />
    <G filter="url(#b)">
      <Path
        fill="#fff"
        d="M4 166a8 8 0 0 1 8-8h66.667a8 8 0 0 1 8 8v58a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8v-58Z"
      />
      <Path
        fill="#021010"
        d="M25.552 182.24c-1.546 0-2.874-.533-3.983-1.6-1.1-1.067-1.648-2.507-1.648-4.32 0-1.216.277-2.283.832-3.2.554-.917 1.253-1.595 2.096-2.032a5.675 5.675 0 0 1 2.703-.672c1.28 0 2.358.325 3.233.976.885.64 1.471 1.515 1.76 2.624l-1.457.512c-.213-.853-.623-1.509-1.232-1.968-.608-.469-1.376-.704-2.304-.704-1.109 0-2.058.395-2.848 1.184-.789.779-1.184 1.872-1.184 3.28 0 1.408.395 2.507 1.184 3.296.79.789 1.74 1.184 2.848 1.184.928 0 1.702-.245 2.32-.736.62-.501 1.051-1.163 1.297-1.984l1.392.512c-.31 1.099-.907 1.984-1.793 2.656-.874.661-1.946.992-3.216.992Zm10.966-8.016v1.6a4.636 4.636 0 0 0-.656-.048c-1.408 0-2.112.789-2.112 2.368V182h-1.504v-7.696h1.472v1.344c.47-.981 1.237-1.472 2.304-1.472.17 0 .336.016.496.048ZM39.61 182h-1.488v-7.696h1.488V182Zm-1.52-9.84a1.075 1.075 0 0 1-.304-.768c0-.299.102-.555.304-.768.214-.213.47-.32.768-.32.299 0 .555.107.768.32.214.203.32.459.32.768 0 .299-.106.555-.32.768-.213.203-.47.304-.768.304-.298 0-.554-.101-.768-.304Zm6.095-.288v2.432h1.664v1.36h-1.664v4c0 .363.08.629.24.8.17.171.448.256.832.256.224 0 .421-.021.592-.064v1.28c-.256.096-.597.144-1.024.144-.661 0-1.184-.192-1.568-.576-.384-.384-.576-.923-.576-1.616v-4.224h-1.472v-1.36h.416c.395 0 .688-.107.88-.32.203-.224.304-.512.304-.864v-1.248h1.376ZM49.344 182h-1.489v-7.696h1.489V182Zm-1.52-9.84a1.075 1.075 0 0 1-.304-.768c0-.299.1-.555.303-.768.214-.213.47-.32.769-.32.298 0 .554.107.767.32.214.203.32.459.32.768 0 .299-.106.555-.32.768-.213.203-.469.304-.767.304-.3 0-.555-.101-.768-.304Zm7.31 3.296c-.65 0-1.205.235-1.664.704-.448.469-.672 1.131-.672 1.984 0 .843.224 1.504.672 1.984.46.48 1.02.72 1.68.72.64 0 1.126-.16 1.456-.48.342-.32.571-.688.688-1.104l1.328.576c-.213.64-.618 1.2-1.216 1.68-.586.48-1.338.72-2.256.72-1.12 0-2.048-.389-2.784-1.168-.736-.779-1.104-1.755-1.104-2.928 0-1.195.368-2.171 1.104-2.928.736-.768 1.66-1.152 2.768-1.152.94 0 1.696.24 2.272.72.587.48.971 1.056 1.152 1.728l-1.36.576a2.43 2.43 0 0 0-.672-1.152c-.33-.32-.794-.48-1.392-.48Zm4.695 4.48c0-.661.213-1.189.64-1.584.426-.405.992-.656 1.696-.752l2.08-.304c.394-.053.592-.245.592-.576 0-.405-.139-.736-.416-.992-.278-.256-.694-.384-1.248-.384-.512 0-.918.144-1.216.432-.299.277-.475.651-.528 1.12l-1.44-.336c.074-.736.41-1.333 1.008-1.792.597-.469 1.312-.704 2.144-.704 1.088 0 1.893.267 2.416.8.522.523.784 1.195.784 2.016v3.856c0 .459.032.88.096 1.264h-1.472a6.342 6.342 0 0 1-.08-1.04c-.214.341-.528.64-.944.896-.406.256-.918.384-1.536.384-.758 0-1.376-.224-1.856-.672-.48-.459-.72-1.003-.72-1.632Zm2.784 1.04c.672 0 1.21-.181 1.616-.544.405-.363.608-.939.608-1.728v-.352l-2.352.352c-.342.053-.614.176-.816.368-.203.192-.304.453-.304.784 0 .299.112.56.336.784.234.224.538.336.912.336ZM70.188 182h-1.504v-11.584h1.504V182Z"
      />
      <Path
        fill="#EE3E43"
        d="M49.358 214h-4.384v-13.888h-4.992v-2.976c1.493-.021 2.741-.395 3.744-1.12 1.002-.747 1.61-1.675 1.824-2.784h3.808V214Z"
      />
    </G>
    <Path
      fill="url(#c)"
      d="M110.667 91a8 8 0 0 1 8-8h66.666a8 8 0 0 1 8 8v47a8 8 0 0 1-8 8h-66.666a8 8 0 0 1-8-8V91Z"
    />
    <G filter="url(#d)">
      <Path
        fill="#fff"
        d="M110.667 166a8 8 0 0 1 8-8h66.666a8 8 0 0 1 8 8v58a8 8 0 0 1-8 8h-66.666a8 8 0 0 1-8-8v-58Z"
      />
      <Path
        fill="#021010"
        d="m133.999 182-1.232-3.168h-5.024l-1.2 3.168h-1.68l4.512-11.344h1.808L135.695 182h-1.696Zm-3.76-9.712-1.936 5.088h3.904l-1.968-5.088Zm9.976 3.168c-.651 0-1.205.235-1.664.704-.448.469-.672 1.131-.672 1.984 0 .843.224 1.504.672 1.984.459.48 1.019.72 1.68.72.64 0 1.125-.16 1.456-.48.341-.32.571-.688.688-1.104l1.328.576c-.213.64-.619 1.2-1.216 1.68-.587.48-1.339.72-2.256.72-1.12 0-2.048-.389-2.784-1.168-.736-.779-1.104-1.755-1.104-2.928 0-1.195.368-2.171 1.104-2.928.736-.768 1.659-1.152 2.768-1.152.939 0 1.696.24 2.272.72.587.48.971 1.056 1.152 1.728l-1.36.576a2.425 2.425 0 0 0-.672-1.152c-.331-.32-.795-.48-1.392-.48Zm7.268-3.584v2.432h1.664v1.36h-1.664v4c0 .363.08.629.24.8.171.171.448.256.832.256.224 0 .422-.021.592-.064v1.28c-.256.096-.597.144-1.024.144-.661 0-1.184-.192-1.568-.576-.384-.384-.576-.923-.576-1.616v-4.224h-1.472v-1.36h.416c.395 0 .688-.107.88-.32.203-.224.304-.512.304-.864v-1.248h1.376Zm5.16 10.128h-1.488v-7.696h1.488V182Zm-1.52-9.84a1.073 1.073 0 0 1-.304-.768c0-.299.101-.555.304-.768.213-.213.469-.32.768-.32.299 0 .555.107.768.32.213.203.32.459.32.768 0 .299-.107.555-.32.768a1.073 1.073 0 0 1-.768.304c-.299 0-.555-.101-.768-.304Zm5.663 8.016c.469.48 1.04.72 1.712.72.672 0 1.237-.24 1.696-.72.469-.491.704-1.168.704-2.032 0-.853-.235-1.52-.704-2a2.23 2.23 0 0 0-1.696-.736c-.672 0-1.243.245-1.712.736-.459.48-.688 1.147-.688 2 0 .864.229 1.541.688 2.032Zm-1.12-4.944c.747-.779 1.691-1.168 2.832-1.168 1.141 0 2.08.389 2.816 1.168.747.768 1.12 1.739 1.12 2.912 0 1.184-.368 2.165-1.104 2.944-.736.768-1.68 1.152-2.832 1.152s-2.096-.384-2.832-1.152c-.736-.779-1.104-1.76-1.104-2.944 0-1.173.368-2.144 1.104-2.912Zm10.196 2.32V182h-1.504v-7.696h1.472v1.104c.512-.885 1.301-1.328 2.368-1.328.885 0 1.563.283 2.032.848.48.565.72 1.296.72 2.192V182h-1.504v-4.624c0-1.291-.597-1.936-1.792-1.936-.565 0-1.008.203-1.328.608-.309.395-.464.896-.464 1.504Zm6.76 2.448 1.36-.48c.054.416.235.763.544 1.04.31.267.726.4 1.248.4.406 0 .726-.096.96-.288a.938.938 0 0 0 .352-.736c0-.512-.33-.843-.992-.992l-1.312-.288c-.597-.128-1.066-.384-1.408-.768-.341-.384-.512-.848-.512-1.392 0-.661.267-1.232.8-1.712a2.83 2.83 0 0 1 1.936-.72c.491 0 .928.075 1.312.224.384.139.683.325.896.56.214.235.374.453.48.656.107.203.187.411.24.624l-1.328.496a1.425 1.425 0 0 0-.112-.368 1.79 1.79 0 0 0-.256-.416 1.04 1.04 0 0 0-.48-.352 1.818 1.818 0 0 0-.752-.144c-.373 0-.682.101-.928.304-.234.203-.352.443-.352.72 0 .491.294.8.88.928l1.248.272c.683.149 1.206.427 1.568.832.374.395.56.88.56 1.456 0 .608-.25 1.157-.752 1.648-.49.491-1.178.736-2.064.736-.949 0-1.69-.235-2.224-.704-.533-.48-.837-.992-.912-1.536Z"
      />
      <Path
        fill="#1864AB"
        d="m144.069 208.176 4.128-.928c.042.981.405 1.813 1.088 2.496.704.661 1.6.992 2.688.992 1.024 0 1.877-.309 2.56-.928.682-.619 1.024-1.44 1.024-2.464 0-1.131-.363-1.995-1.088-2.592-.704-.597-1.568-.896-2.592-.896-1.302 0-2.368.469-3.2 1.408a53.799 53.799 0 0 0-4.032-1.376l2.464-10.656h11.712v3.808h-8.704l-1.024 4.576c.917-.853 2.165-1.28 3.744-1.28 2.133 0 3.85.619 5.152 1.856 1.301 1.216 1.952 2.912 1.952 5.088 0 2.005-.726 3.712-2.176 5.12-1.451 1.408-3.382 2.112-5.792 2.112-2.176 0-4.011-.629-5.504-1.888-1.472-1.259-2.272-2.741-2.4-4.448Z"
      />
    </G>
    <Path
      fill="url(#e)"
      d="M217.333 8a8 8 0 0 1 8-8H292a8 8 0 0 1 8 8v130a8 8 0 0 1-8 8h-66.667a8 8 0 0 1-8-8V8Z"
    />
    <G filter="url(#f)">
      <Path
        fill="#fff"
        d="M217.333 166a8 8 0 0 1 8-8H292a8 8 0 0 1 8 8v58a8 8 0 0 1-8 8h-66.667a8 8 0 0 1-8-8v-58Z"
      />
      <Path
        fill="#021010"
        d="m245.119 182-1.232-3.168h-5.024l-1.2 3.168h-1.68l4.512-11.344h1.808L246.815 182h-1.696Zm-3.76-9.712-1.936 5.088h3.904l-1.968-5.088Zm9.976 3.168c-.651 0-1.205.235-1.664.704-.448.469-.672 1.131-.672 1.984 0 .843.224 1.504.672 1.984.459.48 1.019.72 1.68.72.64 0 1.125-.16 1.456-.48.341-.32.571-.688.688-1.104l1.328.576c-.213.64-.619 1.2-1.216 1.68-.587.48-1.339.72-2.256.72-1.12 0-2.048-.389-2.784-1.168-.736-.779-1.104-1.755-1.104-2.928 0-1.195.368-2.171 1.104-2.928.736-.768 1.659-1.152 2.768-1.152.939 0 1.696.24 2.272.72.587.48.971 1.056 1.152 1.728l-1.36.576a2.425 2.425 0 0 0-.672-1.152c-.331-.32-.795-.48-1.392-.48Zm7.268-3.584v2.432h1.664v1.36h-1.664v4c0 .363.08.629.24.8.171.171.448.256.832.256.224 0 .422-.021.592-.064v1.28c-.256.096-.597.144-1.024.144-.661 0-1.184-.192-1.568-.576-.384-.384-.576-.923-.576-1.616v-4.224h-1.472v-1.36h.416c.395 0 .688-.107.88-.32.203-.224.304-.512.304-.864v-1.248h1.376Zm5.16 10.128h-1.488v-7.696h1.488V182Zm-1.52-9.84a1.073 1.073 0 0 1-.304-.768c0-.299.101-.555.304-.768.213-.213.469-.32.768-.32.299 0 .555.107.768.32.213.203.32.459.32.768 0 .299-.107.555-.32.768a1.073 1.073 0 0 1-.768.304c-.299 0-.555-.101-.768-.304Zm10.671 2.144L269.842 182h-1.52l-3.12-7.696h1.696l2.192 5.936 2.208-5.936h1.616Zm2.181 3.056h4.208c-.022-.576-.214-1.045-.576-1.408-.363-.373-.875-.56-1.536-.56-.598 0-1.088.197-1.472.592a2.063 2.063 0 0 0-.624 1.376Zm4.432 2 1.296.448a3.45 3.45 0 0 1-1.248 1.76c-.608.448-1.344.672-2.208.672-1.078 0-1.995-.368-2.752-1.104-.747-.747-1.12-1.749-1.12-3.008 0-1.173.362-2.144 1.088-2.912.725-.768 1.589-1.152 2.592-1.152 1.162 0 2.069.368 2.72 1.104.65.725.976 1.701.976 2.928 0 .192-.011.352-.032.48h-5.792c.01.683.234 1.243.672 1.68.448.437.997.656 1.648.656 1.098 0 1.818-.517 2.16-1.552Z"
      />
      <Path
        fill="#169F9F"
        d="M256.667 214h-4.384v-13.888h-4.992v-2.976c1.494-.021 2.742-.395 3.744-1.12 1.003-.747 1.611-1.675 1.824-2.784h3.808V214Zm12.048 0h-4.384v-13.888h-4.992v-2.976c1.493-.021 2.741-.395 3.744-1.12 1.002-.747 1.61-1.675 1.824-2.784h3.808V214Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={45.605}
        x2={45.605}
        y1={119}
        y2={146}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F69EA1" />
        <Stop offset={1} stopColor="#EE3E43" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={152}
        x2={152}
        y1={83}
        y2={146}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4DABF7" />
        <Stop offset={1} stopColor="#1864AB" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={258.939}
        x2={258.939}
        y1={0}
        y2={146}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8ACFCF" />
        <Stop offset={1} stopColor="#169F9F" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const StarIcon = () => (
  <Svg width={28} height={26} fill="none">
    <Path
      fill="url(#a)"
      d="M12.536 1.059c.599-1.214 2.33-1.214 2.929 0L18.7 7.614l7.233 1.05c1.34.196 1.875 1.842.905 2.787l-5.233 5.102 1.235 7.204c.229 1.334-1.172 2.352-2.37 1.722L14 22.078l-6.47 3.4c-1.198.63-2.598-.387-2.37-1.721l1.236-7.204-5.234-5.103c-.97-.944-.434-2.59.905-2.785L9.3 7.614l3.236-6.555Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={27.33}
        x2={-0.08}
        y1={26.239}
        y2={0.371}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF6F47" />
        <Stop offset={1} stopColor="#FFCD0F" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const BulbIcon = () => (
  <Svg width={32} height={32} fill="none">
    <Path
      fill="url(#a)"
      d="M17.638 29.322a3 3 0 0 0 2.692-2.314l1.555-6.721a.333.333 0 0 1 .094-.167c2.44-2.33 3.688-4.938 3.688-7.787 0-5.338-4.328-9.666-9.667-9.666-5.339 0-9.667 4.328-9.667 9.666 0 2.849 1.248 5.458 3.69 7.787.047.045.08.103.094.167l1.552 6.718.06.224a3 3 0 0 0 2.862 2.102h2.816l.231-.009Z"
    />
    <Path
      fill="url(#b)"
      d="M17.638 29.322a3 3 0 0 0 2.692-2.314l1.555-6.721a.333.333 0 0 1 .094-.167c2.44-2.33 3.688-4.938 3.688-7.787 0-5.338-4.328-9.666-9.667-9.666-5.339 0-9.667 4.328-9.667 9.666 0 2.849 1.248 5.458 3.69 7.787.047.045.08.103.094.167l1.552 6.718.06.224a3 3 0 0 0 2.862 2.102h2.816l.231-.009Z"
    />
    <Path
      fill="url(#c)"
      fillOpacity={0.2}
      d="M17.638 29.322a3 3 0 0 0 2.692-2.314l1.555-6.721a.333.333 0 0 1 .094-.167c2.44-2.33 3.688-4.938 3.688-7.787 0-5.338-4.328-9.666-9.667-9.666-5.339 0-9.667 4.328-9.667 9.666 0 2.849 1.248 5.458 3.69 7.787.047.045.08.103.094.167l1.552 6.718.06.224a3 3 0 0 0 2.862 2.102h2.816l.231-.009Z"
    />
    <Path
      fill="url(#d)"
      fillOpacity={0.2}
      d="M17.638 29.322a3 3 0 0 0 2.692-2.314l1.555-6.721a.333.333 0 0 1 .094-.167c2.44-2.33 3.688-4.938 3.688-7.787 0-5.338-4.328-9.666-9.667-9.666-5.339 0-9.667 4.328-9.667 9.666 0 2.849 1.248 5.458 3.69 7.787.047.045.08.103.094.167l1.552 6.718.06.224a3 3 0 0 0 2.862 2.102h2.816l.231-.009Z"
    />
    <Path
      fill="url(#e)"
      fillOpacity={0.2}
      d="M17.638 29.322a3 3 0 0 0 2.692-2.314l1.555-6.721a.333.333 0 0 1 .094-.167c2.44-2.33 3.688-4.938 3.688-7.787 0-5.338-4.328-9.666-9.667-9.666-5.339 0-9.667 4.328-9.667 9.666 0 2.849 1.248 5.458 3.69 7.787.047.045.08.103.094.167l1.552 6.718.06.224a3 3 0 0 0 2.862 2.102h2.816l.231-.009Z"
    />
    <Path
      fill="url(#f)"
      fillOpacity={0.2}
      d="M17.638 29.322a3 3 0 0 0 2.692-2.314l1.555-6.721a.333.333 0 0 1 .094-.167c2.44-2.33 3.688-4.938 3.688-7.787 0-5.338-4.328-9.666-9.667-9.666-5.339 0-9.667 4.328-9.667 9.666 0 2.849 1.248 5.458 3.69 7.787.047.045.08.103.094.167l1.552 6.718.06.224a3 3 0 0 0 2.862 2.102h2.816l.231-.009Z"
    />
    <Path
      fill="url(#g)"
      d="M15.999 13.516h-.001a.829.829 0 0 0-.829.829v9.752a.829.829 0 1 0 1.658 0v-9.752a.829.829 0 0 0-.828-.829Z"
    />
    <Path
      fill="url(#h)"
      d="M16.827 8.162a.829.829 0 1 0-1.658 0v2.351a.829.829 0 1 0 1.658 0V8.162Z"
    />
    <Path
      fill="url(#i)"
      d="M10.245 11.42a.828.828 0 1 1 1.172-1.172l1.663 1.663a.828.828 0 1 1-1.172 1.172l-1.663-1.663Z"
    />
    <Path
      fill="url(#j)"
      d="M21.755 11.42a.828.828 0 1 0-1.172-1.172l-1.663 1.663a.829.829 0 1 0 1.172 1.172l1.663-1.663Z"
    />
    <Path fill="url(#k)" d="M11.281 25.327h9.438l.382-1.653H10.9l.381 1.653Z" />
    <Defs>
      <LinearGradient
        id="b"
        x1={16}
        x2={16}
        y1={2.667}
        y2={29.331}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.792} stopColor="#D34719" stopOpacity={0} />
        <Stop offset={0.835} stopColor="#D34719" />
        <Stop offset={1} stopColor="#D34719" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={15.999}
        x2={15.999}
        y1={13.516}
        y2={24.932}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF2BE" />
        <Stop offset={0.437} stopColor="#FFD638" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={15.169}
        x2={16.827}
        y1={9.338}
        y2={9.338}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF2BE" />
        <Stop offset={1} stopColor="#FFD638" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={10.992}
        x2={12.339}
        y1={12.355}
        y2={11.008}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF2BE" />
        <Stop offset={1} stopColor="#FFD638" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={19.609}
        x2={20.946}
        y1={11.059}
        y2={12.396}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF2BE" />
        <Stop offset={1} stopColor="#FFD638" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={15.157}
        x2={16.445}
        y1={23.327}
        y2={26.629}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC7A3" />
        <Stop offset={1} stopColor="#FF9C70" />
      </LinearGradient>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(6.3565 22.90525 -33.87585 9.40097 9.555 5.285)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE06B" />
        <Stop offset={0.376} stopColor="#FFA43D" />
        <Stop offset={1} stopColor="#E67505" />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(1.55981 1.83777 -1.46536 1.24372 11.798 12.264)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.165} stopColor="#741C06" />
        <Stop offset={0.854} stopColor="#741C06" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 3.34211 -2.42329 0 16 10.365)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.165} stopColor="#741C06" />
        <Stop offset={0.854} stopColor="#741C06" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-1.94587 1.74513 -1.30626 -1.45652 20.509 12.48)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.165} stopColor="#741C06" />
        <Stop offset={0.854} stopColor="#741C06" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-2.4685 0 0 -7.35393 16 18.285)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.165} stopColor="#741C06" />
        <Stop offset={0.777} stopColor="#741C06" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);