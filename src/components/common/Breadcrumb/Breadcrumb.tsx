import { useLocation } from 'react-router-dom';

import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { titles } from '@/routes/BreadcrumbTitle';

/**
 * Breadcrumb & 제목 컴포넌트
 * Breadcrumb과 해당 경로에 맞는 제목을 렌더링합니다.
 *
 * @returns {JSX.Element} Breadcrumb과 제목을 렌더링하는 컴포넌트입니다.
 */
export default function BreadcrumbAndTitle() {
  const location = useLocation();
  const pathNames = location.pathname.split('/').filter(Boolean);
  const pageTitles = titles[pathNames[pathNames.length - 1]];

  return (
    <div className="inline-block">
      <BreadcrumbComponent>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathNames.length > 0 && <BreadcrumbSeparator />}
          {pathNames.map((value, index) => {
            const to = `/${pathNames.slice(0, index + 1).join('/')}`;
            if (!titles[value]) {
              return null;
            }

            const isLastItem = index === pathNames.length - 1;

            return (
              <>
                <BreadcrumbItem>
                  {isLastItem ? (
                    <BreadcrumbPage>{titles[value]}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={to}>{titles[value]}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < pathNames.length - 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </BreadcrumbComponent>

      <h1 className="font-bold text-[1.75rem] mt-2">{pageTitles}</h1>
    </div>
  );
}
