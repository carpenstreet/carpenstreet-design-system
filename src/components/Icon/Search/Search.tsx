import { IconCommonPropsType } from '@components/Icon/Icon.types.ts';

const SearchIcon = ({ width = 24, height = 24, color = '#313135' }: IconCommonPropsType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2426 15.2426C17.5858 12.8995 17.5858 9.1005 15.2426 6.75736C12.8995 4.41421 9.1005 4.41421 6.75736 6.75736C4.41421 9.1005 4.41421 12.8995 6.75736 15.2426C9.1005 17.5858 12.8995 17.5858 15.2426 15.2426ZM16.6569 16.6569C19.781 13.5327 19.781 8.46734 16.6569 5.34315C13.5327 2.21895 8.46734 2.21895 5.34315 5.34315C2.21895 8.46734 2.21895 13.5327 5.34315 16.6569C8.46734 19.781 13.5327 19.781 16.6569 16.6569Z" fill={color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9496 15.9498C16.3401 15.5592 16.9732 15.5592 17.3638 15.9498L20.8993 19.4853C21.2898 19.8758 21.2898 20.509 20.8993 20.8995C20.5088 21.29 19.8756 21.29 19.4851 20.8995L15.9496 17.364C15.559 16.9734 15.559 16.3403 15.9496 15.9498Z" fill={color} />
    </svg>
  );
};

export default SearchIcon;
