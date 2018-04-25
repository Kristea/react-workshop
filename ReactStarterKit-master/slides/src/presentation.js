// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Code,
  CodePane,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Image,
  Text,
  Magic,
  Appear,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Loading from "react-loading";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import reactLogo from './assets/img/react.png';
import reactTree from './assets/img/tree.png';
import champagneTower from './assets/img/champagne.gif';
import vDom from './assets/img/vdom.png';
import allthethings from './assets/img/installallthethings.jpg';
import separation from './assets/img/separationofconcerns.png';
import paperloo from './assets/img/paperloo.jpg';
import contactForm from './assets/img/contactform.png';


// Require CSS
require('normalize.css');

const theme = createTheme();
const sln = false;
const cursor = { show: true, blink: true, element: "|", hideWhenDone: true, hideWhenDoneDelay: 500 };


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Image src={reactLogo} width="60%" height="60%"/>
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Starter Kit
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            follow this presentation at <Link href="https://neontribe.github.io/ReactStarterKit" target="_blank">
               https://neontribe.github.io/ReactStarterKit
            </Link>
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Objectives
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Build a simple and useful app
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Stick to "plain" React
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Cover the breadth of the API
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Shortcut around some frustrating parts
          </Text>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              * deliver oversimplified advice you can laugh at later
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Prerequisites
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Working familiarity with HTML
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Working knowlege of Javascript
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A text editor, a terminal emulator, a browser
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            An up-to-date Node installation (ideally via "nvm")
          </Text>
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why React?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React will not:
          </Heading>
          <Appear>
            <Heading size={2} fit textColor="secondary">
              Make a TODO list in 10 LOC...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={3} textColor="secondary">
              Eliminate boilerplate...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">
              Automatically sync anything with anything else...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">
              Provide all the features you need...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">
              Remember your mother's birthday...
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Never trust a framework which hasn't been extracted from a substantial and successful real-world codebase.</Quote>
            <Cite>Anonymous Sage (probably Simon Willison)</Cite>
          </BlockQuote>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              * Stuff you build with react feels solid and dependable
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>React Native’s biggest feature is React.</Quote>
            <Cite>Robbie McCorkell 2015</Cite>
          </BlockQuote>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              * The conceptual model is an excellent fit for user interface work
            </Text>
          </Appear>
        </Slide>
        <Magic>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <Image src={reactTree} width="60%" height="60%"/>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <BlockQuote>
              <Quote>A tree of components each of which re-renders itself and its children when data changes</Quote>
            </BlockQuote>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <Image src={champagneTower} width="60%" height="60%"/>
            <Text margin="10px 0 0" textColor="tertiary" size={4} bold>
            * only with very deterministic champagne
            </Text>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <BlockQuote>
              <Quote>A composition of pure functions which returns a UI state for a given set of input data</Quote>
            </BlockQuote>
          </Slide>
        </Magic>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Wait!
          </Heading>
          <Appear>
            <Text>What about performance?</Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
              The Virtual DOM
          </Heading>
          <Image src={vDom} width="80%" height="80%"/>
          <Appear>
            <Text textColor="tertiary">The diff generates a list of DOM mutations like a version control system outputs text mutations</Text></Appear>
        </Slide>
        <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/HelloWorld.example.js").default}
            ranges={[
              { loc: [0, 7], title: "HelloWorld.js" },
              { loc: [0, 1], note: "ES6 import ceremony" },
              { loc: [2, 5], note: "A simple 'fat arrow' function"},
              { loc: [6, 7], note: "Make it the default export"},
              { loc: [3, 4], note: "Spooky JSX part" },
            ]}/>
          <Slide transition={['slide']} bgColor="primary" textColor="secondary">
          <Heading size={3} fit lineHeight={1} textColor="secondary">
              Some Complications
          </Heading>
          <List>
            <ListItem>Javascript from the future</ListItem>
            <ListItem>Which browsers can't even run yet</ListItem>
            <ListItem>Some of it isn't even Javascript</ListItem>
            <ListItem>NPM, Webpack, Babel, ES6/7</ListItem>
            <ListItem>I can't even...</ListItem>
          </List>
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fatigued Already?
          </Heading>
          <Image src={allthethings} width="70%" height="70%"/>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Create-React-App
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            is here to save us
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} caps fit textColor="tertiary">Let's get started</Heading>
          <Terminal title="rupert@quixote: ~/public_html/ReactStarterKit" output={[
              <Typist cursor={ cursor }>nvm install 9</Typist>,
              [
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                </div>,
                <div style={{ color: "#33B969"}}>Checksums empty<br/>Now using node v9.1.0 (npm v5.5.1)</div>
              ],
              <Typist cursor={ cursor }>npm install -g create-react-app</Typist>,
              [
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                </div>,
                <div style={{ color: "#33B969"}}>/home/rupert/.nvm/versions/node/v9.1.0/bin/create-react-app -> /home/rupert/.nvm/versions/node/v9.1.0/lib/node_modules/create-react-app/index.js<br/>+ create-react-app@1.4.3<br/>added 106 packages in 7s</div>
              ],
              <Typist cursor={ cursor }>create-react-app workshop</Typist>,
              [
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                </div>,
                <div style={{ color: "#33B969"}}>Success! Created workshop at /home/rupert/tmp/test/workshop<br/>...<br/>We suggest that you begin by typing:<br/><br/>cd workshop<br/>yarn start</div>
              ],
            ]} />
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">A Little Cleanup</Heading>
          <List ordered>
            <ListItem>delete <em style={{ color: "#33B969"}}>src/index.css</em> and remove its import from <em style={{ color: "#33B969"}}>src/index.js</em></ListItem>
            <ListItem>delete <em style={{ color: "#33B969"}}>src/App.css</em> and remove its import from <em style={{ color: "#33B969"}}>src/App.js</em></ListItem>
            <ListItem>delete <em style={{ color: "#33B969"}}>src/logo.svg</em> and remove its import from <em style={{ color: "#33B969"}}>src/App.js</em></ListItem>
            <ListItem>delete the return statement (lines 5 to 15) from <em style={{ color: "#33B969"}}>src/App.js</em></ListItem>
            <ListItem>make line 5 of <em style={{ color: "#33B969"}}>src/App.js</em> read <strong style={{ color: "#f9c300"}}>return null;</strong></ListItem>
          </List>
          <Appear>
            <Text textColor="tertiary">Gratz! You've made an empty webpage!</Text>
          </Appear>
        </Slide>
        <CodeSlide
          showLineNumbers={sln}
          transition={[]}
          lang="js"
          code={require("./assets/code/HelloWorld.example.js").default}
          ranges={[
            { loc: [0, 7], title: "HelloWorld.js" },
          ]}/>
        <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/HelloWorldApp.example.js").default}
            ranges={[
              { loc: [0, 0], title: "App.js" },
              { loc: [1, 2], note: "Import your new component" },
              { loc: [5, 6], note: "Create an instance of your component in JSX and return it"},
              { loc: [0, 10] },
            ]}/>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/jsx.example.js").default}
            ranges={[
              { loc: [0, 1], title: "JSX" },
              { loc: [2, 4], note: "Use curlies to embed any Javascript expression" },
              { loc: [5, 7], note: "You can do what you like in there..." },
              { loc: [8, 13] },
              { loc: [11, 12], note: "Some tag attributes are differently named!" },
              { loc: [10, 11], note: "Most often they are camel-cased versions of the ones you know" },
              { loc: [14, 22]},
              { loc: [15, 22], note: "Be careful to wrap multi-line JSX expressions in parentheses"},
              { loc: [23, 34]},
            ]}/>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={3} fit textColor="tertiary">
            This makes people nervous
          </Heading>
          <Appear>
            <Image src={separation} width="80%" height="80%" />
          </Appear>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={3} fit textColor="primary">
            Thinking in Components
          </Heading>
          <Image src={paperloo} width="70%" height="70%" />
          <Text size={6} fit textColor="tertiary">
            * carefully-scoped shovel-ready spec ;-)
          </Text>
        </Slide>
        <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="json"
            code={require("./assets/code/cluj.data.js").default}
            ranges={[
              { loc: [0, 0], title: "Loo Data" },
              { loc: [0, 3], note: "geoJson Wrapper (data.features is an array of loos)" },
              { loc: [18, 33] },
              { loc: [21, 22], note: "loo.properties.name" },
              { loc: [23, 30], note: "geoJson Point (wgs84) loo.geometry.coordinates" },
            ]}/>
          <Slide transition={[]} bgColor="secondary">
            <Heading size={3} fit textColor="primary">
              All about "props"
            </Heading>
            <Text size={6} fit textColor="tertiary">
              how to pass data to components
            </Text>
          </Slide>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/props.example.js").default}
            ranges={[
              { loc: [0, 0], title: "Props!" },
              { loc: [0, 1], note: "A component function receives 'props' as its first argument" },
              { loc: [2, 3], note: "'props' is a read-only object!" },
              { loc: [6, 7], note: "'props' is populated by the attributes applied to the component in JSX" },
              { loc: [12, 15], note: "Setting default props" },
              { loc: [20, 24], note: "Input validation with the prop-types package" },
            ]}/>
          <Slide transition={[]} bgColor="primary">
            <Heading size={3} textColor="secondary">
              LooMap
            </Heading>
            <Heading size={4} textColor="tertiary">
              the list mission
            </Heading>
            <List ordered>
              <ListItem>Copy the fixture from <Link href="https://git.io/vbkt7">https://git.io/vbkt7</Link></ListItem>
              <ListItem>Import it in <strong style={{ color: "#33B969"}}>App.js</strong></ListItem>
              <ListItem>Build a <strong style={{ color: "#33B969"}}>Loo</strong> component for displaying individual loos</ListItem>
              <ListItem>Build a <strong style={{ color: "#33B969"}}>LooList</strong> which renders a list of <strong style={{ color: "#33B969"}}>Loo</strong>s </ListItem>
              <ListItem>Render a <strong style={{ color: "#33B969"}}>LooList</strong> in <strong style={{ color: "#33B969"}}>App.js</strong> and connect it to the fixture data</ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="primary">
              3rd Party Libraries
            </Heading>
            <Heading size={4} fit textColor="tertiary">
              making a map with <Link href="https://github.com/PaulLeCam/react-leaflet">react-leaflet</Link>
            </Heading>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={2} caps fit textColor="tertiary">Install react-leaflet</Heading>
            <Terminal title="rupert@quixote: ~/public_html/ReactStarterKit/loomap" output={[
                <Typist cursor={ cursor }>yarn add leaflet react-leaflet prop-types</Typist>,
                [
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Loading type="bars" color="#fff" height="30" width="30" />
                  </div>,
                  <div>
                    <span style={{ color: "#33B969"}}>success</span> Saved lockfile.<br/>
                    <span style={{ color: "#33B969"}}>success</span> Saved 3 new dependencies.<br/>
                    ├─ leaflet@1.2.0<br/>
                    ├─ prop-types@15.6.0<br/>
                    └─ react-leaflet@1.7.4<br/>
                    Done in 4.75s.
                  </div>
                ],
              ]} />
          </Slide>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/LooMap.example.js").default}
            ranges={[
              { loc: [0, 0], title: "LooMap.js" },
              { loc: [0, 7] },
              { loc: [8, 10] },
              { loc: [11, 25] },
              { loc: [13, 23] },
              { loc: [17, 21] },
              { loc: [21, 22] },
            ]}/>
          <Slide>
            <CodePane
              textSize="16"
              lang="javascript"
              source={require("./assets/code/LooMap.example.js").default}
            />
          </Slide>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/setupLeaflet.example.js").default}
            ranges={[
              { loc: [0, 8], title: "Fixing the marker issue" },
              { loc: [0, 8], note: "Add these lines to LooMap.js" }
            ]}/>
          <Slide>
            <Heading size={3} textColor="secondary">
              LooMap
            </Heading>
            <Heading size={4} textColor="tertiary">
              the mini-map mission
            </Heading>
            <List ordered>
              <ListItem>Add a nice mini-map to each <strong style={{ color: "#33B969"}}>Loo</strong> in the <strong style={{ color: "#33B969"}}>LooList</strong></ListItem>
              <ListItem>Refactor <strong style={{ color: "#33B969"}}>LooMap</strong> so that it can be used in both views</ListItem>
              <ListItem><em>(stretch)</em> Find a way to disable pan and zoom on the mini-maps</ListItem>
              <ListItem><em>(stretch)</em> Set some defaultProps to <strong style={{ color: "#33B969"}}>LooMap</strong></ListItem>
              <ListItem><em>(stretch)</em> Use prop-types to validate the inputs to <strong style={{ color: "#33B969"}}>LooMap</strong></ListItem>
            </List>
            <Heading size={6} fit textColor="secondary">
              * Put your hand in the air when you make a map of the Indian Ocean by mistake
            </Heading>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit textColor="secondary">
              Stateful components
            </Heading>
            <Heading size={2} fit textColor="tertiary">
              how to switch between views?
            </Heading>
          </Slide>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/App.example.js").default}
            ranges={[
              { loc: [2, 3], title: "A Stateful Component" },
              { loc: [4, 10] },
              { loc: [11, 14] },
              { loc: [11, 14], note: "Hey, show them the dev tools! (state-demo app)" },
            ]}/>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/AppState.example.js").default}
            ranges={[
              { loc: [2, 7], title: "Introducing setState" },
              { loc: [2, 7], note: "exploit fat arrow's bound scope + babel's class properties" },
              { loc: [3, 6], note: "setState queues an update to component state"},
              { loc: [20, 21], note: "setState takes an updater function and a callback"},
              { loc: [30, 35], note: "updater receives current state and props, returns an object"},
            ]}/>
            <CodeSlide
              showLineNumbers={sln}
              transition={[]}
              lang="js"
              code={require("./assets/code/Nav.example.js").default}
              ranges={[
                { loc: [2, 3], title: "Nav.js" },
                { loc: [4, 14] },
                { loc: [6, 7], note: "For years this has been a sin..."},
              ]}/>
          <Slide>
            <Heading size={3} textColor="secondary">
              LooMap
            </Heading>
            <Heading size={4} textColor="tertiary">
              the nav state mission
            </Heading>
            <List ordered>
              <ListItem>Render <strong style={{ color: "#33B969"}}>LooMap</strong> or <strong style={{ color: "#33B969"}}>LooList</strong> in <strong style={{ color: "#33B969"}}>App</strong> respecting state</ListItem>
              <ListItem>Build a <strong style={{ color: "#33B969"}}>Nav</strong> component and render it in <strong style={{ color: "#33B969"}}>App</strong></ListItem>
              <ListItem>Add handler properties to <strong style={{ color: "#33B969"}}>App</strong> to control the state</ListItem>
              <ListItem>Pass the handlers to <strong style={{ color: "#33B969"}}>Nav</strong></ListItem>
              <ListItem><em>(stretch)</em> Refactor to achieve this with a single handler method</ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="primary">
              Component Lifecycle
            </Heading>
            <Heading size={3} textColor="tertiary">
              mounting
            </Heading>
            <List>
              <ListItem>
                <Code textColor="tertiary">constructor()</Code>
              </ListItem>
              <Appear>
                <ListItem>
                  <Code textColor="tertiary">componentWillMount()</Code>
                </ListItem>
              </Appear>
              <ListItem>
                <Code textColor="tertiary">render()</Code>
              </ListItem>
              <Appear>
                <ListItem>
                  <Code textColor="tertiary">componentDidMount()</Code>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="primary">
              Component Lifecycle
            </Heading>
            <Heading size={3} textColor="tertiary">
              updating
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  <Code textColor="tertiary">componentWillReceiveProps()</Code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Code textColor="tertiary">shouldComponentUpdate()</Code>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Code textColor="tertiary">componentWillUpdate()</Code>
                </ListItem>
              </Appear>
              <ListItem>
                <Code textColor="tertiary">render()</Code>
              </ListItem>
              <Appear>
                <ListItem>
                  <Code textColor="tertiary">componentDidUpdate()</Code>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="primary">
              Component Lifecycle
            </Heading>
            <Heading size={3} textColor="tertiary">
              unmounting
            </Heading>
            <List>
              <ListItem>
                <Code textColor="tertiary">componentWillUnmount()</Code>
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit textColor="primary">
              Component Lifecycle
            </Heading>
            <Heading size={3} textColor="tertiary">
              error handling
            </Heading>
            <List>
              <ListItem>
                <Code textColor="tertiary">componentDidCatch()</Code>
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps textColor="secondary">
              Daunting?
            </Heading>
            <Heading size={3} fit textColor="tertiary">
             start with simple rules
            </Heading>
            <List>
              <ListItem>
                use <Code>constructor()</Code> to initialize state
              </ListItem>
              <ListItem>
                you'll always implement <Code>render()</Code>
              </ListItem>
              <ListItem>
                fetch data in <Code>componentDidMount()</Code>
              </ListItem>
              <ListItem>
                leave the rest for when you need them (Error-handling, Direct DOM manipulation, performance management, etc.)
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/componentDidMount.example.js").default}
            ranges={[
              { loc: [0, 0], title: "Fetching Data" },
              { loc: [1, 7], note: "the new 'fetch' API" },
              { loc: [7, 10], note: "parsing json from the response returns a promise" },
              { loc: [10, 15], note: "now set the data into state" },
              { loc: [21, 31], note: "full hipster (look, no semis...)" },
            ]}/>
          <Slide>
            <Heading size={3} textColor="secondary">
              LooMap
            </Heading>
            <Heading size={4} textColor="tertiary">
              the fetch mission
            </Heading>
            <List ordered>
              <ListItem>Implement <Code>componentDidMount()</Code> in <strong style={{ color: "#33B969"}}>App</strong></ListItem>
              <ListItem>Fetch data from: <br/><Code textSize={26}>https://gbptm-ui.herokuapp.com/loos/near/1.2958/52.6335</Code></ListItem>
              <ListItem>Set it into state</ListItem>
              <ListItem>Supply it to the components in <Code>render()</Code></ListItem>
              <ListItem><em>(stretch)</em> Figure out what's going wrong...</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={3} fit caps textColor="secondary">
              React Starter Kit
            </Heading>
            <Heading size={4} fit textColor="tertiary">
              recap &amp; closing remarks
            </Heading>
            <List>
              <ListItem>Use create-react-app</ListItem>
              <ListItem>Think in components</ListItem>
              <ListItem>Stick to pure components whenever possible</ListItem>
              <ListItem>Lift state up</ListItem>
              <ListItem>Enjoy the simplicity afforded by the conceptual model</ListItem>
              <ListItem>Avoid state management libraries when starting out</ListItem>
              <ListItem>The docs at <Link href="https://reactjs.org/">reactjs.org</Link> are increasingly excellent</ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Image src={contactForm} width="70%" height="70%"/>
          </Slide>
      </Deck>
    );
  }
}
