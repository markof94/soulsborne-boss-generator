import data from '../assets/data.json'

class BossGenerator {
    constructor() {
        this.adjectives = data.adjectives;
        this.names = data.names;
        this.titles = data.titles;
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

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

export default BossGenerator;