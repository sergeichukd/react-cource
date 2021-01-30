class Figure {
  constructor(area, figure, input) {
    this.area = area;
    this.figure = figure;
    this.input = input;
  }
}

function calculateArea(figure, ...params) {
  switch (figure) {
    case 'square':
      return new Figure(
        area = params[0] ** 2,
        figure = figure,
        input = params[0]
      );

    case 'rectangle':
      return new Figure(
        area = params[0] * params[1],
        figure = figure,
        input = [params[0], params[1]]
      );
    case 'circle':
      return new Figure(
        area = (params[0] ** 2) * 3.14,
        figure = figure,
        input = params[0]
      );
    default:
      return null;
  }
}

console.dir(calculateArea('square', 9, 10000));
console.dir(calculateArea('rectangle', 4, 5, 10000));
console.dir(calculateArea('circle', 10, 10000));
console.dir(calculateArea('noSuchFigure', 1, 2, 3, 4));
