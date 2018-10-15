class GeneticAlgorithm {

  currentGeneration = null

  constructor (generationGenerator, continue, report) {
    this.generationGenerator = generationGenerator
    this.continue = continue
    this.report = report
  }

  run () {

  }

  next() {
    if (this.currentGeneration == null)
      this.currentGeneration = this.generationGenerator.first()
    else
      this.currentGeneration = this.generatorGenerator.next(this.currentGeneration)
  }


  pause () {

  }

}