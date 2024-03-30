import { FC } from 'react';

import { LibraryVersionDependency } from '@/types/libraryVersionDependency';

export interface DependenciesListProps {
  dependencies: LibraryVersionDependency[];
}

const DependenciesList: FC<DependenciesListProps> = ({ dependencies }) => {
  console.log(dependencies);
  return (
    <div>
      {dependencies.map((d, index) => (
        <div key={d.id}>
          <h3>
            {d.framework.productName} {d.framework.versionName}
          </h3>
          <ul>
            <li key={index}>
              {d.dependencyLibrary.name} {d.supportedVersions}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DependenciesList;
