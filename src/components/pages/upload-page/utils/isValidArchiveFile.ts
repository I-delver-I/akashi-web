export const isValidArchiveFile = (file: File) => {
  if (file) {
    const allowedExtensions = ['.zip', '.rar', '.tar', '.gzip', '.7z'];
    const fileExtension = file.name
      .slice(file.name.lastIndexOf('.') + 1)
      .toLowerCase();
    return allowedExtensions.includes(`.${fileExtension}`);
  }
};
