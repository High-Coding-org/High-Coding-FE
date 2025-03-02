import { useLocation } from 'react-router-dom';

import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { TITLES } from '@/routes/Breadcrumb/titles';

/**
 * Breadcrumb & 제목 컴포넌트
 * Breadcrumb과 해당 경로에 맞는 제목을 렌더링합니다.
 *
 * @returns {JSX.Element} Breadcrumb과 제목을 렌더링하는 컴포넌트입니다.
 */
export default function BreadcrumbAndTitle() {
  const location = useLocation();

  const validPathNames = location.pathname
    .split('/')
    .filter(name => TITLES[name]);
  const pageTitle = TITLES[validPathNames.at(-1)];

  return (
    <>
      <BreadcrumbComponent>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {validPathNames.map((value, index) => {
            const to = `/${validPathNames.slice(0, index + 1).join('/')}`;
            const isLastItem = index === validPathNames.length - 1;

            return (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={value}>
                  {isLastItem ? (
                    <BreadcrumbPage>{TITLES[value]}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={to}>{TITLES[value]}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </>
            );
          })}
        </BreadcrumbList>
      </BreadcrumbComponent>

      {pageTitle && (
        <h1 className="font-bold text-[1.75rem] mt-2">{pageTitle}</h1>
      )}
    </>
  );
}
