class Rectangle {
  constructor(length, width) {
      this.length = length;
      this.width = width;
  }

  area() {
      return this.length * this.width;
  }
}

// Example usage
const rect = new Rectangle(5, 3);
console.log("Area:", rect.area());
