import {CarType} from "./interface/car-type.enum";

/**
 * You can check functional in playground:
 * https://www.typescriptlang.org/play?ssl=37&ssc=33&pln=37&pc=14#code/KYOwrgtgBAgmAuB7AKgTwA7CgbwFBQKgGEYAlKAXigHITTqAafQgWQEkA5NgNQFEPKNdlz4dGzAslIBVIgGlB1KbLniAvrlwBjADYBDAM4HiegE44JUdKcTxgWuwBMoehCgzAAXLDdpMguCQ-YAA6OgBuS2tbeycoLUQdRHMqalNgR2pIwisbOwcMq307DkgAI2AUmgBFAEZ66rr6rM0csHRHPTsACgSk028DeFMASxAAcwYiruBSiAqBqCHRiYBKCxyc+AALEYMQvuTBQ9NszYIdvZD0YtnyysEbmbmFyMsc9PgwUxAcJ5L7otLvt-nd5pUpidvMCDolkmozgQNJZdIgQMBuvAPN5Au5MKtobtjHhzgQEiAhvEkujCXtBAB5MoAK1iIQA1sBUAZMUTViF0o4wFoMd09FotJDvqZ1hQAHwbUk5EYAMygPKu20M9IA7iAAAo2TCmLG9KWrdYkxWksVaADaWilAF1BMD7VKXMYOahEKrgY73qSEQHzp9vr8bYjNmopoyWQ4DukZur9uTlkKkKZrnlbB5zcGqWjgLbqK4gh5qM6qFjMG9FaGfgX0ZGNBpU-AoGMhnoQMLBOjtSZTN1Vm821AIGMRgA3UCCTvwbvCg7UjG44IhYQ8fgj3ATkDT0AhdqdHrUVDAHRJbWMGgAdQATI-bw-H9Qd9o0ZThkK2YI9weQGXQtujXDwQmUeQd2-LQ2SPDok2ocZ0lQG9qF4ABmTDeAwzC31HT9ElCJJxm6edF2AHdU0IkJiO6f8ZxASiCJ0IjEBI6C2RHIA
 */
class Car {
    protected autoType: CarType = CarType.CAR;
    protected color = 'red';
    protected plateNumber = 'Q111QQ111';

    update(color: string, plateNumber: string) {
        this.color = color;
        this.plateNumber = plateNumber;

        return {plateNumber: this.plateNumber, color: this.color};
    }

    clone(type: CarType): this {
        const clone: this = Object.keys(this).reduce((acc, curr) => {
            if (this.hasOwnProperty(curr)) {
                acc[curr] = this[curr as keyof this]
            }
            return acc;
        }, Object.create(this.constructor.prototype))
        clone['autoType'] = type;

        return clone;
    }
}

export const CarInstance = new Car();
