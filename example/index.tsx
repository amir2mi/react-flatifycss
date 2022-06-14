import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'flatifycss/dist/css/flatify-min.css';
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '../dist';

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab> <Tab>Two</Tab> <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
