export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean = false;
  if (songTitle === "") {
    isEmpty = true;
  }
  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean = false;

  if (songTitles.includes(songTitle)) {
    doesExist = true;
  }

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean = false;
  if (songTitle.length < 3) {
    isShort = true;
  }
  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean = false;
  if (songTitles.length >= 5) {
    isFull = true;
  }
  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles = songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number = 0;
  for (let song = 0; song < songTitles.length; song++) {
    songsCount++;
  }
  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles = songTitles.splice(position);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "required":
      errorMessage = "No has introducido ningún título";
      return errorMessage;
    case "exists":
      errorMessage = "La canción ya existe";
      return errorMessage;
    case "too-short":
      errorMessage = "El título es demasiado corto";
      return errorMessage;
    case "limit":
      errorMessage = "La playlist está llena";
      return errorMessage;
  }
  return "";
};
