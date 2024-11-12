import logo from '/assets/logo.svg';
import notice from '/assets/notice.svg';
import cscenter from '/assets/cscenter.svg';
import avatar from '/assets/avatar.svg';
import darkmode from '/assets/darkmode.svg';

type TopNavBarProps = {
  marginX?: string;
  height?: string;
  gap?: string;
  iconSize?: string;
};

/**
 * TopNavBar 컴포넌트.
 * 상단 네비게이션 바를 렌더링하며, 로고와 여러 아이콘들(다크모드, 아바타, CS 센터, 공지사항)을 포함합니다.
 *
 * @param {TopNavBarProps} props - TopNavBar의 설정을 위한 프로퍼티입니다.
 * @param {string} [props.marginX='5rem'] - 상단 네비게이션 바의 좌우 여백.
 * @param {string} [props.height='3.75rem'] - 상단 네비게이션 바의 높이.
 * @param {string} [props.gap='2.5rem'] - 아이콘 간의 간격 (space-x 대체 가능).
 * @param {string} [props.iconSize='2.25rem'] - 아이콘의 크기.
 *
 * @returns {JSX.Element} 상단 네비게이션 바를 렌더링하는 JSX 엘리먼트입니다.
 */

//! 추가해야하는 기능
//! 아이콘 크기 동일하게 수정

export default function TopNavBar({
  marginX = '5rem',
  height = '3.75rem',
  gap = '2.5rem',
  iconSize = '2.25rem',
}: TopNavBarProps): JSX.Element {
  return (
    <header
      className={`flex justify-between items-center mx-[${marginX}] h-[${height}]`}>
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-[8.125rem] h-[3.75rem]"
        />
      </div>
      <nav className={`flex items-center space-x-[${gap}] h-[${height}]`}>
        <img
          src={darkmode}
          alt="Dark mode"
          className={`w-[${iconSize}] h-[${iconSize}]`}
        />
        <img
          src={avatar}
          alt="Avatar"
          className={`w-[${iconSize}] h-[${iconSize}]`}
        />
        <img
          src={cscenter}
          alt="CS Center"
          className={`w-[${iconSize}] h-[${iconSize}]`}
        />
        <img
          src={notice}
          alt="Notice"
          className={`w-[${iconSize}] h-[${iconSize}]`}
        />
      </nav>
    </header>
  );
}
