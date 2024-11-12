interface MenuItem {
  name: string;
  url: string;
}

interface SideBarProps {
  menuItems: MenuItem[];
}

/**
 * SideBar 컴포넌트.
 * 주어진 메뉴 항목 목록을 사용하여 사이드바를 렌더링합니다.
 *
 * @param {MenuItem} props.menuItem - 이동할 url 명칭, url 주소를 포함하는 MenuItem 입니다.
 * @param {SideBarProps} props - SideBar 컴포넌트의 속성의 배열입니다.
 * @returns {JSX.Element} 렌더링된 SideBar 컴포넌트 입니다.
 */

// ! 추가해야하는 기능
// ! 현재 params 의 값을 가져와 이에 해당하는 부분은 hover 된 상태가 아니더라도 파랗게 보여야 합니다.

export default function SideBar({ menuItems }: SideBarProps) {
  return (
    <>
      <nav className="px-6 pt-6 pb-2 text-sm bg-white border-2 rounded-md shadow-md ">
        <ul>
          {menuItems.map((obj, idx) => (
            <li
              key={idx}
              className="mb-4 hover:text-sky-700">
              <a href={obj.url}>{obj.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
