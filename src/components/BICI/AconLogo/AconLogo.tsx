import { AconLogoProps } from './AconLogo.types.ts';

export default function AconLogo({ variant, width, height }: AconLogoProps) {
  const widthToApply = (() => {
    if (width) return width;
    else if (variant === 'beta') return 127;
    else return 100;
  })();

  const heightToApply = (() => {
    if (height) return height;
    else if (variant === 'beta') return 27;
    else return 30;
  })();

  if (variant === 'beta')
    return (
      <svg width={widthToApply} height={heightToApply} viewBox="0 0 200 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.1718 0H9.86188L0 43.0336H13.448L14.3445 37.6545H28.6891L29.5857 43.0337L43.0337 43.0336L33.1718 0ZM24.5053 12.5515H18.5284L15.9882 27.7926H27.0455L24.5053 12.5515Z"
          fill="black"
        />
        <path
          d="M43.0337 21.5168C43.0337 9.6334 52.6671 0 64.5505 0H75.3089L75.3089 14.3446L65.3566 12.9874C60.1879 12.2826 55.5852 16.3003 55.5852 21.5168C55.5852 26.7334 60.1879 30.7511 65.3566 30.0463L75.3089 28.6891L75.3089 43.0336H64.5505C52.6671 43.0336 43.0337 33.4002 43.0337 21.5168Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.5154 0C88.1271 0 78.8951 9.23203 78.8951 20.6203V22.4134C78.8951 33.8017 88.1271 43.0337 99.5154 43.0337C110.904 43.0337 120.136 33.8017 120.136 22.4134V20.6203C120.136 9.23203 110.904 0 99.5154 0ZM99.5154 12.5515C95.0591 12.5515 91.4466 16.164 91.4466 20.6203V22.4134C91.4466 26.8697 95.0591 30.4822 99.5154 30.4822C103.972 30.4822 107.584 26.8697 107.584 22.4134V20.6203C107.584 16.164 103.972 12.5515 99.5154 12.5515Z"
          fill="black"
        />
        <path d="M123.722 43.0337H137.17L135.722 19.8617L148.636 41.2374V21.9464L135.377 0H123.722V43.0337Z" fill="black" />
        <path d="M149.282 21.6584H161.376V0H147.928L149.282 21.6584Z" fill="black" />
        <path
          d="M153.072 43.1045H159.948C163.838 43.1045 165.746 41.1221 165.746 38.4762C165.746 35.9049 163.921 34.3953 162.113 34.3041V34.1382C163.772 33.7483 165.082 32.5871 165.082 30.5218C165.082 27.992 163.257 26.1175 159.575 26.1175H153.072V43.1045ZM156.149 40.5332V35.5565H159.542C161.441 35.5565 162.619 36.7177 162.619 38.2356C162.619 39.5876 161.69 40.5332 159.459 40.5332H156.149ZM156.149 33.3419V28.6556H159.26C161.068 28.6556 162.005 29.6094 162.005 30.9199C162.005 32.4129 160.794 33.3419 159.193 33.3419H156.149Z"
          fill="black"
        />
        <path
          d="M173.463 43.3533C176.433 43.3533 178.473 41.9018 179.004 39.6871L176.2 39.372C175.794 40.4502 174.799 41.0143 173.505 41.0143C171.564 41.0143 170.278 39.7369 170.253 37.5555H179.128V36.6348C179.128 32.1641 176.441 30.1983 173.306 30.1983C169.656 30.1983 167.276 32.8774 167.276 36.809C167.276 40.8069 169.623 43.3533 173.463 43.3533ZM170.262 35.5316C170.353 33.9059 171.555 32.5374 173.347 32.5374C175.072 32.5374 176.234 33.7981 176.25 35.5316H170.262Z"
          fill="black"
        />
        <path
          d="M187.563 30.3642H185.05V27.3119H182.047V30.3642H180.239V32.6867H182.047V39.7701C182.031 42.1672 183.773 43.345 186.029 43.2786C186.883 43.2537 187.472 43.0879 187.795 42.98L187.289 40.6327C187.123 40.6742 186.783 40.7488 186.41 40.7488C185.655 40.7488 185.05 40.4834 185.05 39.2724V32.6867H187.563V30.3642Z"
          fill="black"
        />
        <path
          d="M193.273 43.3616C195.272 43.3616 196.467 42.4243 197.014 41.3543H197.114V43.1045H200V34.5778C200 31.2102 197.255 30.1983 194.824 30.1983C192.145 30.1983 190.088 31.3927 189.425 33.7152L192.228 34.1133C192.527 33.2424 193.373 32.4959 194.841 32.4959C196.234 32.4959 196.997 33.2092 196.997 34.4617V34.5114C196.997 35.3741 196.093 35.4155 193.846 35.6561C191.374 35.9215 189.01 36.6597 189.01 39.5296C189.01 42.0345 190.843 43.3616 193.273 43.3616ZM194.053 41.1553C192.8 41.1553 191.905 40.583 191.905 39.4798C191.905 38.3269 192.908 37.8458 194.252 37.655C195.04 37.5472 196.616 37.3481 197.006 37.0329V38.5342C197.006 39.9526 195.861 41.1553 194.053 41.1553Z"
          fill="black"
        />
      </svg>
    );

  return (
    <svg width={widthToApply} height={heightToApply} viewBox="0 0 180 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.375H37L48 51.3749L33 51.375L32 45.375H16L15 51.3749H0L11 3.375ZM20.6667 17.375H27.3333L30.1667 34.375H17.8333L20.6667 17.375Z"
        fill={variant}
      />
      <path
        d="M71.9999 3.375C58.7451 3.375 48 14.1201 48 27.3749C48 40.6297 58.7451 51.3749 71.9999 51.3749H84V35.375L72.8991 36.8888C67.1339 37.6749 62 33.1936 62 27.375C62 21.5564 67.1339 17.0751 72.8991 17.8612L84 19.375V3.375H71.9999Z"
        fill={variant}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111 3.375C98.2974 3.375 88 13.6725 88 26.375V28.375C88 41.0776 98.2974 51.375 111 51.375C123.703 51.375 134 41.0776 134 28.375V26.375C134 13.6725 123.703 3.375 111 3.375ZM111 17.375C106.029 17.375 102 21.4044 102 26.375V28.375C102 33.3456 106.029 37.375 111 37.375C115.971 37.375 120 33.3456 120 28.375V26.375C120 21.4044 115.971 17.375 111 17.375Z"
        fill={variant}
      />
      <path d="M153 51.375H138V3.375H151L166.615 29.2212L165 3.375H180V51.375H167L151.385 25.5288L153 51.375Z" fill={variant} />
    </svg>
  );
}
