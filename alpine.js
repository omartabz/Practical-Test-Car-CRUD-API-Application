import { mostPopularCar } from "./mostPopularCar";

document.addEventListener('alpine:init', () => {

    Alpine.data('mostPopularCar', function () {
        return {
            title: 'Most Popular Car',
            carCounter: 0,
            cars: [],
            color: '',
            model: '',
            reg_number: '',
            mostPopularCar:'',

            showcar() {
                this.cars();
                this.carCounter()
                return axios.get('https://bootcamp.projectcodex.co/cars.json')
                    .then(result => {
                        this.cars = result.data.cars;
                        return this.mostPopularCar;
                    }
                    )
            }
        }
    }



)
}
)