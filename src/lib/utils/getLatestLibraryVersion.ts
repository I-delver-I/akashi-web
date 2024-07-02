import { LibraryVersion } from '@/types/libraryVersion';

const getLatestLibraryVersion = (libraryVersions: LibraryVersion[]) => {
  if (!Array.isArray(libraryVersions)) {
    console.error('Invalid argument: libraryVersions must be an array');
    return null;
  }

  const latestVersion = libraryVersions.sort((a, b) => {
    const aVersionParts = a.name.split('.').map(Number);
    const bVersionParts = b.name.split('.').map(Number);

    for (let i = 0; i < aVersionParts.length; i++) {
      if (aVersionParts[i] > bVersionParts[i]) {
        return -1;
      } else if (aVersionParts[i] < bVersionParts[i]) {
        return 1;
      }
    }

    return 0;
  })[0];

  return latestVersion ? latestVersion : null;
};

export default getLatestLibraryVersion;
