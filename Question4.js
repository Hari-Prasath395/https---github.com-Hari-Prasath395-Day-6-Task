//write a class to calculate the uber price

class Uber {
  constructor(fare, perMinuteCharge, perDistanceCharge) {
    this.fare = fare;
    this.perMinuteCharge = perMinuteCharge;
    this.perDistanceCharge = perDistanceCharge;
  }
  calculation(distance, time) {
    return (
      this.fare +
      this.perDistanceCharge * distance +
      this.perMinuteCharge * time
    );
  }
}

const olaFare = new Uber(50, 1, 10);
console.log(olaFare.calculation(15, 30));
