import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

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
