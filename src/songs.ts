export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean = songTitle === "" ? true : false;
  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => (songTitles.includes(songTitle) ? true : false);

export const isTitleShort = (songTitle: string): boolean =>
  songTitle.length < 3 ? true : false;

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean = songTitles.length > 5 ? true : false;
  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles = songTitles.toSorted();
};

export const getSongsCount = (songTitles: string[]): number =>
  songTitles.length;

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string = errorCode;

  switch (errorMessage) {
    case "required":
      errorMessage = "No has introducido ningún título";
      break;

    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "too-short":
      errorMessage = "El título es demasiado corto";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
  }
  return errorMessage;
};
