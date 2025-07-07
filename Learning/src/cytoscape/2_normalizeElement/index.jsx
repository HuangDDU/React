import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

export default class Demo extends React.Component {
    render() {
        const elements = CytoscapeComponent.normalizeElements({
            nodes: [
                { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
                { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } }
            ],
            edges: [
                {
                    data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' }
                }
            ]
        });
        console.log("elements: ", elements);
        return <CytoscapeComponent elements={elements} style={{ width: '600px', height: '600px' }} />;
    }
}
