export default `const world = <h1>Hello, World!</h1>;

const name = 'Folks';
const hi = <h1>Hello, {name}!</h1>

const list = ['Glorious', 'Folks'];
const greet = <h1>Hi, {list.join(' ')}!</h1>;

const cn = 'wrapper-class';
const wrap = <div
  tabIndex="0"
  className={cn}
  />;

const vlads = ['Vlad', 'Vlad', 'Vlad'];
const group = (
  <ul>
    {attendees.map(
      name => <li>Hello, {name}!</li>
    )}
  </ul>
);

const jsxElement = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

















`;
