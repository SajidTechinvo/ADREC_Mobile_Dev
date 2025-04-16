import {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
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

export const CrossIconSvg = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0575 11.0585C11.5782 10.5378 12.4224 10.5378 12.9431 11.0585L20.0003 18.1157L27.0575 11.0585C27.5782 10.5378 28.4224 10.5378 28.9431 11.0585C29.4638 11.5792 29.4638 12.4234 28.9431 12.9441L21.8859 20.0013L28.9431 27.0585C29.4638 27.5792 29.4638 28.4234 28.9431 28.9441C28.4224 29.4648 27.5782 29.4648 27.0575 28.9441L20.0003 21.8869L12.9431 28.9441C12.4224 29.4648 11.5782 29.4648 11.0575 28.9441C10.5368 28.4234 10.5368 27.5792 11.0575 27.0585L18.1147 20.0013L11.0575 12.9441C10.5368 12.4234 10.5368 11.5792 11.0575 11.0585Z"
        fill="#59595F"
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
