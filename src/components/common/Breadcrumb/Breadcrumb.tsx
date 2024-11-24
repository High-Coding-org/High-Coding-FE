import { useLocation } from 'react-router-dom';

import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { TITLES } from './BreadcrumbTitle';

/**
 * Breadcrumb & 제목 컴포넌트
 * Breadcrumb과 해당 경로에 맞는 제목을 렌더링합니다.
 *
 * @returns {JSX.Element} Breadcrumb과 제목을 렌더링하는 컴포넌트입니다.
 */
export default function BreadcrumbAndTitle() {
  const LOCATION = useLocation();
  const PATH_NAMES = LOCATION.pathname.split('/').filter(Boolean);
  const PAGE_TITLE = TITLES[PATH_NAMES[PATH_NAMES.length - 1]];

  return (
    <div className="inline-block">
      <BreadcrumbComponent>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {PATH_NAMES.length > 0 && <BreadcrumbSeparator />}
          {PATH_NAMES.map((value, index) => {
            const TO = `/${PATH_NAMES.slice(0, index + 1).join('/')}`;
            if (!TITLES[value]) {
              return null;
            }

            const IS_LAST_ITEM = index === PATH_NAMES.length - 1;

            return (
              <>
                <BreadcrumbItem>
                  {IS_LAST_ITEM ? (
                    <BreadcrumbPage>{TITLES[value]}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={TO}>{TITLES[value]}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < PATH_NAMES.length - 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </BreadcrumbComponent>

      <h1 className="font-bold text-[1.75rem] mt-1">{PAGE_TITLE}</h1>
    </div>
  );
}
