import adjectives from '../Data/adjectives.json'
import adjectivesWeird from '../Data/adjectivesWeird.json'
import names from '../Data/names.json'
import namesWeird from '../Data/namesWeird.json'
import titles from '../Data/titles.json'
import titlesWeird from '../Data/titlesWeird.json'

class BossGenerator {
    constructor() {
        this.adjectives = adjectives.adjectives;
        this.names = names.names;
        this.titles = titles.titles;
        //Double concat to increase chances of getting one of the weird ones
        this.adjectivesWeird = this.adjectives.concat(adjectivesWeird.adjectives).concat(adjectivesWeird.adjectives);
        this.namesWeird = this.names.concat(namesWeird.names).concat(namesWeird.names);
        this.titlesWeird = this.titles.concat(titlesWeird.titles).concat(titlesWeird.titles);
    }

    generateBoss() {
        const adjective = this.getRandomElement(this.adjectives);
        const name = this.getRandomElement(this.names);
        let title = "";
        const isUsingTitle = Math.random() < 0.4;

        if (isUsingTitle) {
            const randomTitle = this.getRandomElement(this.titles);

            if (randomTitle !== name) {
                title = ` of the ${randomTitle}`;
            }
        }

        const isUsingSecondAdjective = Math.random() < 0.2;

        let secondAdjective = "";
        if (isUsingSecondAdjective) {
            secondAdjective = ` ${this.getRandomElement(this.adjectives)}`;
        }

        return `${adjective}${secondAdjective} ${name}${title}`;
    }

    generateWeirdBoss(){
        const adjective = this.getRandomElement(this.adjectivesWeird);
        const name = this.getRandomElement(this.namesWeird);
        let title = "";
        const isUsingTitle = Math.random() < 0.4;

        if (isUsingTitle) {
            const randomTitle = this.getRandomElement(this.titlesWeird);

            if (randomTitle !== name) {
                title = ` of the ${randomTitle}`;
            }
        }

        const isUsingSecondAdjective = Math.random() < 0.35;

        let secondAdjective = "";
        if (isUsingSecondAdjective) {
            secondAdjective = ` ${this.getRandomElement(this.adjectivesWeird)}`;
        }

        return `${adjective}${secondAdjective} ${name}${title}`;
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

export default BossGenerator;