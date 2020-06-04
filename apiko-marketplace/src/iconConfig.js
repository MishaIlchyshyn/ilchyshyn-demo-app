import React from "react";

export const iconConfig = {
  swichPassword: ({ size, color, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 16"
      width={size}
      fill={color}
      {...props}
    >
      <path d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z" />
    </svg>
  ),
  lightLogo: ({ size, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 102 42"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.0382 26.9963C15.6757 28.7668 13.5618 29.904 11.1805 29.904H11.1551C8.76105 29.904 6.63446 28.7409 5.28465 26.9575L11.1678 21.0129L17.0382 26.9963Z"
        fill="#FF9900"
      />
      <path
        d="M52.0569 3.39877C52.0569 4.13538 52.3243 4.78154 52.8464 5.31138C53.3813 5.84123 54.0052 6.11261 54.7311 6.11261C55.4569 6.11261 56.0936 5.84123 56.6157 5.31138C57.1378 4.78154 57.4052 4.13538 57.4052 3.39877C57.4052 2.66215 57.1378 2.016 56.6157 1.48615C56.0936 0.956306 55.4569 0.684921 54.7311 0.684921C54.0052 0.684921 53.3685 0.956306 52.8464 1.48615C52.3243 2.016 52.0569 2.66215 52.0569 3.39877ZM52.6682 30.24C52.6682 30.8345 52.8592 31.3385 53.2539 31.7391C53.6487 32.1397 54.1453 32.3335 54.7311 32.3335C55.3551 32.3335 55.8517 32.1397 56.2337 31.7391C56.6157 31.3514 56.8067 30.8474 56.8067 30.24V11.8892C56.8067 11.256 56.6157 10.752 56.2337 10.3643C55.8517 9.97661 55.3551 9.78277 54.7311 9.78277C54.1453 9.78277 53.6487 9.97661 53.2539 10.3643C52.8592 10.752 52.6682 11.256 52.6682 11.8892V30.24Z"
        fill="#262525"
      />
      <path
        d="M79.3206 30.6018C79.3206 31.2092 79.0786 31.7132 78.5948 32.1268C78.1873 32.4628 77.7543 32.6178 77.2959 32.6178C76.6974 32.6178 76.2135 32.3723 75.8315 31.8812L68.1146 22.1889L66.0772 23.9982V30.3046C66.0772 30.912 65.8989 31.4031 65.5296 31.7649C65.1603 32.1397 64.6764 32.3206 64.0906 32.3206C63.4921 32.3206 63.0082 32.1397 62.6517 31.7649C62.2824 31.3902 62.1041 30.912 62.1041 30.3046V2.13231C62.1041 1.52493 62.2824 1.03385 62.6517 0.672002C63.021 0.297233 63.4921 0.11631 64.0906 0.11631C64.6891 0.11631 65.173 0.297233 65.5296 0.672002C65.8989 1.04677 66.0772 1.53785 66.0772 2.13231V18.9194L75.9461 9.97662C76.3026 9.61477 76.7228 9.44677 77.2067 9.44677C77.7798 9.44677 78.2382 9.66646 78.5948 10.1058C78.9513 10.4677 79.1169 10.8942 79.1169 11.3852C79.1169 11.9668 78.9004 12.432 78.4674 12.7938L70.9925 19.5526L78.8749 29.3742C79.1678 29.6972 79.3206 30.1108 79.3206 30.6018Z"
        fill="#262525"
      />
      <path
        d="M96.5753 11.088C98.2689 12.0572 99.5933 13.4142 100.561 15.1458C101.516 16.8775 102 18.8548 102 21.0905C102 23.2874 101.516 25.2517 100.574 26.9834C99.6315 28.7151 98.3071 30.072 96.6135 31.0412C94.9198 32.0105 92.9843 32.5015 90.8195 32.5015C88.6547 32.5015 86.7191 32.0234 85.0127 31.0412C83.3064 30.072 81.9693 28.7151 81.027 26.9834C80.0719 25.2517 79.6007 23.2874 79.6007 21.0905C79.6007 18.8548 80.0846 16.8775 81.027 15.1458C81.982 13.4142 83.3064 12.0702 85.0127 11.088C86.7191 10.1188 88.6547 9.62769 90.8195 9.62769C92.9588 9.62769 94.8816 10.1188 96.5753 11.088ZM82.9371 21.0517C82.9371 25.4714 86.4644 29.0382 90.8067 29.0382C95.1491 29.0382 98.6637 25.4714 98.6764 21.0517C98.6764 16.632 95.1491 13.0652 90.8067 13.0652C86.4517 13.0652 82.9371 16.6449 82.9371 21.0517Z"
        fill="#262525"
      />
      <path
        d="M43.0921 11.088C44.7858 12.0572 46.1101 13.4142 47.0779 15.1458C48.033 16.8775 48.5168 18.8548 48.5041 21.0905C48.5041 23.2874 48.0202 25.2517 47.0779 26.9834C46.1356 28.7151 44.8112 30.072 43.1176 31.0412C41.424 32.0105 39.4884 32.5015 37.3236 32.5015C35.1588 32.5015 33.2232 32.0234 31.5169 31.0412C31.0712 30.7957 30.6509 30.5114 30.2562 30.2012V39.8935C30.2562 40.5268 30.0652 41.0308 29.6831 41.4185C29.3011 41.8062 28.8045 42 28.1805 42C27.5948 42 27.0981 41.8062 26.7034 41.4185C26.3086 41.0308 26.1176 40.5268 26.1176 39.8935V21.0905C26.1176 18.8548 26.6015 16.8775 27.5438 15.1458C28.4989 13.4142 29.8232 12.0702 31.5296 11.088C32.994 10.248 34.6494 9.76985 36.4704 9.65354H36.5341H36.5723C36.8015 9.64062 37.0562 9.62769 37.2981 9.62769H37.3363C39.4757 9.62769 41.3985 10.1188 43.0921 11.088ZM29.4539 21.0517C29.4539 25.4714 32.9813 29.0382 37.3236 29.0382C41.6659 29.0382 45.1933 25.4714 45.1933 21.0517C45.1933 16.632 41.6659 13.0652 37.3236 13.0652C32.9685 13.0652 29.4539 16.6449 29.4539 21.0517Z"
        fill="#262525"
      />
      <path
        d="M16.8854 11.1268C18.579 12.1348 19.9161 13.5046 20.9094 15.2492C21.9026 16.9938 22.3865 18.9323 22.3738 21.0775V30.2788C22.3738 30.8732 22.1828 31.3772 21.788 31.7778C21.406 32.1785 20.9094 32.3723 20.3109 32.3723C19.7251 32.3723 19.2285 32.1785 18.8337 31.7778C18.439 31.3902 18.2479 30.8862 18.2479 30.2788V30.2012C17.8659 30.5114 17.4457 30.7828 17.0127 31.0412C15.3191 32.0105 13.3835 32.5015 11.2187 32.5015C9.05393 32.5015 7.11835 32.0234 5.41198 31.0412C3.70562 30.072 2.36854 28.7151 1.42622 26.9834C1.41985 26.9769 1.41667 26.9672 1.41348 26.9575C1.4103 26.9478 1.40712 26.9382 1.40075 26.9317L1.36255 26.9188C0.993258 26.1951 0.700375 25.4455 0.483895 24.6702C0.464794 24.5926 0.445693 24.5183 0.426592 24.444C0.407491 24.3697 0.38839 24.2954 0.369288 24.2178C0.362921 24.1855 0.356554 24.1565 0.350187 24.1274C0.34382 24.0983 0.337453 24.0692 0.331086 24.0369C0.28015 23.8431 0.241949 23.6363 0.203747 23.4295L0.203745 23.4295C0.203745 23.4166 0.200562 23.4037 0.197378 23.3908C0.194195 23.3778 0.191011 23.3649 0.191011 23.352C0.152809 23.1194 0.114607 22.8868 0.0891386 22.6542V22.6283C0.0636704 22.3828 0.0382022 22.1372 0.0254682 21.8788V21.8658C0.0127341 21.6074 0 21.336 0 21.0775C0 18.9323 0.483895 16.9938 1.46442 15.2492C2.44494 13.5046 3.79476 12.1348 5.51386 11.1268C7.23296 10.1317 9.13034 9.62769 11.2187 9.62769C13.3071 9.62769 15.1918 10.1188 16.8854 11.1268ZM3.3236 21.0517C3.3236 25.4714 6.85094 29.0382 11.1933 29.0382C15.5356 29.0382 19.0629 25.4714 19.0629 21.0517C19.0629 16.632 15.5483 13.0652 11.1933 13.0652C6.8382 13.0652 3.3236 16.6449 3.3236 21.0517Z"
        fill="#262525"
      />
    </svg>
  ),
  darkLogo: ({ size, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 102 42"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.0382 26.9963C15.6757 28.7668 13.5618 29.904 11.1805 29.904H11.1551C8.76107 29.904 6.63448 28.7409 5.28467 26.9575L11.1678 21.0129L17.0382 26.9963Z"
        fill="#349A89"
      />
      <path
        d="M52.0569 3.39877C52.0569 4.13538 52.3243 4.78154 52.8464 5.31138C53.3812 5.84123 54.0052 6.11261 54.731 6.11261C55.4569 6.11261 56.0936 5.84123 56.6157 5.31138C57.1378 4.78154 57.4052 4.13538 57.4052 3.39877C57.4052 2.66215 57.1378 2.016 56.6157 1.48615C56.0936 0.956306 55.4569 0.684921 54.731 0.684921C54.0052 0.684921 53.3685 0.956306 52.8464 1.48615C52.3243 2.016 52.0569 2.66215 52.0569 3.39877ZM52.6681 30.24C52.6681 30.8345 52.8591 31.3385 53.2539 31.7391C53.6486 32.1397 54.1453 32.3335 54.731 32.3335C55.355 32.3335 55.8516 32.1397 56.2337 31.7391C56.6157 31.3514 56.8067 30.8474 56.8067 30.24V11.8892C56.8067 11.256 56.6157 10.752 56.2337 10.3643C55.8516 9.97661 55.355 9.78277 54.731 9.78277C54.1453 9.78277 53.6486 9.97661 53.2539 10.3643C52.8591 10.752 52.6681 11.256 52.6681 11.8892V30.24Z"
        fill="white"
      />
      <path
        d="M79.3206 30.6018C79.3206 31.2092 79.0787 31.7132 78.5948 32.1268C78.1873 32.4628 77.7543 32.6178 77.2959 32.6178C76.6974 32.6178 76.2135 32.3723 75.8315 31.8812L68.1146 22.1889L66.0772 23.9982V30.3046C66.0772 30.912 65.8989 31.4031 65.5296 31.7649C65.1603 32.1397 64.6764 32.3206 64.0906 32.3206C63.4921 32.3206 63.0082 32.1397 62.6517 31.7649C62.2824 31.3902 62.1041 30.912 62.1041 30.3046V2.13231C62.1041 1.52493 62.2824 1.03385 62.6517 0.672002C63.021 0.297233 63.4921 0.11631 64.0906 0.11631C64.6891 0.11631 65.173 0.297233 65.5296 0.672002C65.8989 1.04677 66.0772 1.53785 66.0772 2.13231V18.9194L75.9461 9.97662C76.3026 9.61477 76.7229 9.44677 77.2067 9.44677C77.7798 9.44677 78.2382 9.66646 78.5948 10.1058C78.9513 10.4677 79.1169 10.8942 79.1169 11.3852C79.1169 11.9668 78.9004 12.432 78.4674 12.7938L70.9925 19.5526L78.8749 29.3742C79.1678 29.6972 79.3206 30.1108 79.3206 30.6018Z"
        fill="white"
      />
      <path
        d="M96.5752 11.088C98.2689 12.0572 99.5932 13.4142 100.561 15.1458C101.516 16.8775 102 18.8548 102 21.0905C102 23.2874 101.516 25.2517 100.574 26.9834C99.6314 28.7151 98.3071 30.072 96.6134 31.0412C94.9198 32.0105 92.9842 32.5015 90.8194 32.5015C88.6546 32.5015 86.7191 32.0234 85.0127 31.0412C83.3063 30.072 81.9692 28.7151 81.0269 26.9834C80.0719 25.2517 79.6007 23.2874 79.6007 21.0905C79.6007 18.8548 80.0846 16.8775 81.0269 15.1458C81.982 13.4142 83.3063 12.0702 85.0127 11.088C86.7191 10.1188 88.6546 9.62769 90.8194 9.62769C92.9588 9.62769 94.8816 10.1188 96.5752 11.088ZM82.937 21.0517C82.937 25.4714 86.4644 29.0382 90.8067 29.0382C95.149 29.0382 98.6636 25.4714 98.6764 21.0517C98.6764 16.632 95.149 13.0652 90.8067 13.0652C86.4516 13.0652 82.937 16.6449 82.937 21.0517Z"
        fill="white"
      />
      <path
        d="M43.0921 11.088C44.7857 12.0572 46.1101 13.4142 47.0779 15.1458C48.0329 16.8775 48.5168 18.8548 48.5041 21.0905C48.5041 23.2874 48.0202 25.2517 47.0779 26.9834C46.1355 28.7151 44.8112 30.072 43.1176 31.0412C41.4239 32.0105 39.4883 32.5015 37.3235 32.5015C35.1588 32.5015 33.2232 32.0234 31.5168 31.0412C31.0711 30.7957 30.6509 30.5114 30.2561 30.2012V39.8935C30.2561 40.5268 30.0651 41.0308 29.6831 41.4185C29.3011 41.8062 28.8044 42 28.1805 42C27.5947 42 27.0981 41.8062 26.7033 41.4185C26.3086 41.0308 26.1176 40.5268 26.1176 39.8935V21.0905C26.1176 18.8548 26.6014 16.8775 27.5438 15.1458C28.4988 13.4142 29.8232 12.0702 31.5295 11.088C32.994 10.248 34.6494 9.76985 36.4704 9.65354H36.534H36.5722C36.8014 9.64062 37.0561 9.62769 37.2981 9.62769H37.3363C39.4756 9.62769 41.3985 10.1188 43.0921 11.088ZM29.4539 21.0517C29.4539 25.4714 32.9812 29.0382 37.3235 29.0382C41.6659 29.0382 45.1932 25.4714 45.1932 21.0517C45.1932 16.632 41.6659 13.0652 37.3235 13.0652C32.9685 13.0652 29.4539 16.6449 29.4539 21.0517Z"
        fill="white"
      />
      <path
        d="M16.8854 11.1268C18.579 12.1348 19.9161 13.5046 20.9094 15.2492C21.9026 16.9938 22.3865 18.9323 22.3738 21.0775V30.2788C22.3738 30.8732 22.1828 31.3772 21.788 31.7778C21.406 32.1785 20.9094 32.3723 20.3109 32.3723C19.7251 32.3723 19.2285 32.1785 18.8337 31.7778C18.439 31.3902 18.2479 30.8862 18.2479 30.2788V30.2012C17.8659 30.5114 17.4457 30.7828 17.0127 31.0412C15.3191 32.0105 13.3835 32.5015 11.2187 32.5015C9.05393 32.5015 7.11835 32.0234 5.41198 31.0412C3.70562 30.072 2.36854 28.7151 1.42622 26.9834C1.41985 26.9769 1.41667 26.9672 1.41348 26.9575C1.4103 26.9478 1.40712 26.9382 1.40075 26.9317L1.36255 26.9188C0.993258 26.1951 0.700375 25.4455 0.483895 24.6702C0.464794 24.5926 0.445693 24.5183 0.426592 24.444C0.407491 24.3697 0.38839 24.2954 0.369288 24.2178C0.362921 24.1855 0.356554 24.1565 0.350187 24.1274C0.34382 24.0983 0.337453 24.0692 0.331086 24.0369C0.28015 23.8431 0.241949 23.6363 0.203747 23.4295L0.203745 23.4295C0.203745 23.4166 0.200562 23.4037 0.197378 23.3908C0.194195 23.3778 0.191011 23.3649 0.191011 23.352C0.152809 23.1194 0.114607 22.8868 0.0891386 22.6542V22.6283C0.0636704 22.3828 0.0382022 22.1372 0.0254682 21.8788V21.8658C0.0127341 21.6074 0 21.336 0 21.0775C0 18.9323 0.483895 16.9938 1.46442 15.2492C2.44494 13.5046 3.79476 12.1348 5.51386 11.1268C7.23296 10.1317 9.13034 9.62769 11.2187 9.62769C13.3071 9.62769 15.1918 10.1188 16.8854 11.1268ZM3.3236 21.0517C3.3236 25.4714 6.85094 29.0382 11.1933 29.0382C15.5356 29.0382 19.0629 25.4714 19.0629 21.0517C19.0629 16.632 15.5483 13.0652 11.1933 13.0652C6.8382 13.0652 3.3236 16.6449 3.3236 21.0517Z"
        fill="white"
      />
    </svg>
  ),
  location: ({ size, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 12 17"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.43994 0.680054C2.86325 0.680054 0.439941 3.10139 0.439941 5.66467C0.439941 10.8436 5.37654 16.5268 5.23994 16.8801C5.65098 16.8384 5.74321 16.8801 6.43994 16.8801C5.94567 16.8739 6.03115 16.8384 6.43994 16.8801C6.30559 16.52 11.2399 10.7423 11.2399 5.66467C11.2399 3.10139 8.81663 0.680054 6.43994 0.680054ZM6.43994 8.15698C4.84649 8.15698 4.03994 7.32142 4.03994 6.91082C4.03994 5.25615 4.84649 4.41852 6.43994 4.41852C6.83339 4.41852 7.63994 5.25615 7.63994 6.91082C7.63994 7.32142 6.83339 8.15698 6.43994 8.15698Z"
        fill="#5C5C5C"
      />
    </svg>
  ),
  saved: ({ size, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 17 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 1.18016C10.5328 -0.489899 13.5751 -0.386848 15.4836 1.48538C16.4619 2.4443 17 3.72024 17 5.078C17 6.43654 16.4619 7.7117 15.4836 8.67062L9.40693 14.6318C9.15674 14.8773 8.82797 15 8.5 15C8.17203 15 7.84326 14.8773 7.59307 14.6318L1.51637 8.67062C0.538066 7.7117 0 6.43576 0 5.078C0 3.72024 0.538066 2.44509 1.51637 1.48538C3.42566 -0.386848 6.46802 -0.489112 8.5 1.18016ZM8.72613 13.964L14.8036 8.00276C15.5999 7.2224 16.0377 6.18403 16.0377 5.078C16.0377 3.97276 15.5999 2.9336 14.8036 2.15324C13.159 0.540611 10.4839 0.540611 8.84 2.15324C8.65156 2.33732 8.34684 2.33732 8.1592 2.15324C7.33726 1.34614 6.25712 0.943375 5.17778 0.943375C4.09844 0.943375 3.0183 1.34693 2.19637 2.15324C1.40009 2.93438 0.962264 3.97276 0.962264 5.078C0.962264 6.18324 1.40009 7.22162 2.19637 8.00276L8.27307 13.964C8.39816 14.0867 8.60104 14.0867 8.72613 13.964Z"
        fill="#B7B7B7"
      />
    </svg>
  ),
  unsaved: ({ size, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.4836 1.48538C13.5751 -0.386848 10.5328 -0.489899 8.5 1.18016C6.46802 -0.489112 3.42566 -0.386848 1.51637 1.48538C0.538066 2.44509 0 3.72024 0 5.078C0 6.43576 0.538066 7.7117 1.51637 8.67062L7.59307 14.6318C7.84326 14.8773 8.17203 15 8.5 15C8.82797 15 9.15674 14.8773 9.40693 14.6318L15.4836 8.67062C16.4619 7.7117 17 6.43654 17 5.078C17 3.72024 16.4619 2.4443 15.4836 1.48538Z"
        fill="#349A89"
      />
    </svg>
  ),
  linkToSaved: ({ size, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 20 19"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.468 0.0105307C15.968 0.0105307 17.3937 0.638047 18.383 1.6169C19.3723 2.59553 20 4.02102 19.9998 5.52122C19.9998 6.0105 19.9498 6.48984 19.8509 6.95736C19.6523 7.89422 19.4115 8.56145 18.8616 9.40413C18.5925 9.81671 18.3537 10.1615 18.1276 10.4465C17.9068 10.7252 17.5957 11.0636 17.2021 11.4574C16.8084 11.8509 16.4892 12.1594 16.2446 12.3829C16.1231 12.4936 15.9724 12.6248 15.7958 12.7784C15.6164 12.9346 15.4101 13.114 15.1807 13.319C14.4444 13.9763 13.8748 14.4919 13.4785 14.8614C13.0875 15.2261 12.5981 15.7361 12.0103 16.3933C11.4279 17.0447 10.9303 17.7051 10.4997 18.3508C10.3769 18.5351 10.202 18.6168 9.99974 18.6168C9.80843 18.6168 9.6466 18.5333 9.52111 18.3508C8.84863 17.3735 8.13827 16.5208 7.1701 15.5956C6.69147 15.138 6.32696 14.7899 6.07438 14.5636C6.02983 14.5237 5.981 14.4799 5.92779 14.4321C5.67275 14.203 5.31713 13.8836 4.85088 13.4786C4.36134 13.0533 3.98912 12.7233 3.74448 12.4997C3.49984 12.2764 3.16484 11.9628 2.7552 11.5636C2.34575 11.1648 2.04255 10.819 1.82967 10.5423C1.61703 10.2659 1.36853 9.91726 1.09572 9.49991C0.826111 9.08729 0.623431 8.6822 0.489314 8.30841C0.219216 7.55445 0 6.55292 0 5.52118C0 4.02102 0.627745 2.59553 1.61706 1.61687C2.60657 0.638047 4.03206 0.010498 5.53199 0.010498C6.41484 0.010498 7.24458 0.212524 8.04255 0.616936C8.84049 1.02115 9.48938 1.57422 10 2.27641C10.5107 1.57422 11.1595 1.02115 11.9575 0.616969C12.7552 0.212524 13.585 0.0105307 14.468 0.0105307ZM16.8723 10.0849C17.9018 8.94429 18.5184 7.78661 18.7233 6.60622C18.7844 6.25468 18.8191 5.89337 18.8195 5.52119C18.8195 4.31903 18.394 3.29775 17.5429 2.45733C16.6918 1.6169 15.6705 1.19138 14.4683 1.19138C13.6279 1.19138 12.8407 1.41468 12.128 1.87223C11.4154 2.32952 10.9022 2.93981 10.543 3.69125C10.434 3.9189 10.245 4.02102 10.0003 4.02102C9.7557 4.02102 9.58184 3.91138 9.47903 3.69125C9.12429 2.93256 8.57485 2.32952 7.862 1.87223C7.14913 1.41468 6.37249 1.19138 5.5321 1.19138C4.33017 1.19138 3.30887 1.61694 2.44713 2.46798C1.59606 3.30841 1.17053 4.32968 1.17053 5.52119C1.17053 6.1487 1.22615 6.71517 1.40452 7.26576L1.64919 8.02106C1.77132 8.39856 2.06808 8.83694 2.30577 9.18807C2.36045 9.26885 2.41201 9.34501 2.45759 9.41475C2.57563 9.59501 2.7556 9.81896 2.98958 10.0743C3.03998 10.1293 3.08828 10.1819 3.13444 10.2323C3.30261 10.4156 3.44257 10.5682 3.55331 10.6914C3.69926 10.8534 3.92259 11.067 4.21285 11.3296L4.88305 11.936L5.617 12.5849C6.30606 13.194 6.80851 13.6382 7.13828 13.9359C7.46805 14.2339 7.91217 14.6833 8.48932 15.2763C9.06102 15.8641 9.5637 16.4361 9.99991 16.9998C10.4148 16.4253 10.9014 15.8375 11.4574 15.2445C12.0184 14.6461 12.4894 14.1704 12.8722 13.8191C13.266 13.4575 13.7685 13.0027 14.3935 12.4466C15.5982 11.375 16.423 10.5827 16.8723 10.0849Z"
        fill="white"
      />
    </svg>
  ),
  linkOutSaved: ({ size, ...props }) => (
    <svg
      width={size}
      viewBox="0 0 20 19"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.383 1.6169C17.3937 0.638047 15.968 0.0105307 14.468 0.0105307C13.585 0.0105307 12.7552 0.212524 11.9575 0.616969C11.1595 1.02115 10.5107 1.57422 10 2.27641C9.48938 1.57422 8.84049 1.02115 8.04255 0.616936C7.24458 0.212524 6.41484 0.010498 5.53199 0.010498C4.03206 0.010498 2.60657 0.638047 1.61706 1.61687C0.627745 2.59553 0 4.02102 0 5.52118C0 6.55292 0.219216 7.55445 0.489314 8.30841C0.623431 8.6822 0.826111 9.08729 1.09572 9.49991C1.36853 9.91726 1.61703 10.2659 1.82967 10.5423C2.04255 10.819 2.34575 11.1648 2.7552 11.5636C3.16484 11.9628 3.49984 12.2764 3.74448 12.4997C3.98912 12.7233 4.36134 13.0533 4.85088 13.4786C5.41441 13.9681 5.81634 14.3326 6.07438 14.5636C6.32696 14.7899 6.69147 15.138 7.1701 15.5956C8.13827 16.5208 8.84863 17.3735 9.52111 18.3508C9.6466 18.5333 9.80843 18.6168 9.99974 18.6168C10.202 18.6168 10.3769 18.5351 10.4997 18.3508C10.9303 17.7051 11.4279 17.0447 12.0103 16.3933C12.5981 15.7361 13.0875 15.2261 13.4785 14.8614C13.8748 14.4919 14.4444 13.9763 15.1807 13.319C15.6359 12.9123 15.9997 12.6062 16.2446 12.3829C16.4892 12.1594 16.8084 11.8509 17.2021 11.4574C17.5957 11.0636 17.9068 10.7252 18.1276 10.4465C18.3537 10.1615 18.5925 9.81671 18.8616 9.40413C19.4115 8.56145 19.6523 7.89422 19.8509 6.95736C19.9498 6.48984 19.9998 6.0105 19.9998 5.52122C20 4.02102 19.3723 2.59553 18.383 1.6169Z"
        fill="white"
      />
    </svg>
  ),
  addProductPhotos: ({ size, ...props }) => (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="17" width="4" height="38" rx="2" fill="#349A89" />
      <rect
        y="21"
        width="4"
        height="38"
        rx="2"
        transform="rotate(-90 0 21)"
        fill="#349A89"
      />
    </svg>
  ),
  remove: ({ size, ...props }) => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="7.5921"
        y="9.40796"
        width="4"
        height="24"
        rx="2"
        transform="rotate(-45 7.5921 9.40796)"
        fill="#349A89"
      />
      <rect
        x="9.37848"
        y="26.3785"
        width="4"
        height="24"
        rx="2"
        transform="rotate(-135 9.37848 26.3785)"
        fill="#349A89"
      />
    </svg>
  ),
};
