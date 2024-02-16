function make_album(
  artist_name: string,
  title: string,
  number_of_tracks?: number
) {
  if (!number_of_tracks) {
    return {
      artist_name,
      title,
    };
  }
  return {
    artist_name,
    title,
    number_of_tracks,
  };
}

const myAlbum = make_album("abc", "Title ABC");
const mySecondAlbum = make_album("def", "Title DEF");
const myThirdAlbum = make_album("ghi", "Title GHI", 8);

console.log(myAlbum);
console.log(mySecondAlbum);
console.log(myThirdAlbum);
