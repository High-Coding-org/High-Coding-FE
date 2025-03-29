import { useLocation } from 'react-router';
import { MENU_ITEMS } from './menuItems';
/**
 * SideBar 컴포넌트.
 * 주어진 메뉴 항목 목록을 사용하여 사이드바를 렌더링합니다.
 *
 * @returns {JSX.Element} 렌더링된 SideBar 컴포넌트 입니다.
 */

export default function SideBar() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="px-6 pt-6 pb-2 text-sm bg-white border-2 rounded-md shadow-md ">
        <ul>
          {MENU_ITEMS.map(({ url, name }, idx) => (
            <li
              key={idx}
              className="mb-4">
              {pathname === url ? (
                <span className="cursor-default font-bold">{name}</span>
              ) : (
                <a
                  className="hover:text-sky-700"
                  href={url}>
                  {name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
