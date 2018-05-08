const allRoutes = [];
const str = 'xcj';
// const nodes = [['a', 'x'], ['d', 'c']];
// const nodes = [
//   ['d', 'f', 'c', 'k', 't'],
//   ['s', 'B', 'n', 'u', 'j'],
//   ['D', 'C', 'i', 'a', 'x'],
//   ['y', 'p', 'b', 'r', 'e'],
//   ['w', 'g', 'm', 'l', 'q'],
//   ['h', 'z', 'o', 'v', 'A'],
// ];
const nodes = [['a', 'x', 't'], ['d', 'c', 'z'], ['k', 'j', 'y']];

const BOARD = {
  meta: { width: 3, height: 3 },
  nodes: nodes,
};

function generateBoard(width, height) {
  const charLength = width * height;
  const nodes = [];
  let chars = [];

  for (let i = 0; i < charLength; i++) {
    const code = i >= 26 ? i % 26 : i;
    chars.push(String.fromCharCode(97 + code));
  }

  for (let i = 0; i < height; i++) {
    const tmp = [];
    for (let j = 0; j < width; j++) {
      const tmpCharLength = chars.length;
      const n = Math.floor(Math.random() * 10 * tmpCharLength) % tmpCharLength;
      const char = chars.splice(n, 1);
      tmp.push(...char);
    }

    nodes.push(tmp);
  }

  return { meta: { width, height }, nodes };
}

function printBoard() {
  for (let i = 0; i < BOARD.meta.height; i++) {
    console.log(BOARD.nodes[i].join('\t'));
  }

  console.log();
}

const nodeExisted = (node, nodeList) => {
  for (let n of nodeList) {
    if (n.x === node.x && n.y === node.y) {
      return true;
    }
  }

  return false;
};

/**
 *
 * @param {array} route
 */
function printRoute(route) {
  route.forEach(r =>
    process.stdout.write(`${BOARD.nodes[r.y][r.x]}(${r.x}, ${r.y})->`)
  );
  console.log();
}

/**
 *
 * @param {String} char
 */
const findStartPoint = char => {
  for (let y = 0; y < BOARD.meta.height; y++) {
    for (let x = 0; x < BOARD.meta.width; x++) {
      if (BOARD.nodes[y][x] === char) {
        return { x, y };
      }
    }
  }

  throw new Error('没有可能的路径!');
};

/**
 *
 * @param {x: String, y: Number} option
 */
const findAdjacentNodes = ({ x, y }, route) => {
  const nodes = [];
  if (x > 0) {
    nodes.push({ x: x - 1, y });
  }

  if (x < BOARD.meta.width - 1) {
    nodes.push({ x: x + 1, y });
  }

  if (y > 0) {
    nodes.push({ x, y: y - 1 });
  }

  if (y < BOARD.meta.height - 1) {
    nodes.push({ x, y: y + 1 });
  }

  return nodes.filter(n => !nodeExisted(n, route));
};

/**
 *
 * @param {*} point
 * @param {array} route
 * @param {array} line
 */
const findRoute = (point, route, line) => {
  if (!nodeExisted(point, route)) {
    route.push(point);
  }

  if (line[0] === BOARD.nodes[point.y][point.x]) {
    const s = line.shift();
    if (line.length === 0) {
      allRoutes.push(Array.from(route));
      route.pop();
      line.unshift(s);
      return;
    }
  }

  const adjacentNodes = findAdjacentNodes(
    {
      x: point.x,
      y: point.y,
    },
    route
  );

  for (let node of adjacentNodes) {
    findRoute(node, route, line);
  }

  const item = route.pop();
  if (str.includes(BOARD.nodes[item.y][item.x])) {
    line.unshift(BOARD.nodes[item.y][item.x]);
  }
};

/**
 *
 * @param {array} routes
 */
const printRoutes = routes => {
  routes.forEach(r => printRoute(r));
};
/**
 *
 * @param {String} str
 */
const findAllRoutes = str => {
  const startPoint = findStartPoint(str[0]);
  const line = str.split('');

  findRoute(startPoint, [], line);
  printRoutes(allRoutes);

  console.log(allRoutes.length);
  // console.log(res);
  // console.log(line);
  // printRoute(route);
};

printBoard(BOARD);
findAllRoutes(str);
