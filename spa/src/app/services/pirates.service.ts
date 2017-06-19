
import {Injectable} from "@angular/core";

//Loading interfaces
import {Pirate} from "../interfaces/pirate.interface";

@Injectable()
export class PiratesService {
    private pirates:Pirate[] = [{
        id: 1,
        name: "Monkey D. Luffy",
        ability: "As captain of the Straw Hat Pirates, Monkey D. Luffy has immense physical strength, and is capable of lifting up large boulders, breaking stone, shattering steel with his bare hands, pushing apart large buildings and shoulder flipping a huge man; his strength was further proven when he effortlessly stopped a stomp from Donquixote Doflamingo, a tremendously strong man who is twice Luffy's size, with only one foot from an angle with no leverage.",
        img: "assets/img/luffy.png",
        birth: "1998-05-05",
        band:"mugiwara"
    }, {
        id: 2,
        name: "Roronoa Zoro",
        ability: "An extremely powerful and strong fighter with immense potential, Zoro is one of the top fighters of the Straw Hat Pirates. When taking his stern personality into account, people often mistake him as the captain of the Straw Hats after witnessing his skills in battle. Despite a near constant rivalry with fellow Straw Hat Sanji, the two have proven to be a near-unstoppable force when attacking together, as exemplified in the fight against the Groggy Monsters.",
        img: "assets/img/zoro.png",
        birth: "1996-11-11",
        band:"shanks"
    }, {
        id: 3,
        name: "Vinsmoke Sanji",
        ability: "Sanji is the only member of the crew who does not utilize weapons or devil fruits in combat, relying instead on a martial arts combat style that centers on his leg strength.",
        img: "assets/img/sanji.png",
        birth: "1996-03-02",
        band: "whitebeard"
    }, {
        id: 4,
        name: "Ussop",
        ability: "Usopp is a extremely skilled sniper. Since early in the series, he was shown to have inherited much of his father Yasopp's exceptional marksman skills. Usopp has outstanding marksmanship abilities with the slingshot, his favourite weapon. His skills when used in conjuntion with unique ammunitions such as the Firebird Star, Usopp can deal devastating damage in long range combat.",
        img: "assets/img/ussop.png",
        birth: "1998-04-01",
        band: "mugiwara"
    }, {
        id: 5,
        name: "Brook",
        ability: "As much as Brook normally goofs around on the ship engaging in acts of silliness with Luffy, he is still a formidable opponent. Due to his previous experiences and skills that he amassed from the days when the Pirate King, Gol D. Roger was still active, Brook, in all respects, is a veteran pirate.",
        img: "assets/img/brook.png",
        birth: "1998-04-03",
        band: "shanks"
    }, {
        id: 6,
        name: "Nami",
        ability: "Being the assigned navigator of the Straw Hat Pirates, Nami is responsible for evaluating the direction that the ship goes as they sail further into the sea. Nami also tends to act as the crew's de facto treasurer, managing the crew's money and allocating spending money whenever they arrive at a new location.",
        img: "assets/img/nami.png",
        birth: "1997-07-03",
        band: "whitebeard"
    }, {
        id: 7,
        name: "Nico Robin",
        ability: "At a young age, Robin acquired a bounty of Beli79,000,000 for having the ability to read Poneglyphs, which told of the Void Century. She was branded as being considerably powerful, and supposedly sinking six Buster Call warships with her Devil Fruit powers. This was all a lie fabricated by the government. Those ships were actually destroyed by Jaguar D. Saul after helping Robin escape during the destruction of Ohara.",
        img: "assets/img/robin.png",
        birth: "1987-02-06",
        band: "mugiwara"
    }, {
        id: 8,
        name: "Franky",
        ability: "As a member of the Straw Hat Pirates, Franky is a competent crewmate as well as a valuable asset for the crew. Being their official shipwright, Franky is in charge of maintaining the Thousand Sunny's condition, along with the other vehicles, instruments, or weapons that the Straw Hats may employ. He is also an accomplished surgeon as he was able to perform an operation on himself twice, despite the fact that he does not specialize in the field. He was able to do this even though he was close to death.",
        img: "assets/img/franky.png",
        birth: "1981-03-09",
        band: "shanks"
    }, {
        id: 9,
        name: "Tony Tony Chopper",
        ability: "Chopper is a reindeer that ate a Devil Fruit called the Hito Hito no Mi. He came from Drum Island where he learned how to be a doctor, which also makes him the only member of the Straw Hat Pirates who was born on the Grand Line.",
        img: "assets/img/chopper.png",
        birth: "2000-12-24",
        band: "whitebeard"
    }];

    //Function for returning pirates array
    public getPirates():Pirate[] {
        return this.pirates;
    };

    //Function for getting a specific pirate by id
    public getPirateById(id:number):Pirate {
        let pirateFound:Pirate = null;

        for(let pirate of this.pirates) {
            if (pirate.id === id) {
                pirateFound = pirate;
            }
        }

        return pirateFound;
    };

    //Function for searching all pirate names that match to searching value, then return an array
    public searchPirate(value:string):Pirate[] {
        let piratesArray:Pirate[] = [];
        value = value.toLowerCase();

        for(let pirate of this.pirates) {
            let name = pirate.name.toLowerCase();

            if (name.indexOf(value) !== -1) {
                piratesArray.push(pirate);
            }
        }

        return piratesArray;
    };
};
