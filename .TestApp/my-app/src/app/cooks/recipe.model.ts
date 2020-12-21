//Вар. 1
export class Recipe {
    public id: number;
    public type: string;
    public name: string;
    public description: string;
    public imageUrl: string;
    public likes: number;
    public favourites: Array<any>;

    constructor(id: number, type: string, name: string, description: string, imageUrl: string, likes: number, favourites: Array<any>) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.likes = likes;
        this.favourites = favourites;
    }
}

//Вар. 2
// export class Recipe {
//     constructor(public name: string, public amount: number) {}
// }