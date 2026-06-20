export class Team{
    constructor(id, name, group, points, played, goalDifference){
        this.id = id;
        this.name = name;
        this.group = group;
        this.played =  played;
        this.goaldifference = goaldifference  ;

    }

    static fromObject(data){
        return new Team(
        
            data.id,
            data.name,
            data.group,
            data.played,
            data.goaldifference
        );
    }
    get points(){
        return this._points;
    }

    set points(value){
        if(value < 0){
            throw new Error("Invalid points")
        }
        this._points = value;
    }
    
    get summary(){
        return `${this.name} - Group ${this.group} - ${this.points}`;
    }
}