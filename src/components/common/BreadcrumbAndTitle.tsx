import { useLocation } from 'react-router-dom';

import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { titles } from '@/routes/Breadcrumb/titles';

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
    .filter(name => titles[name]);
  const pageTitle = titles[validPathNames.at(-1)];

  return (
    <div>
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
                    <BreadcrumbPage>{titles[value]}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={to}>{titles[value]}</BreadcrumbLink>
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
    </div>
  );
}
