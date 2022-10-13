class TV {
    brand: string;
    private size: number;
    private resolution: number;
    private connetions: string;
    connectedTo?: string;

    constructor(b:string, s:number, r:number, c:string){
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connetions = c;
    }
    turnOn(){
        console.log(`The tv brand is ${this.brand} your size ${this.size}, your resolution ${this.resolution}, your connected to ${this.connectedTo}`);
    }
};

const newTv = new TV ('lg',55,4,'all tvs');

newTv.turnOn();