const Calculate = {
  factorial(inputNumber) {
    if (inputNumber === 1 || inputNumber === 0) {
      return 1
    }
    return inputNumber * this.factorial(inputNumber - 1)
  }
}

module.exports = Calculate;