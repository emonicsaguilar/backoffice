export interface PackageDimensions {
    height: number;
    length: number;
    weight: number;
    width: number;
}
export interface Image {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path?: string,
    width: number,
    height: number,
    size: number,
    url: string,
} 
export interface Media {
    data: {
        id: number,
        attributes: {
          name: string,
          alternativeText: string,
          caption: string,
          width: number,
          height: number,
          formats: {
            thumbnail: Image,
            small: Image
          },
          hash: string,
          ext: string,
          mime: string,
          size: number,
          url: string,
          previewUrl?: string,
          provider: string,
          provider_metadata: { [field: string]: string },
          createdAt: string,
          updatedAt: string
        }
    }
} 


export interface MovieAttributes {
    name: string;
    readonly: boolean;
    rating: number;
    image?: Media;
} 

export interface Movie {
    id?: string;
    attributes: MovieAttributes;
    createdAt?: string;
}

export interface NewMovie {
    name: MovieAttributes['name'];
    rating: MovieAttributes['rating'];
    readonly: MovieAttributes['readonly'];
    image?: MovieAttributes['image'];
}

export default Movie;
