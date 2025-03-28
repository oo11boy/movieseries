
export interface MenuItem {
    id: number;
    text: string;
    link: string;
  }


  // Define interfaces for the data structures
  export interface DownloadPart {
  part: number;
  size: string;
  downloadLink: string;
  streamLink: string;
}

export interface DownloadOption {
  quality: string;
  subtitle: string;
  parts: DownloadPart[];
}

export interface CastMember {
  name: string;
  img: string | null;
}

export interface CrewMember {
  name: string;
}

export interface MovieInfo {
  bgimg: string;
  img: string;
  title: {
    persian: string;
    english: string;
  };
  series: boolean;
  year: number;
  duration: string;
  countries: string[];
  genres: string[];
  imdb: {
    rating: number;
    link: string;
  };
  age_rating: string;
  user_rating: string;
  synopsis: {
    persian: string;
    cast_note: string;
  };
  cast: CastMember[];
  crew: {
    director: CrewMember[];
    writers: CrewMember[];
  };
}

export interface Movie {
  title: string;
  genre: string;
  year: number;
  description: string;
  image: string;
}
